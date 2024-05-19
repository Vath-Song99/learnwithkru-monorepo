"use client"
import {
  Dropdown,
  Typography,
  ShowDropdown,
  LinkDropdown,
  LinkDropdownPage,
} from "@/components/atoms";
import React, { useContext } from "react";
import { createContext, useState } from "react";
interface FilterDropdownTypes {
  className?: React.ReactNode;
  nameDropdown?: string;
  nameSubject?: string;
  itemsDropdown?: [] | any
}
const FilterDropdown: React.FC<FilterDropdownTypes> = ({
  className,
  nameDropdown,
  nameSubject,
  itemsDropdown

}) => {

  return (

    <div className="lg:w-1/5 w-[48%] grid grid-flow-row  ">
      <Typography align="left" className="text-xs" colorscheme="secondary">{nameDropdown}</Typography>
      <Dropdown className="w-full" buttonContent={`Select ${nameDropdown}`} >
        <ShowDropdown className=" w-[180px] sm:w-[270px] md:w-[300px] lg:w-[300px]  px-3 py-1">
          {
            itemsDropdown.map((item: { itemName: string; }, index: React.Key | null | undefined) => (
              <LinkDropdown key={index} className="py-2 text-xs  ">
                <LinkDropdownPage itemDropdown={item.itemName} />
              </LinkDropdown>
            ))
          }
        </ShowDropdown>
      </Dropdown>

    </div>

  );
};

export { FilterDropdown };
