
import React from 'react'
import Image from 'next/image'
import bgimg from '../.././Assets/Images/homepage-bg.jpg'
import bgimg2 from '../.././Assets/Images/homebg.jpg'

import logo from '../.././Assets/Icons/sasvata-logo.svg'
import Hamburger from '../MenuBar/Page'
import Button from '../Button/Page'



export default function FullBanner() {
  return (
    <>
      <div className="home-wrapper relative" >
        <div className="menuIcon">
          <Hamburger/>
        </div>
        <div className="logo-icon">
          <Image src={logo} alt="logo" className="relative top-[-20px]" />
        </div>
        <div>
          <Image src={bgimg2} alt="img" className="w-full" />
        </div>
        <div className="absolute inset-[40%_50%_0_10%] text-white">
          <h1 className="text-6xl font-semibold">Sasvata</h1>
          <p className="text-3xl">DEHYDRATED FOODS</p>
          <Button size="extra-large" variant="primary" label="Taste It" className="mt-16" />
          <div>
    </div>
        </div>


      </div>
    </>
  )
}
