import BannerNav from '@/app/Components/Homepage/BannerNav'
import Navbar from '@/app/Components/Navbar/Page'
import SocialMedia from '@/app/Components/Social-insta/Page'
import TextVideo from '@/app/Components/TextVideo/Page'
import UpcomingProduct from '@/app/DashBoard/UpcomingProduct'
import React from 'react'

export default function product() {
  return (
    <div className="bg-[#D9D9D9]">
     <BannerNav/>
     <TextVideo/>
    <UpcomingProduct shareOnWhatsApp={true}/>

     <SocialMedia/>
    </div>
  )
}
