import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="  bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-rpw p-4 md:p-0 mt-4 border border-gray-100 rounded-lg    rtl:space-x-reverse gap-10 ">
        <li>
          <Link href="http://localhost:3000/" className="block py-2 px-3 text-white bg-blue-700 rounded-lg " aria-current="page">Home</Link>
        </li>

        <li>
          <Link href="http://localhost:3000/about" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 hover:text-black ">About</Link>
        </li>

        <li>
          <Link href="http://localhost:3000/blog" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100  hover:text-black ">Blogs</Link>
        </li>

        <li>
          <Link href="http://localhost:3000/contact" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100  hover:text-black ">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar