import React from "react";
import Link from 'next/link'

export default function Header() {
    return (
        <header className="border-b border-slate-500 py-5 mb-5">
            <div className="container mx-auto flex justify-between px-5">
                <div className="logo">Mathilde.</div>
                <ul className="flex gap-5">
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>About Me</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Work</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Hobby</a>
                        </Link>
                    </li>
                </ul>
                <div>
                    <Link href="/contact">
                        <a className="border border-slate-500 p-1 px-5">Contact</a>
                    </Link>
                </div>
            </div>
        </header>
    )
}