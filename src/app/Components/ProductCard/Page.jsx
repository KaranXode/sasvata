import Image from "next/image";
import React from "react";
import Star from "../Star/Page";
import eyeIcon from "../../Assets/Icons/eyeIcon.svg";
import WhatsAppShareButton from "../WhatsAppShare/Page";

export default function ProductCard(props) {
  return (
    <>
      <div className="h-[412px] w-full max-w-[312px] rounded-xl bg-white overflow-hidden">
        <div className="h-[280px] w-full max-w-[312px] overflow-hidden">
          <Image src={props.imageUrl} width={312} height={280} alt="img" className={props.cardImgStyle}/>
        </div>
        <div className="bg-white p-3 relative">
          <div className="md:h-[64px] p-2">
            <h4 className="text-[16px] md:text-2xl whitespace-nowrap overflow-hidden text-ellipsis font-bold mb-3 md:mb-5">{props.title}</h4>
          </div>
          <div className="absolute bottom-[-30px] w-[90%] p-2">
            <div className="flex justify-between items-center">
              {/* Conditionally render Star or WhatsApp button */}
              {props.showStar ? (
                <WhatsAppShareButton
                  title={props.title}
                  imageSrc={props.imageSrc}
                />
              ) : (
                <Star />
              )}
              <div>
                <Image src={eyeIcon} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
