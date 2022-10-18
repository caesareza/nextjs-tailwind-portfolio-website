import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Contact = () => (
  <section id="contact" className="relative">
    <Head>
      <title>Contact - Mathilde Langevin</title>
      <meta name="description" content="Contact Mathilde Langevin" />
    </Head>

    <div className="h-[700px]">
      <img
        src="/photo/pexels-mathilde-langevin-contact.jpg"
        alt="contact"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="w-1/2 h-[625px] bg-[#F2F5EB] absolute z-10 top-10 right-10 p-5 grid place-content-center">
      <h1 className="text-5xl mb-5">
        <span>Get in</span> <br />
        <span className="font-bold">Touch</span>
      </h1>
      <p>
        123 Anywhere St., Any City ST 12345 <br /> hello@reallygreatsite.com
      </p>
      <nav className="mt-20">
        <Link href="/contact">
          <a className="border border-slate-500 p-3 px-5 uppercase font-bold">
            Send an Email
          </a>
        </Link>
      </nav>
    </div>
  </section>
)

export default Contact
