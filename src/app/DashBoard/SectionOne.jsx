import Image from 'next/image'
import React from 'react'
import truckImg from '../Assets/Images/truck.jpg'

export default function SectionOne() {
    return (
        <div className="flex justify-center p-6 h-full w-full ">
            <div className="">
            <Image src={truckImg} alt="img" className="" />
            </div>
            <div className="flex-[60%] pl-8">
                <h3 className="text-[33px] font-semibold">What We Do:</h3>
                <p className="text-[18px] my-6"><strong>SELECTION & CLEANING :</strong> The initial phase involves choosing fresh, high-quality fruits and vegetables. These items
                    are then meticulously washed to eliminate any dirt, pesticides, or other impurities.</p>
                <p className="text-[18px] my-6"><strong>PEELING & CUTTING :</strong>  Depending on the specific fruit or vegetable, peeling and cutting into uniform pieces may be
                    necessary to facilitate even drying. In some cases, peeling may be omitted.</p>
                <p  className="text-[18px] my-6">
                    <strong>DEHYDRATION:</strong> The prepared pieces are subsequently dried using various dehydration techniques. Common methods include:
                </p>



                <p  className="text-[18px] my-6">
                    <strong>Air Drying:</strong> This prevalent method involves exposing the produce to hot air in a controlled setting, which can be accomplished in specialized dehydrators or drying rooms.
                </p>

                <p  className="text-[18px] my-6">
                    <strong>Grinding:</strong> After dehydration, the dried produce is ground into a fine powder, with particle size varying based on the intended application.
                </p>

                <p  className="text-[18px] my-6">
                    <strong>Sieving and Packaging:</strong> The powder is then sieved to ensure consistent texture before being packaged. Proper packaging is essential to prevent moisture ingress and to maintain the quality of the powder.
                </p>

                <p  className="text-[18px] my-6">
                    <strong>Storage:</strong> The final powder is stored in a cool, dry environment to preserve its quality until it is ready for use.
                </p>

                <blockquote className="text-2xl text-center">
                    “OUR MISSION IS THE DRIVING FORCE BEHIND OUR PASSION FOR OUR WORK.”
                </blockquote>


            </div>
        </div>
    )
}
