import React from "react";
import { Button } from "@/components/atoms";

const TeacherTimeAvailable = () => {
  // Get current day
  const currentDay = new Date().getDay();

  // Define a function to generate time slot buttons for each day
  const renderTimeSlots = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const timeSlots = [];

    // Generate time slots for each day
    for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
      const day = days[dayIndex];
      const timeSlotsForDay = [];

      // Generate time slots for each hour
      for (let hour = 0; hour < 24; hour++) {
        const time = `${hour < 10 ? '0' : ''}${hour}:00 - ${hour + 1 < 10 ? '0' : ''}${hour + 1}:00`;
        timeSlotsForDay.push(
          <td key={hour} className="px-6 py-4 whitespace-nowrap">
            <Button colorScheme="secondary" className={`text-sm w-28 h-8 ${dayIndex === 5 || dayIndex === 6 ? 'text-white bg-red-500' : 'text-gray-900'}`}>{time}</Button>
          </td>
        );
      }

      timeSlots.push(
        <tr key={day}>
          <th className="px-6 py-8 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            {day}
          </th>
          {timeSlotsForDay}
        </tr>
      );
    }

    return timeSlots;
  };

  return (
    <div className="overflow-x-auto mt-3">
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-8 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Day
            </th>
            {/* Add headers for time slots */}
            {[...Array(24)].map((_, index) => (
              <th key={index} className="px-6 py-8 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
  );
};

export { TeacherTimeAvailable };
