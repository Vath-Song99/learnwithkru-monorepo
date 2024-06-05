"use client";
import { useState, useEffect, ChangeEvent, FormEvent, FormEventHandler } from "react";
import { Button, InputForm, Typography } from "@/components/atoms";
<<<<<<< HEAD
import TimeslotSelector from "@/components/molecules/timeslote/TimeSlot";
import { getLocalStorageTeacher, setLocalStorageTeacher } from "@/utils/localStorage";
import { TimeAvailableFormTypes } from "./@types";

export interface DataTimeProp {
=======
import React, { ChangeEvent, useRef, useState } from "react";
import { TeachersAvailability, TimeAvailableFormTypes } from "./@types";
import { Select } from "@/components/atoms/select/select";
interface DataTimeProp {
>>>>>>> 4bb029f8b7da1ca36c1dfa58882533440f1fc087
  id: string;
  hour: string;
}

const dataTimes: DataTimeProp[] = [
  { id: "1", hour: "00:00" },
  { id: "2", hour: "1:00" },
  { id: "3", hour: "2:00" },
  { id: "4", hour: "3:00" },
  { id: "5", hour: "4:00" },
  { id: "6", hour: "5:00" },
  { id: "7", hour: "6:00" },
  { id: "8", hour: "7:00" },
  { id: "9", hour: "8:00" },
  { id: "10", hour: "9:00" },
  { id: "11", hour: "10:00" },
  { id: "12", hour: "11:00" },
  { id: "13", hour: "12:00" },
  { id: "14", hour: "13:00" },
  { id: "15", hour: "14:00" },
  { id: "16", hour: "15:00" },
  { id: "17", hour: "16:00" },
  { id: "18", hour: "17:00" },
  { id: "19", hour: "18:00" },
  { id: "20", hour: "19:00" },
  { id: "21", hour: "20:00" },
  { id: "22", hour: "21:00" },
  { id: "23", hour: "22:00" },
  { id: "24", hour: "23:00" },
];

export interface TimeslotSelectorProps {
  weekItem: WeekData;
  index: number;
  day: keyof WeekData;
}

interface TimeSlot {
  start: string;
  end: string;
}

export interface WeekData {
  mondayData: TimeSlot[];
  tuesdayData: TimeSlot[];
  wednesdayData: TimeSlot[];
  thursdayData: TimeSlot[];
  fridayData: TimeSlot[];
  saturdayData: TimeSlot[];
  sundayData: TimeSlot[];
}

interface Time {
  start: string;
  end: string;
}

interface Day {
  day: string;
  time: Time[];
}

const TimeAvailableForm = ({
  title,
  description,
  inputForms,
  buttonTitle,
  setTimeAvailable,
  setTimeDescription,
  setdataTutor,
  currentPage,
  setCurrentPage,
  pageIndex,
}: TimeAvailableFormTypes) => {
  const initialWeeksState: WeekData[] = [
    {
      mondayData: [{ start: "9:00", end: "10:00" }],
      tuesdayData: [{ start: "9:00", end: "10:00" }],
      wednesdayData: [{ start: "9:00", end: "10:00" }],
      thursdayData: [{ start: "9:00", end: "10:00" }],
      fridayData: [{ start: "9:00", end: "10:00" }],
      saturdayData: [{ start: "9:00", end: "10:00" }],
      sundayData: [{ start: "9:00", end: "10:00" }],
    },
  ];

  const [dataTime, setDataTime] = useState<DataTimeProp[]>(dataTimes);
  const [weeks, setWeek] = useState<WeekData[]>(initialWeeksState);
  const [days, setDays] = useState<Day[]>([]);
  const [isFormComplete, setIsFormComplete] = useState(false);

  const [daysOfWeek, setDaysOfWeek] = useState({
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: true,
    sunday: true,
  });

  const handleAddNew = (day: keyof WeekData) => {
    const newInput = { start: "9:00", end: "10:00" };
    setWeek((prevWeeks) =>
      prevWeeks.map((week) => ({
        ...week,
        [day]: [...week[day], newInput],
      }))
    );
  };

  const handleDelete = (index: number, day: keyof WeekData) => {
    setWeek((prev) =>
      prev.map((week) => ({
        ...week,
        [day]: week[day].filter((_, i) => i !== index),
      }))
    );
  };

  const handleBack = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const nextPage = () => {
    if (!isFormComplete) {
      return;
    }
  };
  nextPage();

  const handleTimeslot = (
    e: ChangeEvent<HTMLSelectElement>,
    idx: number,
    day: keyof WeekData,
    setWeek: React.Dispatch<React.SetStateAction<WeekData[]>>
  ) => {
    const { name, value } = e.target;
    setWeek((prev) => {
      const newArray = [...prev];
      const newDayData = [...newArray[0][day]];

      if (name === "start") {
        const indexSlotHour = dataTime.findIndex(
          (eachSlot) => eachSlot.hour === value
        );

        newDayData[idx] = {
          ...newDayData[idx],
          [name]: value,
          end:
            indexSlotHour !== -1 && indexSlotHour < dataTime.length - 1
              ? dataTime[indexSlotHour + 1].hour
              : "",
        };
      } else {
        newDayData[idx] = { ...newDayData[idx], [name]: value };
      }

      newArray[0][day] = newDayData;
      return newArray;
    });
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setDaysOfWeek((prevState) => {
      const updatedState = { ...prevState, [name]: checked };
      setLocalStorageTeacher("daysOfWeek", updatedState);
      return updatedState;
    });

    if (!checked) {
      setWeek((prevState) =>
        prevState.map((week) => ({
          ...week,
          [`${name}Data`]: [{ start: "", end: "" }],
        }))
      );

      const updatedDays = days.map((day) =>
        day.day === name ? { day: "", time: [{ start: "", end: "" }] } : day
      );

      setDays(updatedDays);
    }

    if (checked) {
      setWeek((prevState) =>
        prevState.map((week) => ({
          ...week,
          [`${name}Data`]: [{ start: "9:00", end: "10:00" }],
        }))
      );
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const newDays = [
        { day: "monday", time: weeks[0].mondayData },
        { day: "tuesday", time: weeks[0].tuesdayData },
        { day: "wednesday", time: weeks[0].wednesdayData },
        { day: "thursday", time: weeks[0].thursdayData },
        { day: "friday", time: weeks[0].fridayData },
        { day: "saturday", time: weeks[0].saturdayData },
        { day: "sunday", time: weeks[0].sundayData },
      ];

      setDays(newDays);
      setLocalStorageTeacher("timeAvailableTeacher", newDays);
      setdataTutor((prev: any) => ({ ...prev, date_available: newDays }));

      if (pageIndex !== undefined) {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, pageIndex.length - 1));
      }

      setIsFormComplete(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const userStorage = getLocalStorageTeacher("timeAvailableTeacher") || [];
    if (userStorage.length > 0) {
      setDays(userStorage);
      const initialWeeks = userStorage.reduce((acc: WeekData[], day: Day) => {
        (acc[0] as any)[`${day.day}Data`] = day.time; // Use 'as any' to bypass TypeScript type checking
        return acc;
      }, initialWeeksState);
      setWeek(initialWeeks);
      setDaysOfWeek((prevState) =>
        userStorage.reduce((acc: { [x: string]: boolean; }, day: { day: string | number; time: string | any[]; }) => {
          acc[day.day] = day.time.length > 0;
          return acc;
        }, { ...prevState })
      );
    }

    const storedDaysOfWeek = getLocalStorageTeacher("daysOfWeek");
    if (storedDaysOfWeek) {
      setDaysOfWeek(storedDaysOfWeek);
    }
  }, []);
  return (
    <div className="w-auto max-w-[200px] sm:max-w-[400px] flex flex-col">
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center text-wrap md:text-nowrap w-auto sm:w-full">
            <Typography
              align="center"
              fontSize="lg"
              variant="bold"
              className="py-2 text-center sm:text-start "
            >
              {title}
            </Typography>
            <Typography
              align="center"
              fontSize="sm"
              className=" text-wrap  w-[350px] pl-12 text-center sm:text-start sm:text-nowrap "
            >
              {description}
            </Typography>
            <Typography
              align="center"
              fontSize="lg"
              variant="bold"
              className="py-2 sm:text-start"
            >
              {setTimeAvailable}
            </Typography>
            <Typography
              align="center"
              fontSize="sm"
              className="text-wrap w-[350px] pl-12 text-center sm:text-start sm:text-nowrap "
            >
              {setTimeDescription}
            </Typography>
          </div>
<<<<<<< HEAD
=======

          <div className="flex flex-col">
            {/* monday */}
            <div className="flex flex-row">
              <div className="flex flex-col sm:flex-row pt-[10px] pl-[20px]">
                <InputForm
                  type="checkbox"
                  borderRadius="md"
                  name="monday"
                  borderSize="checkbox"
                  onChange={handleCheckboxChange}
                  checked={daysOfWeek.monday}
                  className="border border-purple-500 outline-none text-xs"
                />
              </div>
              <div className="flex pl-[20px]">
                <Typography align="left" fontSize="sm" className="py-2">
                  Monday
                </Typography>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                {daysOfWeek.monday && (
                  <>
                    {selectMonday.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between py-2">
                          <div className=" flex flex-col sm:flex-row ">
                            <div className="flex flex-col  pl-[90px] sm:pl-[2px] ">
                              <div className="flex flex-col pr-[180px] sm:pr-[220px]">
                                <Typography
                                  fontSize="sm"
                                  className="sm:text-start"
                                >
                                  From
                                </Typography>
                              </div>
                              <Select
                                borderRadius="md"
                                borderSize="timeSelect"
                                name="from"
                                defaultValue={
                                  dataTime.find((item) => item.hour === "9:00")
                                    ?.hour
                                }
                                onChange={(e) => {
                                  handleUpdateTimeslot(e, index);
                                }}
                                className="border border-purple-500  outline-none text-xs"
                              >
                                {dataTime.map((datahour) => (
                                  <option
                                    key={datahour.id}
                                    value={datahour.hour}
                                  >
                                    {datahour.hour}
                                  </option>
                                ))}
                              </Select>
                            </div>
                            <div className="flex flex-col  pl-[90px] sm:pl-[2px]">
                              <div className="flex flex-col pr-[180px] sm:pr-[220px]">
                                <Typography
                                  fontSize="sm"
                                  className="sm:text-start"
                                >
                                  To
                                </Typography>
                              </div>
                              <Select
                                borderRadius="md"
                                borderSize="timeSelect"
                                defaultValue={
                                  dataTime.find((item) => item.hour === "10:00")
                                    ?.hour
                                }
                                onChange={(e) => {
                                  handleUpdateTimeslot(e, index);
                                }}
                                name="to"
                                className="border border-purple-500 outline-none text-xs"
                              >
                                {selectMonday[index].from
                                  ? dataTime.map((data, idx) => {
                                    // Find index of option `to` base on the value of option `to`
                                    const toIndex = dataTime.findIndex(
                                      (eachSlot) =>
                                        eachSlot.hour ===
                                        selectMonday[index].to
                                    );
>>>>>>> 4bb029f8b7da1ca36c1dfa58882533440f1fc087

          {weeks.map((weekItem, keekIndex) => (
            <div className="flex flex-col" key={keekIndex}>
              <form action="" onSubmit={handleSubmit}>
                {/* Monday */}
                <div className="flex flex-row">
                  <div className="flex flex-col sm:flex-row pt-[10px] pl-[20px]">
                    <InputForm
                      type="checkbox"
                      borderRadius="md"
                      name="monday"
                      borderSize="checkbox"
                      onChange={handleCheckboxChange}
                      checked={daysOfWeek.monday}
                      className="border border-purple-500 outline-none text-xs"
                    />
                  </div>
                  <div className="flex pl-[20px]">
                    <Typography align="left" fontSize="sm" className="py-2">
                      Monday
                    </Typography>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    {daysOfWeek.monday && (
                      <>
                        {weekItem.mondayData.map((dataItem, index) => (
                          <div key={index}>
                            <div className="flex justify-between py-2">
                              <TimeslotSelector
                                weekItem={weekItem} // Ensure you pass the correct week item
                                index={index}
                                day="mondayData"
                                handleTimeslot={(e, idx, day) => handleTimeslot(e, idx, day, setWeek)}
                                dataTime={dataTime}
                                setDataTime={setDataTime}
                              />



                              <div className="flex flex-col items-center py-2">
                                {weekItem.mondayData.length > 1 && (
                                  <button onClick={() => handleDelete(index, 'mondayData')}>
                                    <div className="flex items-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                        />
                                      </svg>
                                    </div>
                                  </button>
                                )}
                              </div>
                            </div>

                            {index === weekItem.mondayData.length - 1 && (
                              <button onClick={() => handleAddNew('mondayData')}>
                                <small className=" underline font-bold text-xs sm:text-md pl-[20px]">
                                  Add another timeslot
                                </small>
                              </button>
                            )}
                          </div>
                        ))}
                      </>
                    )}
                  </div>

<<<<<<< HEAD
                </div>
                {/* Tuesday */}
                <div className="flex flex-row">
                  <div className="flex flex-col sm:flex-row pt-[10px] pl-[20px]">
                    <InputForm
                      type="checkbox"
                      borderRadius="md"
                      borderSize="checkbox"
                      name="tuesday"
                      onChange={handleCheckboxChange}
                      checked={daysOfWeek.tuesday}
                      className="border border-purple-500 outline-none text-xs "
                    />
                  </div>
                  <div className="flex pl-[20px]">
                    <Typography align="left" fontSize="sm" className="py-2">
                      Tuesday
                    </Typography>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    {daysOfWeek.tuesday && (
                      <>
                        {weekItem.tuesdayData.map((item, index) => (
                          <div key={index}>
                            <div className="flex justify-between py-2">
                              <TimeslotSelector
                                weekItem={weekItem} // Ensure you pass the correct week item
                                index={index}
                                day="tuesdayData"
                                handleTimeslot={(e, idx, day) => handleTimeslot(e, idx, day, setWeek)}
                                dataTime={dataTime}
                                setDataTime={setDataTime}
                              />


                              <div className="flex flex-col items-center py-2">
                                {weekItem.tuesdayData.length > 1 && (
                                  <button
                                    onClick={() => handleDelete(index, 'tuesdayData')}
                                  >
                                    <div className="flex items-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                        />
                                      </svg>
                                    </div>
                                  </button>
                                )}
                              </div>
=======
                        {index === selectMonday.length - 1 && (
                          <button onClick={() => handleAddNewTimeslot(index)}>
                            <small className=" underline font-bold text-xs sm:text-md pl-[20px]">
                              Add another timeslot
                            </small>
                          </button>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
            {/* Tuesday */}
            <div className="flex flex-row">
              <div className="flex flex-col sm:flex-row pt-[10px] pl-[20px]">
                <InputForm
                  type="checkbox"
                  borderRadius="md"
                  borderSize="checkbox"
                  name="tuesday"
                  onChange={handleCheckboxChange}
                  checked={daysOfWeek.tuesday}
                  className="border border-purple-500 outline-none text-xs "
                />
              </div>
              <div className="flex pl-[20px]">
                <Typography align="left" fontSize="sm" className="py-2">
                  Tuesday
                </Typography>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                {daysOfWeek.tuesday && (
                  <>
                    {selectTuesday.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between py-2">
                          <div className="flex flex-col sm:flex-row">
                            <div className="flex flex-col  pl-[90px] sm:pl-[2px] ">
                              <div className="flex flex-col pr-[180px] sm:pr-[220px]">
                                <Typography
                                  fontSize="sm"
                                  className="py-2 sm:text-start"
                                >
                                  From
                                </Typography>
                              </div>
                              <Select
                                borderRadius="md"
                                borderSize="timeSelect"
                                name="from"
                                defaultValue={
                                  dataTime.find((item) => item.hour === "9:00")
                                    ?.hour
                                }
                                onChange={(e) => {
                                  handleUpdateTimeslotTuesday(e, index);
                                }}
                                className="border border-purple-500  outline-none text-xs"
                              >
                                {dataTime.map((datahour) => (
                                  <option
                                    key={datahour.id}
                                    value={datahour.hour}
                                  >
                                    {datahour.hour}
                                  </option>
                                ))}
                              </Select>
                            </div>
                            <div className="flex flex-col  pl-[90px] sm:pl-[2px]">
                              <div className="flex flex-col pr-[180px] sm:pr-[220px]">
                                <Typography
                                  fontSize="sm"
                                  className="py-2 sm:text-start"
                                >
                                  To
                                </Typography>
                              </div>
                              <Select
                                borderRadius="md"
                                borderSize="timeSelect"
                                defaultValue={
                                  dataTime.find((item) => item.hour === "10:00")
                                    ?.hour
                                }
                                onChange={(e) => {
                                  handleUpdateTimeslot(e, index);
                                }}
                                name="to"
                                className="border border-purple-500 outline-none text-xs"
                              >
                                {selectTuesday[index].from
                                  ? dataTime.map((data, idx) => {
                                    // Find index of option `to` base on the value of option `to`
                                    const toIndex = dataTime.findIndex(
                                      (eachSlot) =>
                                        eachSlot.hour ===
                                        selectTuesday[index].to
                                    );

                                    // Return only hour greater than the `from` value
                                    if (idx > toIndex - 1) {
                                      return (
                                        <option
                                          key={data.id}
                                          value={data.hour}
                                        >
                                          {data.hour}
                                        </option>
                                      );
                                    }
                                  })
                                  : dataTime.map((data) => (
                                    <option key={data.id} value={data.hour}>
                                      {data.hour}
                                    </option>
                                  ))}
                              </Select>
>>>>>>> 4bb029f8b7da1ca36c1dfa58882533440f1fc087
                            </div>

                            {index === weekItem.tuesdayData.length - 1 && (
                              <button onClick={() => handleAddNew('tuesdayData')}>
                                <small className=" underline font-bold text-xs sm:text-md pl-[20px]">

                                  Add another timeslot

                                </small>
                              </button>
                            )}
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>

                {/* wednesday */}
                <div className="flex flex-row">
                  <div className="flex flex-col sm:flex-row pt-[10px] pl-[20px]">
                    <InputForm
                      type="checkbox"
                      borderRadius="md"
                      borderSize="checkbox"
                      name="wednesday"
                      onChange={handleCheckboxChange}
                      checked={daysOfWeek.wednesday}
                      className="border border-purple-500 outline-none text-xs"
                    />
                  </div>
                  <div className="flex pl-[20px]">
                    <Typography align="left" fontSize="sm" className="py-2">
                      Wednesday
                    </Typography>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    {daysOfWeek.wednesday && (
                      <>
                        {weekItem.wednesdayData.map((item, index) => (
                          <div key={index}>
                            <div className="flex justify-between py-2">
                              <TimeslotSelector
                                weekItem={weekItem} // Ensure you pass the correct week item
                                index={index}
                                day="wednesdayData"
                                handleTimeslot={(e, idx, day) => handleTimeslot(e, idx, day, setWeek)}
                                dataTime={dataTime}
                                setDataTime={setDataTime}
                              />
                              <div className="flex flex-col items-center py-2">
                                {weekItem.wednesdayData.length > 1 && (
                                  <button
                                    onClick={() => handleDelete(index, "wednesdayData")}
                                  >
                                    <div className="flex items-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                        />
                                      </svg>
                                    </div>
                                  </button>
                                )}
                              </div>
                            </div>

                            {index === weekItem.wednesdayData.length - 1 && (
                              <button
                                onClick={() => handleAddNew("wednesdayData")}
                              >
                                <small className=" underline font-bold  sm:text-md pl-[20px]">
                                  Add another timeslot
                                </small>
                              </button>
                            )}
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
                {/* Thursday */}
                <div className="flex flex-row">
                  <div className="flex flex-col sm:flex-row pt-[10px] pl-[20px]">
                    <InputForm
                      type="checkbox"
                      borderRadius="md"
                      borderSize="checkbox"
                      name="thursday"
                      onChange={handleCheckboxChange}
                      checked={daysOfWeek.thursday}
                      className="border border-purple-500outline-none text-xs"
                    />
                  </div>
                  <div className="flex pl-[20px]">
                    <Typography align="left" fontSize="sm" className="py-2">
                      Thursday
                    </Typography>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    {daysOfWeek.thursday && (
                      <>
                        {weekItem.thursdayData.map((item, index) => (
                          <div key={index}>
                            <div className="flex justify-between py-2">
                              <TimeslotSelector
                                weekItem={weekItem} // Ensure you pass the correct week item
                                index={index}
                                day="thursdayData"
                                handleTimeslot={(e, idx, day) => handleTimeslot(e, idx, day, setWeek)}
                                dataTime={dataTime}
                                setDataTime={setDataTime}
                              />

<<<<<<< HEAD
                              <div className="flex flex-col items-center py-2">
                                {weekItem.thursdayData.length > 1 && (
                                  <button
                                    onClick={() => handleDelete(index, "thursdayData")}
                                  >
                                    <div className="flex items-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                        />
                                      </svg>
                                    </div>
                                  </button>
                                )}
                              </div>
=======
                        {index === selectTuesday.length - 1 && (
                          <button onClick={() => handleAddNewTimeslotTuesday()}>
                            <small className=" underline font-bold text-xs sm:text-md pl-[20px]">
                              Add another timeslot
                            </small>
                          </button>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>

            {/* wednesday */}
            <div className="flex flex-row">
              <div className="flex flex-col sm:flex-row pt-[10px] pl-[20px]">
                <InputForm
                  type="checkbox"
                  borderRadius="md"
                  borderSize="checkbox"
                  name="wednesday"
                  onChange={handleCheckboxChange}
                  checked={daysOfWeek.wednesday}
                  className="border border-purple-500 outline-none text-xs"
                />
              </div>
              <div className="flex pl-[20px]">
                <Typography align="left" fontSize="sm" className="py-2">
                  Wednesday
                </Typography>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                {daysOfWeek.wednesday && (
                  <>
                    {selectwednesday.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between py-2">
                          <div className="flex flex-col sm:flex-row ">
                            <div className="flex flex-col  pl-[90px] sm:pl-[2px]">
                              <div className="flex flex-col pr-[180px] sm:pr-[220px]">
                                <Typography
                                  fontSize="sm"
                                  className="py-2 sm:text-start"
                                >
                                  Form
                                </Typography>
                              </div>
                              <Select
                                borderRadius="md"
                                borderSize="timeSelect"
                                name="from"
                                defaultValue={
                                  dataTime.find((item) => item.hour === "9:00")
                                    ?.hour
                                }
                                onChange={(e) => {
                                  handleUpdateTimeslotwednesday(e, index);
                                }}
                                className="border border-purple-500  outline-none text-xs"
                              >
                                {dataTime.map((datahour) => (
                                  <option
                                    key={datahour.id}
                                    value={datahour.hour}
                                  >
                                    {datahour.hour}
                                  </option>
                                ))}
                              </Select>
>>>>>>> 4bb029f8b7da1ca36c1dfa58882533440f1fc087
                            </div>
                            {index === weekItem.thursdayData.length - 1 && (
                              <button
                                onClick={() => handleAddNew("thursdayData")}
                              >
                                <small className=" underline font-bold  sm:text-md pl-[20px]">
                                  Add another timeslot
                                </small>
                              </button>
                            )}
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
                {/* friday */}
                <div className="flex flex-row">
                  <div className="flex  pt-[10px]">
                    <InputForm
                      type="checkbox"
                      borderRadius="md"
                      borderSize="checkbox"
                      name="friday"
                      onChange={handleCheckboxChange}
                      checked={daysOfWeek.friday}
                      className="border border-purple-500outline-none text-xs"
                    />
                  </div>
                  <div className="flex pl-[20px]">
                    <Typography align="left" fontSize="sm" className="py-2">
                      Friday
                    </Typography>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    {daysOfWeek.friday && (
                      <>
                        {weekItem.fridayData.map((item, index) => (
                          <div key={index}>
                            <div className="flex justify-between py-2">
                              <TimeslotSelector
                                weekItem={weekItem} // Ensure you pass the correct week item
                                index={index}
                                day="fridayData"
                                handleTimeslot={(e, idx, day) => handleTimeslot(e, idx, day, setWeek)}
                                dataTime={dataTime}
                                setDataTime={setDataTime}
                              />
                              <div className="flex flex-col items-center py-2">
                                {weekItem.fridayData.length > 1 && (
                                  <button onClick={() => handleDelete(index, "fridayData")}>
                                    <div className="flex items-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                        />
                                      </svg>
                                    </div>
                                  </button>
                                )}
                              </div>
<<<<<<< HEAD
=======
                              <Select
                                borderRadius="md"
                                borderSize="timeSelect"
                                defaultValue={
                                  dataTime.find((item) => item.hour === "10:00")
                                    ?.hour
                                }
                                onChange={(e) => {
                                  handleUpdateTimeslotwednesday(e, index);
                                }}
                                name="to"
                                className="border border-purple-500 outline-none text-xs"
                              >
                                {selectwednesday[index].from
                                  ? dataTime.map((data, idx) => {
                                    // Find index of option `to` base on the value of option `to`
                                    const toIndex = dataTime.findIndex(
                                      (eachSlot) =>
                                        eachSlot.hour ===
                                        selectwednesday[index].to
                                    );
                                    // Return only hour greater than the `from` value
                                    if (idx > toIndex - 1) {
                                      return (
                                        <option
                                          key={data.id}
                                          value={data.hour}
                                        >
                                          {data.hour}
                                        </option>
                                      );
                                    }
                                  })
                                  : dataTime.map((data) => (
                                    <option key={data.id} value={data.hour}>
                                      {data.hour}
                                    </option>
                                  ))}
                              </Select>
>>>>>>> 4bb029f8b7da1ca36c1dfa58882533440f1fc087
                            </div>

                            {index === weekItem.fridayData.length - 1 && (
                              <button onClick={() => handleAddNew("fridayData")}>
                                <small className=" underline font-bold">
                                  Add another timeslot
                                </small>
                              </button>
                            )}
                          </div>
<<<<<<< HEAD
                        ))}
                      </>
                    )}
                  </div>
                </div>
                {/* saturday */}
                <div className="flex flex-row">
                  <div className="flex flex-col sm:flex-row pt-[10px] pl-[20px]">
                    <InputForm
                      type="checkbox"
                      borderRadius="md"
                      name="saturday"
                      borderSize="checkbox"
                      onChange={handleCheckboxChange}
                      checked={daysOfWeek.saturday}
                      className="border border-purple-500 outline-none text-xs"
                    />
                  </div>
                  <div className="flex pl-[20px]">
                    <Typography align="left" fontSize="sm" className="py-2">
                      Saturday
                    </Typography>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    {daysOfWeek.saturday && (
                      <>
                        {weekItem.saturdayData.map((dataItem, index) => (
                          <div key={index}>
                            <div className="flex justify-between py-2">
                              <TimeslotSelector
                                weekItem={weekItem} // Ensure you pass the correct week item
                                index={index}
                                day="saturdayData"
                                handleTimeslot={(e, idx, day) => handleTimeslot(e, idx, day, setWeek)}
                                dataTime={dataTime}
                                setDataTime={setDataTime}
                              />



                              <div className="flex flex-col items-center py-2">
                                {weekItem.saturdayData.length > 1 && (
                                  <button onClick={() => handleDelete(index, 'saturdayData')}>
                                    <div className="flex items-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                        />
                                      </svg>
                                    </div>
                                  </button>
                                )}
                              </div>
                            </div>

                            {index === weekItem.saturdayData.length - 1 && (
                              <button onClick={() => handleAddNew('saturdayData')}>
                                <small className=" underline font-bold text-xs sm:text-md pl-[20px]">
                                  Add another timeslot
                                </small>
                              </button>
                            )}
                          </div>
                        ))}
                      </>
                    )}
                  </div>

                </div>
                {/* sunday */}
                <div className="flex flex-row">
                  <div className="flex flex-col sm:flex-row pt-[10px] pl-[20px]">
                    <InputForm
                      type="checkbox"
                      borderRadius="md"
                      name="sunday"
                      borderSize="checkbox"
                      onChange={handleCheckboxChange}
                      checked={daysOfWeek.sunday}
                      className="border border-purple-500 outline-none text-xs"
                    />
                  </div>
                  <div className="flex pl-[20px]">
                    <Typography align="left" fontSize="sm" className="py-2">
                      Sunday
                    </Typography>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    {daysOfWeek.sunday && (
                      <>
                        {weekItem.sundayData.map((dataItem, index) => (
                          <div key={index}>
                            <div className="flex justify-between py-2">
                              <TimeslotSelector
                                weekItem={weekItem} // Ensure you pass the correct week item
                                index={index}
                                day="sundayData"
                                handleTimeslot={(e, idx, day) => handleTimeslot(e, idx, day, setWeek)}
                                dataTime={dataTime}
                                setDataTime={setDataTime}
                              />



                              <div className="flex flex-col items-center py-2">
                                {weekItem.sundayData.length > 1 && (
                                  <button onClick={() => handleDelete(index, 'sundayData')}>
                                    <div className="flex items-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                        />
                                      </svg>
                                    </div>
                                  </button>
                                )}
                              </div>
                            </div>

                            {index === weekItem.sundayData.length - 1 && (
                              <button onClick={() => handleAddNew('sundayData')}>
                                <small className=" underline font-bold text-xs sm:text-md pl-[20px]">
                                  Add another timeslot
                                </small>
                              </button>
                            )}
                          </div>
                        ))}
                      </>
                    )}
                  </div>

                </div>

                <div className="flex flex-col">
                  <div className="flex justify-end gap-4">
                    {currentPage > 0 && (
                      <Button
                        onClick={handleBack}
                        radius="md"
                        className="hover:bg-violet-700 text-white text-[16px] flex justify-center w-[100px] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      type="submit"
                      radius="md"
                      className="hover:bg-violet-700 text-white text-[16px] flex justify-center w-[100px] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </form>
            </div>

          ))}

=======
                        </div>
                        {index === selectwednesday.length - 1 && (
                          <button
                            onClick={() => handleAddNewTimeslotwednesday()}
                          >
                            <small className=" underline font-bold  sm:text-md pl-[20px]">
                              Add another timeslot
                            </small>
                          </button>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
            {/* Thursday */}
            <div className="flex flex-row">
              <div className="flex flex-col sm:flex-row pt-[10px] pl-[20px]">
                <InputForm
                  type="checkbox"
                  borderRadius="md"
                  borderSize="checkbox"
                  name="Thursday"
                  onChange={handleCheckboxChange}
                  checked={daysOfWeek.Thursday}
                  className="border border-purple-500 outline-none text-xs"
                />
              </div>
              <div className="flex pl-[20px]">
                <Typography align="left" fontSize="sm" className="py-2">
                  Thursday
                </Typography>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                {daysOfWeek.Thursday && (
                  <>
                    {selectThursday.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between py-2">
                          <div className="flex flex-col sm:flex-row">
                            <div className="flex flex-col pl-[90px] sm:pl-[2px] ">
                              <div className="flex flex-col pr-[180px] sm:pr-[220px]">
                                <Typography
                                  fontSize="sm"
                                  className="py-2 sm:text-start"
                                >
                                  Form
                                </Typography>
                              </div>
                              <Select
                                borderRadius="md"
                                borderSize="timeSelect"
                                name="from"
                                defaultValue={
                                  dataTime.find((item) => item.hour === "9:00")
                                    ?.hour
                                }
                                onChange={(e) => {
                                  handleUpdateTimeslotThursday(e, index);
                                }}
                                className="border border-purple-500  outline-none text-xs"
                              >
                                {dataTime.map((datahour) => (
                                  <option
                                    key={datahour.id}
                                    value={datahour.hour}
                                  >
                                    {datahour.hour}
                                  </option>
                                ))}
                              </Select>
                            </div>
                            <div className="flex flex-col pl-[90px] sm:pl-[2px]">
                              <div className="flex flex-col pr-[180px] sm:pr-[220px]">
                                <Typography
                                  fontSize="sm"
                                  className="py-2 sm:text-start"
                                >
                                  To
                                </Typography>
                              </div>
                              <Select
                                borderRadius="md"
                                borderSize="timeSelect"
                                defaultValue={
                                  dataTime.find((item) => item.hour === "10:00")
                                    ?.hour
                                }
                                onChange={(e) => {
                                  handleUpdateTimeslot(e, index);
                                }}
                                name="to"
                                className="border border-purple-500 outline-none text-xs"
                              >
                                {selectThursday[index].from
                                  ? dataTime.map((data, idx) => {
                                    // Find index of option `to` base on the value of option `to`
                                    const toIndex = dataTime.findIndex(
                                      (eachSlot) =>
                                        eachSlot.hour ===
                                        selectThursday[index].to
                                    );

                                    // Return only hour greater than the `from` value
                                    if (idx > toIndex - 1) {
                                      return (
                                        <option
                                          key={data.id}
                                          value={data.hour}
                                        >
                                          {data.hour}
                                        </option>
                                      );
                                    }
                                  })
                                  : dataTime.map((data) => (
                                    <option key={data.id} value={data.hour}>
                                      {data.hour}
                                    </option>
                                  ))}
                              </Select>
                            </div>
                          </div>

                          <div className="flex flex-col items-center py-2">
                            {selectThursday.length > 1 && (
                              <button
                                onClick={() => handleDeleteThursday(index)}
                              >
                                <div className="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                  </svg>
                                </div>
                              </button>
                            )}
                          </div>
                        </div>
                        {index === selectThursday.length - 1 && (
                          <button
                            onClick={() => handleAddNewTimeslotThursday()}
                          >
                            <small className=" underline font-bold  sm:text-md pl-[20px]">
                              Add another timeslot
                            </small>
                          </button>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
            {/* friday */}
            <div className="flex flex-row">
              <div className="flex flex-col sm:flex-row pt-[10px] pl-[20px]">
                <InputForm
                  type="checkbox"
                  borderRadius="md"
                  borderSize="checkbox"
                  name="friday"
                  onChange={handleCheckboxChange}
                  checked={daysOfWeek.friday}
                  className="border border-purple-500 outline-none text-xs"
                />
              </div>
              <div className="flex pl-[20px]">
                <Typography align="left" fontSize="sm" className="py-2">
                  Friday
                </Typography>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                {daysOfWeek.friday && (
                  <>
                    <div className="flex justify-between"></div>
                    {selectFriday.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between py-2">
                          <div className="flex flex-col sm:flex-row" >
                            <div className="flex flex-col pl-[90px] sm:pl-[2px] ">
                              <div className="flex flex-col pr-[180px] sm:pr-[220px]">
                                <Typography
                                  fontSize="sm"
                                  className="py-2 sm:text-start"
                                >
                                  Form
                                </Typography>
                              </div>
                              <Select
                                borderRadius="md"
                                borderSize="timeSelect"
                                name="from"
                                defaultValue={
                                  dataTime.find((item) => item.hour === "9:00")
                                    ?.hour
                                }
                                onChange={(e) => {
                                  handleUpdateTimeslotFriday(e, index);
                                }}
                                className="border border-purple-500  outline-none text-xs"
                              >
                                {dataTime.map((datahour) => (
                                  <option key={datahour.id} value={datahour.hour}>
                                    {datahour.hour}
                                  </option>
                                ))}
                              </Select>
                            </div>
                            <div className="flex flex-col pl-[90px] sm:pl-[2px]">
                              <div className="flex flex-col pr-[180px] sm:pr-[220px]">
                                <Typography
                                  fontSize="sm"
                                  className="py-2 sm:text-start"
                                >
                                  To
                                </Typography>
                              </div>
                              <Select
                                borderRadius="md"
                                borderSize="timeSelect"
                                defaultValue={
                                  dataTime.find((item) => item.hour === "10:00")
                                    ?.hour
                                }
                                onChange={(e) => {
                                  handleUpdateTimeslotFriday(e, index);
                                }}
                                name="to"
                                className="border border-purple-500 outline-none text-xs"
                              >
                                {selectFriday[index].from
                                  ? dataTime.map((data, idx) => {
                                    // Find index of option `to` base on the value of option `to`
                                    const toIndex = dataTime.findIndex(
                                      (eachSlot) =>
                                        eachSlot.hour === selectFriday[index].to
                                    );

                                    // Return only hour greater than the `from` value
                                    if (idx > toIndex - 1) {
                                      return (
                                        <option key={data.id} value={data.hour}>
                                          {data.hour}
                                        </option>
                                      );
                                    }
                                  })
                                  : dataTime.map((data) => (
                                    <option key={data.id} value={data.hour}>
                                      {data.hour}
                                    </option>
                                  ))}
                              </Select>
                            </div>
                          </div>

                          <div className="flex flex-col items-center py-2">
                            {selectFriday.length > 1 && (
                              <button onClick={() => handleDeleteFriday(index)}>
                                <div className="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                  </svg>
                                </div>
                              </button>
                            )}
                          </div>
                        </div>

                        {index === selectFriday.length - 1 && (
                          <button onClick={() => handleAddNewTimeslotFriday()}>
                            <small className=" underline font-bold sm:text-sm pl-[20px]">
                              Add another timeslot
                            </small>
                          </button>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
            {/* saturday */}
            <div className="flex flex-row">
              <div className="flex flex-col sm:flex-row pt-[10px] pl-[20px]">
                <InputForm
                  type="checkbox"
                  borderRadius="md"
                  borderSize="checkbox"
                  name="saturday"
                  onChange={handleCheckboxChange}
                  checked={daysOfWeek.saturday}
                  className="border border-purple-500 outline-none text-xs"
                />
              </div>
              <div className="flex pl-[20px]">
                <Typography align="left" fontSize="sm" className="py-2">
                  Saturday
                </Typography>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                {daysOfWeek.saturday && (
                  <>
                    <div className="flex justify-between">

                    </div>
                    {selectSaturday.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between py-2">
                          <div className="flex flex-col sm:flex-row">
                            <div className="flex flex-col pl-[90px] sm:pl-[2px] ">
                              <div className="flex flex-col  pr-[180px] sm:pr-[220px]">
                                <Typography
                                  fontSize="sm"
                                  className="py-2 sm:text-start"
                                >
                                  Form
                                </Typography>
                              </div>
                              <Select
                                borderRadius="md"
                                borderSize="timeSelect"
                                name="from"
                                defaultValue={
                                  dataTime.find((item) => item.hour === "9:00")
                                    ?.hour
                                }
                                onChange={(e) => {
                                  handleUpdateTimeslotSaturday(e, index);
                                }}
                                className="border border-purple-500  outline-none text-xs"
                              >
                                {dataTime.map((datahour) => (
                                  <option key={datahour.id} value={datahour.hour}>
                                    {datahour.hour}
                                  </option>
                                ))}
                              </Select>
                            </div>
                            <div className="flex flex-col pl-[90px] sm:pl-[2px]">
                              <div className="flex flex-col pr-[180px] sm:pr-[220px]">
                                <Typography
                                  fontSize="sm"
                                  className="py-2 sm:text-start"
                                >
                                  To
                                </Typography>
                              </div>
                              <Select
                                borderRadius="md"
                                borderSize="timeSelect"
                                defaultValue={
                                  dataTime.find((item) => item.hour === "10:00")
                                    ?.hour
                                }
                                onChange={(e) => {
                                  handleUpdateTimeslotFriday(e, index);
                                }}
                                name="to"
                                className="border border-purple-500 outline-none text-xs"
                              >
                                {selectSaturday[index].from
                                  ? dataTime.map((data, idx) => {
                                    // Find index of option `to` base on the value of option `to`
                                    const toIndex = dataTime.findIndex(
                                      (eachSlot) =>
                                        eachSlot.hour ===
                                        selectSaturday[index].to
                                    );

                                    // Return only hour greater than the `from` value
                                    if (idx > toIndex - 1) {
                                      return (
                                        <option key={data.id} value={data.hour}>
                                          {data.hour}
                                        </option>
                                      );
                                    }
                                  })
                                  : dataTime.map((data) => (
                                    <option key={data.id} value={data.hour}>
                                      {data.hour}
                                    </option>
                                  ))}
                              </Select>
                            </div>
                          </div>
                          <div className="flex flex-col items-center py-2">
                            {selectSaturday.length > 1 && (
                              <button
                                onClick={() => handleDeleteSaturday(index)}
                              >
                                <div className="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                  </svg>
                                </div>
                              </button>
                            )}
                          </div>
                        </div>

                        {index === selectSaturday.length - 1 && (
                          <button
                            onClick={() => handleAddNewTimeslotSaturday()}
                          >
                            <small className=" underline font-bold sm:text-sm pl-[20px]">
                              Add another timeslot
                            </small>
                          </button>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
            {/* sunday */}
            <div className="flex flex-row">
              <div className="flex flex-col sm:flex-row pt-[10px] pl-[20px]">
                <InputForm
                  type="checkbox"
                  borderRadius="md"
                  borderSize="checkbox"
                  name="sunday"
                  onChange={handleCheckboxChange}
                  checked={daysOfWeek.sunday}
                  className="border border-purple-500 outline-none text-xs"
                />
              </div>
              <div className="flex pl-[20px]">
                <Typography align="left" fontSize="sm" className="py-2">
                  Sunday
                </Typography>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                {daysOfWeek.sunday && (
                  <>
                    {selectSunday.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between py-2">
                          <div className="flex flex-col sm:flex-row">
                            <div className="flex flex-col pl-[90px] sm:pl-[2px]">
                              <div className="flex flex-col pr-[180px] sm:pr-[220px]">
                                <Typography
                                  fontSize="sm"
                                  className="py-2 sm:text-start"
                                >
                                  Form
                                </Typography>
                              </div>
                              <Select
                                borderRadius="md"
                                borderSize="timeSelect"
                                name="from"
                                defaultValue={
                                  dataTime.find((item) => item.hour === "9:00")
                                    ?.hour
                                }
                                onChange={(e) => {
                                  handleUpdateTimeslotSunday(e, index);
                                }}
                                className="border border-purple-500  outline-none text-xs"
                              >
                                {dataTime.map((datahour) => (
                                  <option key={datahour.id} value={datahour.hour}>
                                    {datahour.hour}
                                  </option>
                                ))}
                              </Select>
                            </div>
                            <div className="flex flex-col pl-[90px] sm:pl-[2px]">
                              <div className="flex flex-col pr-[180px] sm:pr-[220px]">
                                <Typography
                                  fontSize="sm"
                                  className="py-2 sm:text-start"
                                >
                                  To
                                </Typography>
                              </div>
                              <Select
                                borderRadius="md"
                                borderSize="timeSelect"
                                defaultValue={
                                  dataTime.find((item) => item.hour === "10:00")
                                    ?.hour
                                }
                                onChange={(e) => {
                                  handleUpdateTimeslotSunday(e, index);
                                }}
                                name="to"
                                className="border border-purple-500 outline-none text-xs"
                              >
                                {selectSunday[index].from
                                  ? dataTime.map((data, idx) => {
                                    // Find index of option `to` base on the value of option `to`
                                    const toIndex = dataTime.findIndex(
                                      (eachSlot) =>
                                        eachSlot.hour === selectSunday[index].to
                                    );

                                    // Return only hour greater than the `from` value
                                    if (idx > toIndex - 1) {
                                      return (
                                        <option key={data.id} value={data.hour}>
                                          {data.hour}
                                        </option>
                                      );
                                    }
                                  })
                                  : dataTime.map((data) => (
                                    <option key={data.id} value={data.hour}>
                                      {data.hour}
                                    </option>
                                  ))}
                              </Select>
                            </div>
                          </div>
                          <div className="flex flex-col items-center py-2">
                            {selectSunday.length > 1 && (
                              <button onClick={() => handleDeleteSunday(index)}>
                                <div className="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                  </svg>
                                </div>
                              </button>
                            )}
                          </div>
                        </div>

                        {index === selectSunday.length - 1 && (
                          <button onClick={() => handleAddNewTimeslotSunday()}>
                            <small className=" underline font-bold sm:text-md pl-[20px]">
                              Add another timeslot
                            </small>
                          </button>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
>>>>>>> 4bb029f8b7da1ca36c1dfa58882533440f1fc087
        </div>
      </div>
    </div>
  );
};

export { TimeAvailableForm, type TimeSlot };






