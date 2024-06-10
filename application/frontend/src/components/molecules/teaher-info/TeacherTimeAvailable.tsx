import React from "react";
import { Button } from "@/components/atoms";

const TeacherTimeAvailable = () => {
  // Define a function to generate time slot buttons for each day
  const renderTimeSlots = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const timeSlots: React.JSX.Element[] = [];

    // Generate time slots for each day
    days.forEach((day, dayIndex) => {
      const timeSlotsForDay = [];

      // Generate time slots for each hour
      for (let hour = 0; hour < 24; hour++) {
        const time = `${hour < 10 ? '0' : ''}${hour}:00 - ${hour + 1 < 10 ? '0' : ''}${hour + 1}:00`;
        timeSlotsForDay.push(
          <td key={hour} className="px-2 py-2 whitespace-nowrap">
            <Button
              className={` text-sm text-gray-600  md:w-28 sm:text-sm h-8 ${dayIndex === 5 || dayIndex === 6 ? ' bg-red-500 text-white pl-2 pr-2 hover:bg-white hover:text-black hover:outline-red-500 ' : 'text-gray-500 bg-green-500 pl-2 pr-2 hover:bg-white hover:text-black hover:outline-red-500'}`}
            >
              {time}
            </Button>
          </td>
        );
      }

      timeSlots.push(
        <tr key={day} className="border-t">
          <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-300">
            {day}
          </th>
          {timeSlotsForDay}
        </tr>
      );
    });

    return timeSlots;
  };

  return (
    <div className="w-[480px] md:w-[800px]  lg:w-[1000px] ">
      <div className="overflow-x-auto flex justify-start mt-3">
        <table className="table-auto  divide-y divide-gray-200">
          <thead className="bg-black text-white">
            <tr>
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Day
              </th>
              {/* Add headers for time slots */}
              {[...Array(24)].map((_, index) => (
                <th key={index} className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {`${index < 10 ? '0' : ''}${index}:00`}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-gray-50">
            {/* Call the renderTimeSlots function to generate time slots for each day */}
            {renderTimeSlots()}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export { TeacherTimeAvailable };
