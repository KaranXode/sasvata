import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <div>
            <img src="" alt="logo" srcset="" />
        </div>
        <nav>
          <ul>
           
            <Link href="../../Pages/about.jsx">About Us</Link>
            <Link href="../../Pages/product.jsx">Our Products</Link>
            <Link href="../../Pages/contact.jsx">Contact Us</Link>
            <Link href="../../Pages/faq.jsx">F&Q</Link>
          </ul>
        </nav>
  
    </div>
  )
}
