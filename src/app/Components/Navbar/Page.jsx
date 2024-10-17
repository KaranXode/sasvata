import Link from 'next/link'
import React from 'react'
import logo from '../.././Assets/Icons/sasvata-logo.svg'
import Image from 'next/image'
import HamburgerMenu from '../MenuBar/Page'

export default function Navbar({navStyle,...props}) {
  return (
    <div className="flex justify-between items-center p-3 lg:p-6">
        <div>
       <Link href="/">
       <Image src={logo} alt="logo" className="max-w-[40px] sm:max-w-[68px] bg-white rounded-[50%]" />
       </Link>
        </div>
        <nav className={`flex gap-2 lg:gap-6 xl:gap-[10rem] items-center ${navStyle} `}>
          <ul className=" gap-6 hidden md:flex">
            <Link href="/pages/about" className="navbar-link">About Us</Link>
            <Link href="/pages/product" className="navbar-link">Our Products</Link>
            <Link href="/pages/contact" className="navbar-link">Contact Us</Link>
            <Link href="/pages/faq" className="navbar-link">F&Q</Link>
          </ul>
          <HamburgerMenu hamburgerIconStyle={props.hamburgerIconStyle}/>
        </nav>
       
    
    </div>
  )
}
