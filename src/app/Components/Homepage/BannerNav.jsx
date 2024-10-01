
import React from 'react'
import Image from 'next/image'
import bgimg2 from '../.././Assets/Images/homebg.jpg'

import Navbar from '../Navbar/Page'



export default function BannerNav() {
  return (
    <>
      <div className="home-wrapper relative" >
        <div className="absolute z-[1] top-0 inset-x-0">
         <Navbar></Navbar>
        </div>
        <div>
          <Image src={bgimg2} alt="img" className="w-full" />
        </div>
        <div className="absolute  -translate-x-2/4 -translate-y-2/4 text-center left-2/4 top-2/4 text-white w-full">
        <h1 className="text-[24px] md:text-4xl lg:text-6xl font-semibold">Sasvata</h1>
          <p className="text-[16px] md:text-xl lg:text-3xl">DEHYDRATED FOODS</p>
          <div>
    </div>
        </div>


      </div>
    </>
  )
}
