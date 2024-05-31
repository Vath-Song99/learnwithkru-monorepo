"use client";
import { Button, InputForm, Typography } from "@/components/atoms";
import React, { ChangeEvent, useRef, useState } from "react";
import { TeachersAvailability, TimeAvailableFormTypes } from "./@types";
import { TimeSlote } from "@/components/molecules/timeslote";
import { Select } from "@/components/atoms/select/select";
interface DataTimeProp {
  id: string;
  hour: string;
}

const dataTime = [
  {
    id: "1",
    hour: "00:00",
  },
  {
    id: "2",
    hour: "1:00",
  },
  {
    id: "3",
    hour: "2:00",
  },
  {
    id: "4",
    hour: "3:00",
  },
  {
    id: "5",
    hour: "4:00",
  },
  {
    id: "6",
    hour: "5:00",
  },
  {
    id: "7",
    hour: "6:00",
  },
  {
    id: "8",
    hour: "7:00",
  },
  {
    id: "9",
    hour: "8:00",
  },
  {
    id: "10",
    hour: "9:00",
  },
  {
    id: "11",
    hour: "10:00",
  },
  {
    id: "12",
    hour: "11:00",
  },
  {
    id: "13",
    hour: "12:00",
  },
  {
    id: "14",
    hour: "13:00",
  },
  {
    id: "15",
    hour: "14:00",
  },
  {
    id: "16",
    hour: "15:00",
  },
  {
    id: "17",
    hour: "16:00",
  },
  {
    id: "18",
    hour: "17:00",
  },
  {
    id: "19",
    hour: "18:00",
  },
  {
    id: "20",
    hour: "19:00",
  },
  {
    id: "21",
    hour: "20:00",
  },
  {
    id: "22",
    hour: "21:00",
  },
  {
    id: "23",
    hour: "22:00",
  },
  {
    id: "24",
    hour: "23:00",
  },
];

