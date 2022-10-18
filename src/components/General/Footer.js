import React from 'react'
import Link from 'next/link'
import { menu } from '@/data/menu'

export default function Footer() {
  return (
    <footer className="border-t border-slate-500 mt-5">
      <div className="container mx-auto flex p-5">
        <ul className="gap-5 hidden lg:flex">
          {menu.map((value, index) => (
            <li key={index}>
              <Link href={value.href}>
                <a>{value.label}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-auto">Made with ❤️ by RO. &copy; 2022/10/09</div>
      </div>
    </footer>
  )
}
