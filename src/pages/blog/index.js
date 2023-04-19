import React from 'react'
import Link from 'next/link'

const Blog = () => {
  return (
    <section id="blog">
      <h1 className="text-3xl mb-8">Mathilde Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <article className="space-y-2">
          <div className="h-60 w-full bg-amber-500"></div>
          <div className="font-light text-sm">Category</div>
          <h2 className="font-bold text-2xl">
            Does This Thing Bring Me Balance?
          </h2>
          <p>
            Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id,
            metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis
            hendrerit fringilla. Vestibulum ante
          </p>
          <nav>
            <Link href="/">
              <a className="font-bold hover:text-amber-600">Read more</a>
            </Link>
          </nav>
        </article>
        <article className="space-y-2">
          <div className="h-60 w-full bg-amber-500"></div>
          <div className="font-light text-sm">Category</div>
          <h2 className="font-bold">Does This Thing Bring Me Balance?</h2>
          <p>
            Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id,
            metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis
            hendrerit fringilla. Vestibulum ante
          </p>
          <nav>
            <Link href="/">
              <a className="font-bold hover:text-amber-600">Read more</a>
            </Link>
          </nav>
        </article>
        <article className="space-y-2">
          <div className="h-60 w-full bg-amber-500"></div>
          <div className="font-light text-sm">Category</div>
          <h2 className="font-bold">Does This Thing Bring Me Balance?</h2>
          <p>
            Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id,
            metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis
            hendrerit fringilla. Vestibulum ante
          </p>
          <nav>
            <Link href="/">
              <a className="font-bold hover:text-amber-600">Read more</a>
            </Link>
          </nav>
        </article>
        <article className="space-y-2">
          <div className="h-60 w-full bg-amber-500"></div>
          <div className="font-light text-sm">Category</div>
          <h2 className="font-bold">Does This Thing Bring Me Balance?</h2>
          <p>
            Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id,
            metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis
            hendrerit fringilla. Vestibulum ante
          </p>
          <nav>
            <Link href="/">
              <a className="font-bold hover:text-amber-600">Read more</a>
            </Link>
          </nav>
        </article>
      </div>
    </section>
  )
}

export default Blog
