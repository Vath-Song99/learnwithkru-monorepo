"use client"
import { Dropdown } from "@/components/atoms";
import { SelectDropdownnProps } from "@/components/atoms/dropdown/dropdown";
import React from "react";
interface FilterDropdownTypes {
  className?: React.ReactNode;
  nameDropdown?: string;
  nameSubject?: string;
  itemsDropdown?: { itemName: string }[];
}
const FilterDropdown: React.FC<FilterDropdownTypes> = ({
  className,
  nameDropdown,
  nameSubject,
  itemsDropdown

}) => {

  return (
    <div className={`lg:w-1/5 w-[48%] grid grid-flow-row ${className}`}>
      <Dropdown buttonContent={`Select ${nameDropdown}`} className="w-full">
        <SelectDropdownnProps options={itemsDropdown?.map(item => item.itemName)} />
      </Dropdown>
    </div>
  );
}

export { FilterDropdown };
