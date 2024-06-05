//FilterDropDown components
"use client";
import {

  Typography,

} from "@/components/atoms";
import { Select } from "@/components/atoms/select/select";
import {  ChangeEvent } from "react";


interface FilterDropdownProps {
  className?: string;
  nameDropdown: string;
  nameSubject?: string;
  itemsDropdown?: { id: number; itemName: string}[];
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  className,
  nameDropdown,
  itemsDropdown = [],
}) => {



  const onChangeInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log(" name",value)
  };

  return (
    <div className={`lg:w-1/5 w-[48%] grid grid-flow-row ${className}`}>
      <Typography align="left" className="text-xs" colorscheme="secondary">
        {nameDropdown}
      </Typography>
      <Select
        borderRadius="md"
        borderSize="timeSelect"
        name="subject"
        onChange={onChangeInput}
        className="border border-purple-500  outline-none text-xs"
      >
        {itemsDropdown.map((item) => (
          <option key={item.id} value={item.itemName}>
            {item.itemName}
          </option>
        ))}
      </Select>
    </div>
  );
};

export { FilterDropdown };
