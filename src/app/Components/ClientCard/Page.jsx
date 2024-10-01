import Image from 'next/image'
import React from 'react'
import Star from '../Star/Page'
import commaIcon from '../../Assets/Icons/dualComm.svg'


export default function ClientCard(props) {
    return (
        <>


            <div className="h-[254px] w-[424px] rounded-xl bg-white p-4 shadow-[0px_10px_20px_0px_#00000003]">
                <div className="py-4">
                    <Image src={commaIcon} className="" alt="img" />
                </div>
                <div className="bg-white ">
                    <div className="">
                        <p className="mb-5 text-[14px] text-[#4D4D4D]">{props.title}</p>
                    </div>
                    <div className="py-4">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex gap-2 items-center">
                                <div>
                                    <Image src={props.image} className=" w-14 h-14 object-cover rounded-[50%]"
                                        alt="img" />
                                </div>
                                <div>
                                    <div className="bg-white p-3">
                                        <h4 className="text-[16px] font-bold">Jenny Wilson</h4>
                                        <p className="text-sm text-[#808080]">Ceo & Founder</p>
                                    </div>
                                </div>
                            </div>
                            <Star />

                        </div>
                    </div>
                </div>

            </div>




        </>
    )
}
