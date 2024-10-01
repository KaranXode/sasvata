import Image from 'next/image'
import React from 'react'
import Star from '../Star/Page'
import eyeIcon from '../../Assets/Icons/eyeIcon.svg'

export default function ProductCard(props) {
    return (
        <>


            <div className="h-[412px] w-[312px] rounded-xl bg-white">
                <div className="h-[280px] w-[312px]  ">
                    <Image src={props.imageUrl} width={312}
                        height={280} alt="img" />
                </div>
                <div className="bg-white p-3 relative">
                    <div className="h-[64px]">
                        <h4 className="text-2xl font-bold mb-5">{props.title}</h4>
                    </div>
                    <div className="absolute bottom-[-30px] w-[90%]">
                        <div className="flex justify-between items-center">
                            <Star />
                            <div>
                                <Image src={eyeIcon}
                                    alt="img" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>




        </>
    )
}
