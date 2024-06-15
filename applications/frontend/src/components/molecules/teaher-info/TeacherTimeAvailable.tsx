"use client";
import { IAvailableDay } from "@/@types/teacher.type";
import { Button } from "@/components"
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
const hoursOfDay = Array.from({ length: 24 }, (_, i) => i);

const TeacherTimeAvailable: React.FC<TeachersTimeProps> = ({
  date_available,
}) => {
  const time = date_available.map(entry => entry.time)
  // const timeStart = date_available.map(entry => entry.time.start)
  // const timeEnd = date_available.map(entry => entry.time.end)


  console.log("this is timeStart", time)
  // console.log("this is time", time[0].start)

  const day = date_available.map(entry => entry.day);
  return (
    <div className="mt-10  ">
      <div className=" flex justify-center mt-3 ">
        {/* <table className="w-[60px] md:[150px] lg:w-[150px]">
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
                      {day &&
                        time.map((time, index) => (
                          <div className="pt-3" key={`${index}-${time}`}>
                            <Button
                              colorScheme="tertiary"
                              fontSize="sm"
                              fontColor="black"
                              className="w-[60px] md:[150px] lg:w-[150px] text-[8px] lg:text-sm font-bold  bg-white underline "
                            >jjjx

                            </Button>
                          </div>
                        ))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

            
          </div>
        </table> */}
        <ol>
          {
            date_available.map((item, index) => {
              console.log(item);
              return <li key={index}>{item.day}
              <ol>
                {
                  item.time.map((time, index)=>{
                    console.log(time);
                    return <li key={index}>{time.start}, {time.end}</li>
                  })
                }
              </ol>
              </li>
            })
          }

        </ol>
      </div>
    </div>
  );
};

export { TeacherTimeAvailable };