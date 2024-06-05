import { Button } from "@/components/atoms";
import { FilterDropdown, FilterDropdownPrice } from "@/components/molecules";
import React from "react";

const itemsDropdown = [
  { itemName: "All", id: 1 },
  { itemName: "English", id: 1 },
  { itemName: "Mathematics", id: 2 },
  { itemName: "Physics", id: 3 },
  { itemName: "Chemistry", id: 4 },
];

const TimeDropDown = [
  { itemName: "All", id: 1 },
  { itemName: "Monday", id: 1 },
  { itemName: "Tuesday", id: 2 },
  { itemName: "Wednesday", id: 3 },
  { itemName: "Thursday", id: 4 },
  { itemName: "Friday", id: 5 },
  { itemName: "Saturday", id: 6 },
  { itemName: "Sunday", id: 7 },
];

const ProvinceDropDown = [
  { id: 1, itemName: "All" },
  { id: 1, itemName: "Phnom Penh" },
  { id: 2, itemName: "Kandal" },
  { id: 3, itemName: "Takeo" },
  { id: 4, itemName: "Svay Rieng" },
  { id: 5, itemName: "Prey Veng" },
  { id: 6, itemName: "Kampong Cham" },
  { id: 7, itemName: "Tbong Khmum" },
  { id: 8, itemName: "Kampong Chhnang" },
  { id: 9, itemName: "Kampong Speu" },
  { id: 10, itemName: "Kampong Thom" },
  { id: 11, itemName: "Siem Reap" },
  { id: 12, itemName: "Banteay Meanchey" },
  { id: 13, itemName: "Battambang" },
  { id: 14, itemName: "Pailin" },
  { id: 15, itemName: "Oddar Meanchey" },
  { id: 16, itemName: "Preah Vihear" },
  { id: 17, itemName: "Mondulkiri" },
  { id: 18, itemName: "Ratanakiri" },
  { id: 19, itemName: "Kratie" },
  { id: 20, itemName: "Stung Treng" },
  { id: 21, itemName: "Koh Kong" },
  { id: 22, itemName: "Kep" },
  { id: 23, itemName: "Kampot" },
  { id: 24, itemName: "Sihanoukville" },
  { id: 25, itemName: "Preah Sihanouk" },
];

const pricingDropDown = [
  { id: 1, minPrice: 5, maxPrice: 70 },
  { id: 2, minPrice: 10, maxPrice: 20 },
  { id: 3, minPrice: 20, maxPrice: 30 },
  { id: 4, minPrice: 30, maxPrice: 40 },
  { id: 5, minPrice: 40, maxPrice: 70 },
];


const FilterTeachers = () => {
  return (
    <div className="bg-[#F0F7FF] w-[80%] flex mx-auto p-3 justify-center items-center rounded-sm">
      <div className="w-[80%] flex justify-between items-start flex-wrap">
        <FilterDropdown nameDropdown="Subject" itemsDropdown={itemsDropdown} />
        <FilterDropdown
          nameDropdown="Time Available"
          itemsDropdown={TimeDropDown}
        />
        <FilterDropdown
          nameDropdown="Province"
          itemsDropdown={ProvinceDropDown}
        />
        <FilterDropdownPrice
          nameDropdownPrice="Pricing"
          itemsDropdownPrice={pricingDropDown}
        />
      </div>
    </div>
  );
};

export { FilterTeachers };
