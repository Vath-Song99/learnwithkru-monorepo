"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdAccountCircle } from "react-icons/md";
import clsx from 'clsx';
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const links = [

   { name: "Account", href: "/settings/profiles/account", icon: MdAccountCircle },
   { name: "Password", href: "/settings/profiles/password", icon: IoSettingsOutline },
   { name: "Email", href: "/settings/profiles/email", icon: MdOutlineMail },
//   { name: "Email", href: "/dashboard/settings", icon: IoSettingsOutline },


];

export default function NavLinksSub() {
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
