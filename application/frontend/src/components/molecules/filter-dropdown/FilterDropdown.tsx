//FilterDropDown components
"use client";
import {
  Dropdown,
  Typography,
  ShowDropdown,
  LinkDropdown,
  LinkDropdownPage,
} from "@/components/atoms";
import { Select } from "@/components/atoms/select/select";
import { useState } from "react";
interface FilterDropdownTypes {
  className?: string;
  nameDropdown?: string;
  nameSubject?: string;
  itemsDropdown?: { itemName: string }[];
}
const subject = [
  {
    id: "1",
    subject: "English",
  },
  {
    id: "2",
    subject: "Computer",
  },
  {
    id: "3",
    subject: "Physics",
  },
  {
    id: "4",
    subject: "Maths",
  },
];


const FilterDropdown: React.FC<FilterDropdownTypes> = ({
  className,
  nameDropdown,
  nameSubject,
  itemsDropdown = [],
}) => {
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleSelect = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div className={`lg:w-1/5 w-[48%] grid grid-flow-row ${className}`}>
      <Typography align="left" className="text-xs" colorscheme="secondary">
        {nameDropdown}
      </Typography>
      <Select
        borderRadius="md"
        borderSize="timeSelect"
        name="from"
    
       
        className="border border-purple-500  outline-none text-xs"
      >
        {subject.map((datahour) => (
          <option key={datahour.id} value={datahour.subject}>
            {datahour.subject}
          </option>
        ))}
      </Select>
    </div>
  );
};

export { FilterDropdown };
