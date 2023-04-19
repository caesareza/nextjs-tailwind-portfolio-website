import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { menu } from '@/data/menu'

export default function Header() {
  const [isShowMenuMobile, setIsShowMenuMobile] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    document.addEventListener('click', handleCloseMobile)
    return () => document.removeEventListener('click', handleCloseMobile)
  }, [])

  const handleCloseMobile = () => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsShowMenuMobile(false)
    }
  }

  return (
    <header className="border-b border-slate-500 mb-5">
      <div className="container mx-auto flex justify-between p-5">
        <div className="logo">
          <Link href="/">
            <a>Mathilde.</a>
          </Link>
        </div>
        <ul className="gap-5 hidden lg:flex">
          {menu.map((value, index) => (
            <li key={index}>
              <Link href={value.href}>
                <a className="hover:text-amber-600">{value.label}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-auto mr-3 lg:ml-0 lg:mr-0">
          <Link href="/contact">
            <a className="border border-slate-500 p-1 px-5 hover:bg-amber-300">
              Contact
            </a>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button onClick={() => setIsShowMenuMobile(true)} ref={menuRef}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {isShowMenuMobile && (
        <div className="fixed w-full top-0 left-0 h-full bg-white text-center text-2xl p-5 z-50">
          <h2 className="my-5">MENU</h2>
          <ul>
            {menu.map((value, index) => (
              <li key={index} className="border-b py-3">
                <Link href={value.href}>
                  <a>{value.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
