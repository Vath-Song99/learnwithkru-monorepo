"use client";
import { IAvailableDay } from "@/@types/teacher.type";
import React from "react";

interface TeachersTimeProps {
  date_available: IAvailableDay[]
}

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const TeacherTimeAvailable: React.FC<TeachersTimeProps> = ({
  date_available,
}) => {
  const getTimeSlotsForDay = (day: string) => {
    const dayData = date_available.find(d => d.day.toLowerCase() === day.toLowerCase());
    return dayData ? dayData.time : [];
  };
  return (
    <div className="p-4 border rounded-lg shadow-md">
    <h2 className="text-lg font-bold">Team schedule</h2>
    <div className="grid grid-cols-7 gap-4">
      {daysOfWeek.map(day => (
        <div key={day} className="text-center">
          <div className="font-bold">{day}</div>
          <div>
            {getTimeSlotsForDay(day).map((time, index) => (
              <div key={index} className="bg-blue-500 text-white p-2 rounded mt-2">
                {time.start} - {time.end}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

  </div>
  );
};

export { TeacherTimeAvailable };