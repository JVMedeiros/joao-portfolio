"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'services',
    path: '/services'
  },
  {
    name: 'resume',
    path: '/resume'
  },
  {
    name: 'work',
    path: '/work'
  },
  {
    name: 'contact',
    path: '/contact'
  },
]
export function Nav() {
  const path = usePathname()
  return (
    <nav className="flex gap-8 ">
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`${link.path === path && 'text-accent border-b-2 border-accent'}`}>
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}