"use client";
import { Button } from "@/components/atoms";
import React from "react";

interface TeachersTimeProps {
  date_available: {
    day: string;
    time: {
      start: string;
      end: string;
    };
  };
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
const hoursOfDay = Array.from({ length: 24 }, (_, i) => i);

const TeacherTimeAvailable: React.FC<TeachersTimeProps> = ({
  date_available,
}) => {
  const times = Array.isArray(date_available.time)
    ? date_available.time
    : [date_available.time];
  const day = date_available.day;
  const isHourInRange = (
    hour: number,
    times: { start: string; end: string }[]
  ) => {
    return times.some((time) => {
      const [startHour] = time.start.split(":").map(Number);
      const [endHour] = time.end.split(":").map(Number);
      return hour >= startHour && hour < endHour;
    });
  };
  return (
    <div className="mt-10  ">
      <div className=" flex justify-center mt-3 ">
        <table className="w-[60px] md:[150px] lg:w-[150px]">
          <thead className="text-white pl-4 pr-4  ">
            <tr className="flex justify-center  ">
              {daysOfWeek.map((day) => (
                <th
                  key={day}
                  className=" underline w-[60px] md:[150px] lg:w-[150px] text-[12px] md:text-sm font-medium text-black uppercase "
                >
                  <span className="block lg:hidden">{day.substring(0, 3)}</span>
                  <span className="hidden lg:block">{day}</span>
                </th>
              ))}
            </tr>
          </thead>
          <div className="h-[300px] w-auto overflow-auto hide-scrollbar">
            <tbody className="h-[100px] w-[70px] md:[150px] lg:w-[150px] ">
              {hoursOfDay.map((hour) => (
                <tr key={hour} className="flex justify-center w-full ">
                  {daysOfWeek.map((d) => (
                    <td
                      key={d}
                      className=" text-center text-sm font-medium text-white  w-[60px] md:[150px] lg:w-[150px]"
                    >
                      {day === d &&
                        isHourInRange(hour, times) &&
                        times.map((time, index) => (
                          <div className="pt-3">
                            <Button
                              colorScheme="tertiary"
                              key={index}
                              fontSize="sm"
                              fontColor="black"
                              className="w-[60px] md:[150px] lg:w-[150px] text-[8px] lg:text-sm font-bold  bg-white underline "
                            >
                              {time.start} - {time.end}
                            </Button>
                          </div>
                        ))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

            <style jsx>{`
              .hide-scrollbar {
                scrollbar-width: none; /* Firefox */
                -ms-overflow-style: none; /* IE 10+ */
              }
              .hide-scrollbar::-webkit-scrollbar {
                display: none; /* Chrome, Safari, Opera */
              }
            `}</style>
          </div>
        </table>
      </div>
    </div>
  );
};

export { TeacherTimeAvailable };