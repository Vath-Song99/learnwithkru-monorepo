//FilterDropDown components
"use client"
import {
  Dropdown,
  Typography,
  ShowDropdown,
  LinkDropdown,
  LinkDropdownPage,
} from "@/components/atoms";
import { useState } from "react";
interface FilterDropdownTypes {
  className?: string;
  nameDropdown?: string;
  nameSubject?: string;
  itemsDropdown?: { itemName: string }[];
}

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
      <Dropdown
        className="w-full"
        buttonContent={`Select ${nameDropdown}`}
        selectedItem={selectedItem}
        onSelect={handleSelect}
      >
        <ShowDropdown className="w-[180px] sm:w-[270px] md:w-[300px] lg:w-[300px] px-3 py-1">
          {itemsDropdown.map((item, index) => (
            <LinkDropdown key={index} className="py-2 text-xs">
              <LinkDropdownPage
                className="cursor-pointer"
                itemDropdown={item.itemName}
                onSelect={handleSelect}
              />
            </LinkDropdown>
          ))}

        </ShowDropdown>
      </Dropdown>
    </div>
  );
};

export { FilterDropdown };
