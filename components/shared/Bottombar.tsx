"use client"

import { sidebarLinks } from "@/Constants";
import Image from "next/image";
import Link from "next/link";
import {usePathname , useRouter} from 'next/navigation'

export default function Bottombar()
{
  const router = useRouter();
  const Pathname = usePathname();

  return (
    <section className="bottombar">
      <div className="bottombar_container">
      {sidebarLinks.map((link) => {
        
        const isActive = (Pathname.includes(link.route)
          && link.route.length > 1)
          || Pathname === link.route;
        
        return (
          <Link href={link.route}
            key={link.label}
            className={`bottombar_link ${
              isActive && ' bg-red-600'
            }`}
          >
            <Image
              src={link.imgURL}
              alt={link.label}
              width={24}
              height={24}
            >
            </Image>   
            <p className=" text-subtle-medium text-light-1 max-sm:hidden">
              {link.label.split(/\s+/)[0]}
            </p>
          </Link>
        )
     })}
        </div>
       </section>
    )
}
