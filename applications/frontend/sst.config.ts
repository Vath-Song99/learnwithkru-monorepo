import { HostedZone } from "aws-cdk-lib/aws-route53";
import { SSTConfig } from "sst";
import { Bucket, NextjsSite } from "sst/constructs";
import * as cdk from "aws-cdk-lib";

const ROOT_DOMAIN_NAME = "learnwithkru.com";
const DOMAIN_NAME = `learnwithkru.com`;

export default {
  config(_input) {
    return {
      name: `kru-frontend`,
      region: "us-east-1",
    };
  },
  stacks(app) {
    // A STACK DEPLOY NEXTJS TO AWS
    app.stack(function Site({ stack }) {
      // Manually specify hosted zone attributes
      const hostedZone = HostedZone.fromHostedZoneAttributes(
        stack,
        "HostedZone",
        {
          hostedZoneId: "Z10015382VXJ2G62QLX9",
          zoneName: ROOT_DOMAIN_NAME,
        }
      );
      console.log(
        `Hosted Zone ID: ${hostedZone.hostedZoneId}, Zone Name: ${hostedZone.zoneName}`
      );

      // CREATE A SSL CERTIFICATE LINKED TO THE HOSTED ZONE
      const certificate = new cdk.aws_certificatemanager.Certificate(
        stack,
        "Certificate",
        {
          domainName: DOMAIN_NAME,
          validation:
            cdk.aws_certificatemanager.CertificateValidation.fromDns(
              hostedZone
            ),
        }
      );

      // Create the S3 bucket
      const bucket = new Bucket(stack, "PublicBucket");

      // NEXTJS SITE
      const site = new NextjsSite(stack, "site", {
        customDomain: {
          domainName: DOMAIN_NAME,
          domainAlias: `www.${DOMAIN_NAME}`,
          cdk: {
            hostedZone,
            certificate,
          },
        },
        bind: [bucket],
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
