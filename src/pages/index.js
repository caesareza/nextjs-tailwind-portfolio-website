import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-10">
      <Head>
        <title>Mathilde Langevin Portfolio</title>
        <meta
          name="description"
          content="Home page Mathilde Langevin Portfolio"
        />
      </Head>
      <div className="grid place-content-center text-center lg:text-left">
        <h1 title="Mathilde Langevin" className="text-[80px] leading-[70px]">
          Mathilde Langevin
        </h1>
        <div className="my-10 mb-10 space-y-5 text-2xl lg:mb-28">
          <div className="flex flex-col">
            <span className="font-light">Fashion Photography</span>
            <span>Portfolio</span>
          </div>
          <div>
            I use my camera to tell stories. I have been doing this
            professionally for ten years and I have no plans of stopping.
          </div>
        </div>
        <nav>
          <Link href="/">
            <a className="border bg-slate-700 text-white border-slate-500 p-5 px-10">
              GET IN TOUCH
            </a>
          </Link>
        </nav>
      </div>
      <div className="mt-10 w-full h-[300px] lg:w-1/2 lg:h-[700px] lg:mt-0">
        <img
          src="/photo/pexels-mathilde-langevin-home.jpg"
          alt="Mathilde"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
