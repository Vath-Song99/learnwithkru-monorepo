"use client";
import { Typography } from "@/components/atoms";
import { Select } from "@/components/atoms/select/select";
import React from "react";

interface FilterDropdownPriceProps {
  className?: string;
  nameDropdownPrice?: string;
  itemsDropdownPrice?: { id: number; minPrice: number; maxPrice: number }[];
  onChange: (minPrice: number, maxPrice: number) => void;
}

const FilterDropdownPrice: React.FC<FilterDropdownPriceProps> = ({
  className,
  nameDropdownPrice,
  itemsDropdownPrice = [],
  onChange,
}) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value, 10);
    const selectedItem = itemsDropdownPrice.find(item => item.id === selectedId);
    if (selectedItem) {
      onChange(selectedItem.minPrice, selectedItem.maxPrice);
    }
  };

  return (
    <div className={`lg:w-1/5 w-[48%] grid grid-flow-row ${className}`}>
      <Typography align="left" className="text-xs" colorscheme="secondary">
        {nameDropdownPrice}
      </Typography>
      <Select
        borderRadius="md"
        borderSize="timeSelect"
        name="priceRange"
        className="w-full border  border-purple-200 outline-none text-xs"
        onChange={handleSelectChange}
      >
        {itemsDropdownPrice.map((item) => (
          <option key={item.id} value={item.id}>
            ${item.minPrice} - ${item.maxPrice}
          </option>
        ))}
      </Select>
    </div>
  );
};

export { FilterDropdownPrice };
