"use client"
import { Dropdown } from "@/components/atoms";
import { SelectDropdownnProps, ShowDropdown } from "@/components/atoms/dropdown/dropdown";
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
  const dropdownItems = itemsDropdown?.map(item => item.itemName) || [];
  console.log('Dropdown Items:', dropdownItems); // Debugging line

  return (
    <div className={`w-full ${className}`}>
      <Dropdown buttonContent={`Select ${nameDropdown}`} className="w-full">
        <ShowDropdown value={dropdownItems} className=" flex flex-col">
          {dropdownItems}
        </ShowDropdown>
      </Dropdown>
    </div>
  );
}

export { FilterDropdown };
