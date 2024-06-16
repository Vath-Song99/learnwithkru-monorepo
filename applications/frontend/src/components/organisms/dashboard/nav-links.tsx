'use client';
import { ImProfile } from "react-icons/im";
import { FaUser } from "react-icons/fa6";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';
export default function NavLinks({}) {
  const pathname = usePathname();

  const links = [
    { name: "Account", href: "/settings/profiles/", icon: FaUser },
    { name: "profile", href: `/settings/profile/`, icon: ImProfile },
    { name: "Profile Edit", href: "/settings/edit-profile", icon: ImProfile },
  ];

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href || pathname.startsWith(link.href + '/');

        return (
          <div key={link.name}>
            <Link
              href={link.href}
              className={clsx(
                "flex h-[48px] grow items-center justify-center rounded-md gap-2 bg-white text-black p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3",
                { "!bg-[#542598] text-white": isActive }
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
            {isActive}
          </div>
        );
      })}
    </>
  );
}
