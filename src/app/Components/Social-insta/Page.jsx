import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import green from '../../Assets/Images/green.jpg'
import tamato from '../../Assets/Images/tamato.jpg'
import instaIcon from '../../Assets/Icons/instagramIcon.svg'

export default function SocialMedia() {
  return (
    <div className="bg-[#EAEAEA] py-24">
      <h2 className="text-[32px] lg:text-2xl text-center font-semibold my-7">Follow us on Instagram</h2>

      <ul className="flex justify-center items-center gap-2">


        <li className="social-container relative group w-24 h-24 flex justify-center items-center">
          <Link href="https://www.instagram.com/" target="_blank">
            <Image src={tamato} alt="Image" className="group-hover:blur-[8px] transition-opacity duration-300" />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Image src={instaIcon} alt="Instagram Icon" className="w-10 h-10" />
            </div>
          </Link>
        </li>


        <li className="social-container relative group w-24 h-24 flex justify-center items-center">
          <Link href="https://www.instagram.com/" target="_blank">
            <Image src={green} alt="Image" className="group-hover:blur-[8px] transition-opacity duration-300" />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Image src={instaIcon} alt="Instagram Icon" className="w-10 h-10" />
            </div>
          </Link>
        </li>


        <li className="social-container relative group w-24 h-24 flex justify-center items-center">
          <Link href="https://www.instagram.com/" target="_blank">
            <Image src={tamato} alt="Image" className="group-hover:blur-[8px] transition-opacity duration-300" />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Image src={instaIcon} alt="Instagram Icon" className="w-10 h-10" />
            </div>
          </Link>
        </li>


        <li className="social-container relative group w-24 h-24 flex justify-center items-center">
          <Link href="https://www.instagram.com/" target="_blank">
            <Image src={green} alt="Image" className="group-hover:blur-[8px] transition-opacity duration-300" />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Image src={instaIcon} alt="Instagram Icon" className="w-10 h-10" />
            </div>
          </Link>
        </li>


        <li className="social-container relative group w-24 h-24 flex justify-center items-center">
          <Link href="https://www.instagram.com/" target="_blank">
            <Image src={tamato} alt="Image" className="group-hover:blur-[8px] transition-opacity duration-300" />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Image src={instaIcon} alt="Instagram Icon" className="w-10 h-10" />
            </div>
          </Link>
        </li>

      </ul>
    </div>


  )
}
