import getConfig from "./config";

export function createMessageDetails(email: string, token: string, type: "verifyEmail" | "resetPassword") {
    const verifyLink = `${getConfig().apiGateway}/v1/auth/verify?token=${token}`;
    const resetPasswordLink = `${getConfig().apiGateway}/v1/auth/reset-password?token=${token}`;
    return {
      receiverEmail: email,
      link: type === "verifyEmail" ? verifyLink : resetPasswordLink,
      template: type,
    };
  }