import Image from 'next/image'
import React from 'react'
import veg1 from '../.././Assets/Images/veg1.png'
import p1 from '../.././Assets/Images/people1.jpg'
import p2 from '../.././Assets/Images/people2.jpg'

import Star from '../Star/Page'
import Heading from '../Heading/Page'

export default function Teamcard() {
    return (
        <div className="bg-[#D9D9D9] p-6 ">
            <div className="m-4">
                <Heading title="Our Awesome Team" className="text-center" />
            </div>
            <div className=" mt-16 flex justify-center flex-wrap items-center gap-4">
                <div className="h-[368px] w-[312px] rounded-xl">
                    <div className="h-[280px] w-[312px]  bg-white overflow-hidden">
                        <Image src={p1} className="object-cover w-full h-full"
                            alt="img" />
                    </div>
                    <div className="bg-white p-5">
                        <h4 className="text-lg font-bold">Jenny Wilson</h4>
                        <p className="text-sm text-[#808080]">Ceo & Founder</p>
                    </div>
                </div>
                <div className="h-[368px] w-[312px] rounded-xl">
                    <div className="h-[280px] w-[312px]  bg-white overflow-hidden">
                        <Image src={p2} className="object-cover w-full h-full"
                            alt="img" />
                    </div>
                    <div className="bg-white p-5">
                        <h4 className="text-lg font-bold">Jenny Wilson</h4>
                        <p className="text-sm text-[#808080]">Ceo & Founder</p>
                    </div>
                </div>
                <div className="h-[368px] w-[312px] rounded-xl">
                    <div className="h-[280px] w-[312px]  bg-white overflow-hidden">
                        <Image src={p1} className="object-cover w-full h-full"
                            alt="img" />
                    </div>
                    <div className="bg-white p-5">
                        <h4 className="text-lg font-bold">Jenny Wilson</h4>
                        <p className="text-sm text-[#808080]">Ceo & Founder</p>
                    </div>
                </div>
                <div className="h-[368px] w-[312px] rounded-xl">
                    <div className="h-[280px] w-[312px]  bg-white overflow-hidden">
                        <Image src={p1} className="object-cover w-full h-full"
                            alt="img" />
                    </div>
                    <div className="bg-white p-5">
                        <h4 className="text-lg font-bold">Jenny Wilson</h4>
                        <p className="text-sm text-[#808080]">Ceo & Founder</p>
                    </div>
                </div>
                <div className="h-[368px] w-[312px] rounded-xl">
                    <div className="h-[280px] w-[312px]  bg-white overflow-hidden">
                        <Image src={p2} className="object-cover w-full h-full"
                            alt="img" />
                    </div>
                    <div className="bg-white p-5">
                        <h4 className="text-lg font-bold">Jenny Wilson</h4>
                        <p className="text-sm text-[#808080]">Ceo & Founder</p>
                    </div>
                </div>
                <div className="h-[368px] w-[312px] rounded-xl">
                    <div className="h-[280px] w-[312px]  bg-white overflow-hidden">
                        <Image src={p1} className="object-cover w-full h-full"
                            alt="img" />
                    </div>
                    <div className="bg-white p-5">
                        <h4 className="text-lg font-bold">Jenny Wilson</h4>
                        <p className="text-sm text-[#808080]">Ceo & Founder</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