const DEFAULT_FORM_VALUE = {
  monday: {
    from: "",
    to: "",
  },
};
const TimeAvailableForm = ({
  title,
  description,
  inputForms,
  buttonTitle,
  setTimeAvailable,
  setTimeDescription,
}: TimeAvailableFormTypes) => {
  const [selectMonday, setSelectMonday] = useState([{ from: "", to: "" }]);
  const [selectTuesday, setSelectTuesday] = useState([{ from: "", to: "" }]);
  const [selectwednesday, setSelectwednesday] = useState([
    { from: "", to: "" },
  ]);
  const [selectThursday, setSelectThursday] = useState([{ from: "", to: "" }]);
  const [selectFriday, setSelectFriday] = useState([{ from: "", to: "" }]);
  const [selectSaturday, setSelectSaturday] = useState([{ from: "", to: "" }]);
  const [selectSunday, setSelectSunday] = useState([{ from: "", to: "" }]);
  const [daysOfWeek, setDaysOfWeek] = useState({
    monday: true,
    tuesday: true,
    wednesday: true,
    Thursday: true,
    friday: true,
    saturday: true,
    sunday: true,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState<any>({});
  // Add Availble Timeslot
  const handleAddNewTimeslot = (index: number) => {
    const newInput = { from: "", to: "" };
    const indexData = selectMonday[index].from;
    setSelectMonday((prev) => [...prev, newInput]);
  };
  // add avaible timeslot in tuesday
  const handleAddNewTimeslotTuesday = () => {
    const newInput = { from: "", to: "" };
    setSelectTuesday((prev) => [...prev, newInput]);
  };
  // add avaible timeslot in wednesday
  const handleAddNewTimeslotwednesday = () => {
    const newInput = { from: "", to: "" };
    setSelectwednesday((prev) => [...prev, newInput]);
  };
  // add avaible timeslot in Thursday
  const handleAddNewTimeslotThursday = () => {
    const newInput = { from: "", to: "" };
    setSelectThursday((prev) => [...prev, newInput]);
  };
  // add avaible timeslot in Friday
  const handleAddNewTimeslotFriday = () => {
    const newInput = { from: "", to: "" };
    setSelectFriday((prev) => [...prev, newInput]);
  };
  // add avaible timeslot in Saturday
  const handleAddNewTimeslotSaturday = () => {
    const newInput = { from: "", to: "" };
    setSelectSaturday((prev) => [...prev, newInput]);
  };
  // add avaible timeslot in Sunday
  const handleAddNewTimeslotSunday = () => {
    const newInput = { from: "", to: "" };
    setSelectSunday((prev) => [...prev, newInput]);
  };
  // Update Existed Timeslot monday
  const handleUpdateTimeslot = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    idx: number
  ) => {
    const { name, value } = e.target;

    setSelectMonday((prev) => {
      const newArray = [...prev];

      // If timeslot = FROM
      if (name === "from") {
        const indexSlotHour = dataTime.findIndex(
          (eachSlot) => eachSlot.hour === value
        );
        newArray[idx] = {
          ...newArray[idx],
          [name]: value,
          to:
            indexSlotHour !== -1 && indexSlotHour < dataTime.length - 1
              ? dataTime[indexSlotHour + 1].hour
              : "",
        };
      } else {
        newArray[idx] = { ...newArray[idx], [name]: value };
        setFormData({
          ...formData,
          monday: newArray[idx],
        });
      }
      return newArray;
    });
  };
  // update existed Timeslot in setSelectThursday
  const handleUpdateTimeslotTuesday = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    idx: number
  ) => {
    const { name, value } = e.target;

    setSelectTuesday((prev) => {
      const newArray = [...prev];

      // If timeslot = FROM
      if (name === "from") {
        const indexSlotHour = dataTime.findIndex(
          (eachSlot) => eachSlot.hour === value
        );
        newArray[idx] = {
          ...newArray[idx],
          [name]: value,
          to:
            indexSlotHour !== -1 && indexSlotHour < dataTime.length - 1
              ? dataTime[indexSlotHour + 1].hour
              : "",
        };
      } else {
        newArray[idx] = { ...newArray[idx], [name]: value };
      }
      return newArray;
    });
  };
  // update existed Timeslot in wednesday
  const handleUpdateTimeslotwednesday = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    idx: number
  ) => {
    const { name, value } = e.target;

    setSelectwednesday((prev) => {
      const newArray = [...prev];
      // If timeslot = FROM
      if (name === "from") {
        const indexSlotHour = dataTime.findIndex(
          (eachSlot) => eachSlot.hour === value
        );

        newArray[idx] = {
          ...newArray[idx],
          [name]: value,
          to:
            indexSlotHour !== -1 && indexSlotHour < dataTime.length - 1
              ? dataTime[indexSlotHour + 1].hour
              : "",
        };
      } else {
        newArray[idx] = { ...newArray[idx], [name]: value };
      }
      return newArray;
    });
  };
  // update existed Timeslot in Thursday
  const handleUpdateTimeslotThursday = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    idx: number
  ) => {
    const { name, value } = e.target;

    setSelectThursday((prev) => {
      const newArray = [...prev];

      // If timeslot = FROM
      if (name === "from") {
        const indexSlotHour = dataTime.findIndex(
          (eachSlot) => eachSlot.hour === value
        );
        newArray[idx] = {
          ...newArray[idx],
          [name]: value,
          to:
            indexSlotHour !== -1 && indexSlotHour < dataTime.length - 1
              ? dataTime[indexSlotHour + 1].hour
              : "",
        };
      } else {
        newArray[idx] = { ...newArray[idx], [name]: value };
      }
      return newArray;
    });
  };
  // update existed Timeslot in friday
  const handleUpdateTimeslotFriday = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    idx: number
  ) => {
    const { name, value } = e.target;

    setSelectFriday((prev) => {
      const newArray = [...prev];

      // If timeslot = FROM
      if (name === "from") {
        const indexSlotHour = dataTime.findIndex(
          (eachSlot) => eachSlot.hour === value
        );
        newArray[idx] = {
          ...newArray[idx],
          [name]: value,
          to:
            indexSlotHour !== -1 && indexSlotHour < dataTime.length - 1
              ? dataTime[indexSlotHour + 1].hour
              : "",
        };
      } else {
        newArray[idx] = { ...newArray[idx], [name]: value };
      }
      return newArray;
    });
  };
  // update existed Timeslot in Saturday
  const handleUpdateTimeslotSaturday = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    idx: number
  ) => {
    const { name, value } = e.target;

    setSelectSaturday((prev) => {
      const newArray = [...prev];

      // If timeslot = FROM
      if (name === "from") {
        const indexSlotHour = dataTime.findIndex(
          (eachSlot) => eachSlot.hour === value
        );
        newArray[idx] = {
          ...newArray[idx],
          [name]: value,
          to:
            indexSlotHour !== -1 && indexSlotHour < dataTime.length - 1
              ? dataTime[indexSlotHour + 1].hour
              : "",
        };
      } else {
        newArray[idx] = { ...newArray[idx], [name]: value };
      }
      return newArray;
    });
  };
  // update existed Timeslot in Saturday
  const handleUpdateTimeslotSunday = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    idx: number
  ) => {
    const { name, value } = e.target;

    setSelectSunday((prev) => {
      const newArray = [...prev];

      // If timeslot = FROM
      if (name === "from") {
        const indexSlotHour = dataTime.findIndex(
          (eachSlot) => eachSlot.hour === value
        );
        newArray[idx] = {
          ...newArray[idx],
          [name]: value,
          to:
            indexSlotHour !== -1 && indexSlotHour < dataTime.length - 1
              ? dataTime[indexSlotHour + 1].hour
              : "",
        };
      } else {
        newArray[idx] = { ...newArray[idx], [name]: value };
      }
      return newArray;
    });
  };
  // update  Timeslot in monday
  const handleDeleteInput = (index: number) => {
    const newArray = [...selectMonday];
    newArray.splice(index, 1);
    setSelectMonday(newArray);
  };
  // update  Timeslot in Tuesday
  const handleDeleteTuesday = (index: number) => {
    const newArray = [...selectTuesday];
    newArray.splice(index, 1);
    setSelectTuesday(newArray);
  };
  // update  Timeslot in wednesday
  const handleDeleteWednesday = (index: number) => {
    const newArray = [...selectwednesday];
    newArray.splice(index, 1);
    setSelectwednesday(newArray);
  };
  // update  Timeslot in Thursday
  const handleDeleteThursday = (index: number) => {
    const newArray = [...selectThursday];
    newArray.splice(index, 1);
    setSelectThursday(newArray);
  };
  // update  Timeslot in Friday
  const handleDeleteFriday = (index: number) => {
    const newArray = [...selectFriday];
    newArray.splice(index, 1);
    setSelectFriday(newArray);
  };
  // update  Timeslot in Saturday
  const handleDeleteSaturday = (index: number) => {
    const newArray = [...selectSaturday];
    newArray.splice(index, 1);
    setSelectSaturday(newArray);
  };
  // update  Timeslot in Sunday
  const handleDeleteSunday = (index: number) => {
    const newArray = [...selectSunday];
    newArray.splice(index, 1);
    setSelectSunday(newArray);
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setDaysOfWeek((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

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
                            {selectMonday.length > 1 && (
                              <button onClick={() => handleDeleteInput(index)}>
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
                            </div>
                          </div>
                          <div className="flex flex-col items-center py-2">
                            {selectTuesday.length > 1 && (
                              <button
                                onClick={() => handleDeleteTuesday(index)}
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
                            </div>
                          </div>
                          <div className="flex flex-col items-center py-2">
                            {selectwednesday.length > 1 && (
                              <button
                                onClick={() => handleDeleteWednesday(index)}
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
        </div>
      </div>
    </div>
  );
};

export { TimeAvailableForm };
