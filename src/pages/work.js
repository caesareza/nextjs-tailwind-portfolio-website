import React from 'react'
import Head from 'next/head'

const Work = () => (
  <section id="work" className="flex flex-col lg:flex-row">
    <Head>
      <title>Work - Mathilde Langevin</title>
      <meta name="description" content="Contact Mathilde Langevin" />
    </Head>

    <div className="flex gap-3">
      <div>
        <img
          src="/works/pexels-mathilde-langevin-work-1-1.jpg"
          alt="work 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-3">
        <img src="/works/pexels-mathilde-langevin-work-1-2.jpg" alt="work 2" />
        <img src="/works/pexels-mathilde-langevin-work-1-3.jpg" alt="work 3" />
      </div>
    </div>
    <div className="w-[400px] flex-shrink-0 p-20">
      <h1 className="text-5xl mb-5">
        <span>Feature</span> <br />
        <span className="font-bold">Work</span>
      </h1>

      <ul>
        <li>01 Anissa & Tam Co., 2021</li>
        <li>02 Mintmade Fashion, 2021</li>
        <li>03 Tully and Drive, 2022</li>
      </ul>
    </div>
  </section>
)

export default Work
