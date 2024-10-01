import BannerNav from '@/app/Components/Homepage/BannerNav'
import Navbar from '@/app/Components/Navbar/Page'
import TwoCard from '@/app/Layout/AboutPage/TwoCard'
import React from 'react'
import p1 from'../../Assets/Images/truck.jpg'
import p2 from'../../Assets/Images/people2.jpg'


export default function aboutPage() {
  return (
    <div className="bg-[#D9D9D9]">
      <BannerNav/>
     
      <TwoCard smImgurl={p2} lgImgurl={p1} className="flex-row-reverse"/>
      <TwoCard smImgurl={p2} lgImgurl={p1}  className=""/>

    </div>
  )
}
