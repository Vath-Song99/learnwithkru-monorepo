import { FilterDropdown } from '@/components/molecules'
import React from 'react'

const itemsDropdown = [
  {
    itemName: "English"
  }, {
    itemName: "Mathematics"
  }, {
    itemName: "Physics"
  }, {
    itemName: "Chemistry"
  },
]
const TimeDropDown = [
  {
    itemName: "Monday"
  }, {
    itemName: "Tuesday"
  }, {
    itemName: "Wenesday"
  }, {
    itemName: "Thursday"
  }, {
    itemName: "Friday"
  }, {
    itemName: "Saturday"
  }, {
    itemName: "Sunday"
  }
]
const ProvinceDropDown = [
  { itemName: "Phnom Penh" },
  { itemName: "Kandal" },
  { itemName: "Takeo" },
  { itemName: "Svay Rieng" },
  { itemName: "Prey Veng" },
  { itemName: "Kampong Cham" },
  { itemName: "Tbong Khmum" },
  { itemName: "Kampong Chhnang" },
  { itemName: "Kampong Speu" },
  { itemName: "Kampong Thom" },
  { itemName: "Siem Reap" },
  { itemName: "Banteay Meanchey" },
  { itemName: "Battambang" },
  { itemName: "Pailin" },
  { itemName: "Oddar Meanchey" },
  { itemName: "Preah Vihear" },
  { itemName: "Mondulkiri" },
  { itemName: "Ratanakiri" },
  { itemName: "Kratie" },
  { itemName: "Stung Treng" },
  { itemName: "Koh Kong" },
  { itemName: "Kep" },
  { itemName: "Kampot" },
  { itemName: "Sihanoukville" },
  { itemName: "Preah Sihanouk" }
];
const pricingDropDown = [
  { itemName: "$10 - $15" },
  { itemName: "$20 - $25" },
  { itemName: "$30 - $35" },

];
const FilterTeachers = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className="w-[80%] flex justify-between items-start flex-wrap gap-2">
        <FilterDropdown nameDropdown='Subject' itemsDropdown={itemsDropdown} />
        <FilterDropdown nameDropdown='Time Aviable' itemsDropdown={TimeDropDown} />
        <FilterDropdown nameDropdown='Province' itemsDropdown={ProvinceDropDown} />
        <FilterDropdown nameDropdown='Pricing' itemsDropdown={pricingDropDown} />
      </div>
    </div>
  )
}

export { FilterTeachers } 