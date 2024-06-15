
import { LayoutsTeachers, Teaching } from "@/components";
import React from "react";

const page = () => {
  return (
    <LayoutsTeachers >
   <Teaching  description="Do you have teaching certificates? If so, describe them to enhance your 
                profile credibility and get more students."
                title="Education"
                checkboxtext="Don't have a Degree?" />
    </LayoutsTeachers>
  );
};

export default page;
