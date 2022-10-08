import React from 'react'
import Head from 'next/head'

const AboutMe = () => (
  <section id="about-me" className="flex flex-col lg:gap-52 lg:flex-row">
    <Head>
      <title>About - Mathilde Langevin</title>
      <meta name="description" content="About Mathilde Langevin Portfolio" />
    </Head>

    <div className="space-y-5 grid place-content-center">
      <h1 className="text-5xl">
        <span>Artist</span> <br />
        <span className="font-bold">Biography</span>
      </h1>

      <p>
        I use my camera to tell stories. I have been doing this professionally
        for ten years and I have no plans of stopping.
      </p>
      <p>
        I have worked with global brands like Anissa & Tam Co., Mintmade
        Fashion, and Tully and Drive.
      </p>
    </div>

    <div className="mt-10 lg:mt-0 w-full h-[700px]">
      <img
        src="/photo/pexels-mathilde-langevin-about.jpg"
        alt="About Mathilde"
        className="w-full h-full object-cover"
      />
    </div>
  </section>
)

export default AboutMe
