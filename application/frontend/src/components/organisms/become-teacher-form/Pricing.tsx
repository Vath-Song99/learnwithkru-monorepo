import { Button, InputForm, Typography } from "@/components/atoms";
import React from "react";
import { BecomeTeacherFormTypes } from "./@types";

const PricingForm = ({
    title,
    description,
    inputForms,
    fileLabel,
}: BecomeTeacherFormTypes) => {
    return (
        <div className="w-full pl-5 sm:pl-3 pr-4 sm:w-[464px]">
            <Typography align="left" fontSize="lg" variant="bold" className="py-2">
                {title}
            </Typography>
            <Typography align="left" fontSize="sm" className="py-2">
                {description}
            </Typography>

            <div className="grid gap-2">
                <select className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500">
                    <option value="" disabled selected>Select a price</option>
                    <option value="10">$10</option>
                    <option value="20">$20</option>
                    <option value="30">$30</option>
                    {/* Add more options as needed */}
                </select>
            </div>


        </div>
    );
};

export { PricingForm };
