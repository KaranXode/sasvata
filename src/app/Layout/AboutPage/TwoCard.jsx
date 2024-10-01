import Image from 'next/image'
import React from 'react'

export default function TwoCard(props) {
    return (
        <div className={`flex gap-6 h-[600px] m-10 ${props.className} `}>
            <div className="flex-[30%] bg-[#C4C4C4]  rounded-xl">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
               <div>
               <Image src={props.smImgurl} alt={props.alt}  className="w-full h-full object-cover rounded-xl aspect-[11_/_19]"/>
               </div>
            </div>
            <div className="flex-[70%] bg-[#C4C4C4]  rounded-xl">
                <Image src={props.lgImgurl} alt={props.alt} className="w-full h-full object-cover rounded-xl"/>
            </div>
        </div>
    )
}
