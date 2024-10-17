import Image from 'next/image'
import React from 'react'

export default function TwoCard(props) {
    return (
        <div className={`flex gap-6 h-[600px] m-2 sm:m-10 ${props.className} twoCard-col `}>
            <div className="w-[360px] h-[360px] md:w-full md:h-full md:flex-[30%]  overflow-hidden  rounded-xl">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
               <div>
               <Image src={props.smImgurl} alt={props.alt}  className="w-full h-full object-cover rounded-xl "/>
               </div>
            </div>
            <div className="w-[360px] h-[360px] md:w-full md:h-full md:flex-[70%]  overflow-hidden  rounded-xl">
                <Image src={props.lgImgurl} alt={props.alt} className="w-full h-full object-cover rounded-xl"/>
            </div>
        </div>
    )
}
