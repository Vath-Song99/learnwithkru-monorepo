"use client";
import React, { useState } from "react";
import { Button, InputForm, Typography } from "@/components/atoms";

const TimeSlote = ({ day }: { day: string }) => {
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [error, setError] = useState("");

  const handleFromTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFromTime(e.target.value);
    if (e.target.value === toTime) {
      setError("From time cannot be the same as To time.");
    } else {
      setError("");
    }
  };

  const handleToTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToTime(e.target.value);
    if (e.target.value === fromTime) {
      setError("To time cannot be the same as From time.");
    } else {
      setError("");
    }
  };

  return (
    <div className="w-[464px]">
      <div className="flex items-center justify-start gap-2">
        <input type="checkbox" className="w-6" />
        <div className="w-full">
          <div className="flex items-center  gap-2">
            <InputForm type="checkbox" className="h-[12px] w-[12px]" />
            <label htmlFor="" className="font-bold">
              {day}
            </label>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="grid ">
              <label
                htmlFor="fromTime"
                className="inline-block font-bold text-sm"
              >
                From
              </label>
              <select
                id="fromTime"
                name="fromTime"
                value={fromTime}
                onChange={handleFromTimeChange}
                className="pr-20 pl-2 py-[5px] border border-black rounded-md outline-none "
              >
                <option value="">Select</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
              </select>
            </div>
            <div className="grid ">
              <label
                htmlFor="toTime"
                className="inline-block font-bold text-sm"
              >
                To
              </label>
              <select
                id="toTime"
                name="toTime"
                value={toTime}
                onChange={handleToTimeChange}
                className="pr-20 pl-2 py-[5px] border border-black rounded-md outline-none "
              >
                <option value="">Select</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
              </select>
            </div>
          </div>
          {error && <Typography className="text-red-500">{error}</Typography>}
          <Typography
            align="left"
            fontSize="sm"
            variant="semibold"
            className="hover:underline py-2"
          >
            Add another timeslot +
          </Typography>
        </div>
      </div>
    </div>
  );
};
export { TimeSlote };
