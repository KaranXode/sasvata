
import React from 'react'
import Image from 'next/image'
import bgimg from '../.././Assets/Images/homepage-bg.jpg'
import bgimg2 from '../.././Assets/Images/homebg.jpg'

import logo from '../.././Assets/Icons/sasvata-logo.svg'
import Button from '../Button/Page'
import HamburgerMenu from '../MenuBar/Page'
import Carousel from '@/app/DashBoard/FullSlider'



export default function FullBanner() {
  return (
    <>
      <div className="home-wrapper relative" >
        <div className="menuIcon">
          <HamburgerMenu/>
        </div>
        <div className="logo-icon">
          <Image src={logo} alt="logo" className="relative top-[-20px]" />
        </div>
        <div className='lg:h-screen '>
          {/* <Image src={bgimg2} alt="img" className="w-full" /> */}
          <Carousel/>
        </div>
        <div className="absolute inset-[25%_5%] md:inset-[40%_50%_0_10%] text-white">
          <h1 className="text-[18px] sm:text-[24px] md:text-4xl lg:text-6xl font-semibold">Sasvata</h1>
          <p className="text-[14px] sm:text-[16px] md:text-xl lg:text-3xl">DEHYDRATED FOODS</p>
          <Button size="extra-large" variant="primary" label="Taste It" className="mt-4 lg:mt-16  lg:text-3xl" />
          <div>
    </div>
        </div>


      </div>
    </>
  )
}
