//FilterDropDownPrice components
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
interface FilterDropdownPriceProps {
  className?: string;
  nameDropdownPrice?: string;
  nameSubjectPrice?: string;
  itemsDropdownPrice?: { id: number, minPrice: number, maxPrice: number }[];
}


const FilterDropdownPrice: React.FC<FilterDropdownPriceProps> = ({
  className,
  nameDropdownPrice,
  nameSubjectPrice,
  itemsDropdownPrice = [],
}) => {
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleSelect = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div className={`lg:w-1/5 w-[48%] grid grid-flow-row ${className}`}>
      <Typography align="left" className="text-xs" colorscheme="secondary">
        {nameDropdownPrice}
      </Typography>
      <Select
        borderRadius="md"
        borderSize="timeSelect"
        name="from"
    
       
        className="border border-purple-500  outline-none text-xs"
      >
        {itemsDropdownPrice.map((item, index) => (
          <option key={item.id} value={item.id}>
            ${item.minPrice}-${item.maxPrice}
          </option>
        ))}
      </Select>
    </div>
  );
};

export { FilterDropdownPrice };
