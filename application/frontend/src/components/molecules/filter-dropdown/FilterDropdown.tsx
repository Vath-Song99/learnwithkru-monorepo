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
interface FilterDropdownProps {
  className?: string;
  nameDropdown: string;
  nameSubject?: string;
  itemsDropdown?: { id: number; itemName: string}[];
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  className,
  nameDropdown,
  nameSubject,
  itemsDropdown = [],
}) => {
  // const [selectedItem, setSelectedItem] = useState<string>("");

  // const handleSelect = (item: string) => {
  //   setSelectedItem(item);
  // };

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
        {itemsDropdown.map((item, index) => (
          <option key={item.id} value={item.id}>
            {item.itemName}
          </option>
        ))}
      </Select>
    </div>
  );
};

export { FilterDropdown };
