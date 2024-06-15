"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdAccountCircle } from "react-icons/md";
import clsx from 'clsx';
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlinePriceChange } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
const links = [

   { name: "About", href: "/settings/edit-profile/about", icon: MdAccountCircle },
    { name: "Education", href: "/settings/edit-profile/education", icon: IoSettingsOutline },
   { name: "Description", href: "/settings/edit-profile/description", icon: MdOutlineDescription },
   { name: "Time Available", href: "/settings/edit-profile/time-available", icon: IoTimeOutline },
   { name: "price", href: "/settings/edit-profile/price", icon: MdOutlinePriceChange },
   { name: "student", href: "/settings/edit-profile/student", icon: PiStudent },

];

export default function NavLinksSubTeachers() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center rounded-md gap-2 bg-white  text-black p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "!bg-[#542598] text-white": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
