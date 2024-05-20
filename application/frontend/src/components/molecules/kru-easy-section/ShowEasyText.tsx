import React from "react";
import { Typography } from "@/components";

const ShowEasyText: React.FC = ({ }) => {
  return (
    <div className="w-full flex justify-center items-center py-10 ">
      <div className="w-[80%] grid gap-3 md:grid-flow-col md:gap-1  ">
        <div className="">
          <Typography className="" fontSize="lg" variant="bold">
            Scheduling
          </Typography>
          <article className="text-sm text-center text-clip text-wrap">
            scheduling tools, allowing students to communicate with tutors,
            schedule lessons, and manage their appointments seamlessly.has
            language, subject, price, availability, and tutor reviews.
          </article>
        </div>

        <div className=" ">
          <Typography className="" fontSize="lg" variant="bold">
            Search and Filters
          </Typography>
          <article className="text-sm text-center text-clip text-wrap">
            Students can easily search for tutors based on criteria such as
            language, subject, price, availability, and tutor reviews.
          </article>
        </div>

        <div className="">
          <Typography className="" fontSize="lg" variant="bold">
            Reviews and Ratings
          </Typography>
          <article className="text-sm text-center text-clip text-wrap">
            Students can read reviews and ratings from other learners to help
            them choose the right tutor for their needs.
          </article>
        </div>
      </div>
    </div>
  );
};
export { ShowEasyText };
