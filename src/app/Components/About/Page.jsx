import React from 'react'
import truckImg from '../../Assets/Images/truck.jpg'
import appleImg from '../../Assets/Images/apple.jpg'
import Image from 'next/image'



export default function About() {
    return (
        <div className="px-10 py-20">
            <div className="flex gap-3 ">
                <div >
                    <Image src={truckImg} alt="img" className="w-[276px] h-[400px]" />
                </div>
                <div>
                    <Image src={appleImg} alt="img" className="w-[444px] h-[457px]" />
                </div>
                <div className="flex-[50%] pl-8 relative">
                    <h3 className="text-[40px] font-semibold">About Sasvata</h3>
                    <p className="mb-3 text-[#808080]">Sasvata offers the 'Best of Dry Food Powders'. It was Rajeswari Pagadala and Mounika Kola who started the company in Nellore,
                        Andhra Pradesh with the idea of dehydrating food powder. As a result, we created a seasonal business that would allow
                        consumers to purchase large quantities of dried fruits & veggies powder on the market.</p>
                    <p className="mb-3 text-[#808080]">As of today, most of our products are sold through wholesale orders, but we also offer some non-wholesale purchases. In spite of
                        the fact that we are a startup organization, we adhere to regulatory standards in terms of qualitative and quantitative values.
                        Our products are of the highest quality and we provide excellent customer service.</p>
                    <div className="absolute bottom-0">
                        <button className="primary-btn">Check more</button>
                    </div>
                </div>

            </div>



        </div>
    )
}
