import React from 'react'

const Testimoni = () => (
  <section id="testimoni" className="relative">
    <div className="h-[700px]">
      <img
        src="/photo/pexels-mathilde-langevin-testimoni.jpg"
        alt="testimoni user"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="text-black absolute z-10 top-10 left-0 p-20">
      <p className="font-bold text-2xl bg-yellow-100/50 p-2">
        &quot; Jasmine has a unique style and is a true professional.&quot;
      </p>
      <span>- Shiloh Carson, Client</span>
    </div>
  </section>
)

export default Testimoni
