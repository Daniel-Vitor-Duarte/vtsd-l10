"use client";
import Image from "next/image";
import React from "react";
// import calendar from "public/icons/date.svg";
import play from "public/play.svg";
import isBlockImage from "public/isBlock.svg";

interface Props {
  name: string;
  title: string;
  date: string;
  srcImage: any;
  isBlock: boolean;
  linkRedirect: string;
}

function CardAulas({
  name,
  title,
  date,
  srcImage,
  isBlock,
  linkRedirect,
}: Props) {
  const handleClickCardCpl = () => {
    if (isBlock) {
      return;
    }
    window.location.href = `/cursodecopy/lc/l2/blog/${linkRedirect}`;
    console.log("link->", linkRedirect);
  };

  return (
    <div
      className={`w-full flex gap-[0.25rem] ${!isBlock && " cursor-pointer"}`}
      onClick={() => handleClickCardCpl()}
    >
      <div className="relative  lg:w-[11rem] w-[7.5rem] flex justify-center items-center ">
        {isBlock ? (
          <Image
            src={isBlockImage}
            draggable={false}
            className="absolute z-10"
            alt="isBlock"
          />
        ) : (
          <Image
            src={play}
            draggable={false}
            className="absolute z-10"
            alt="play"
          />
        )}
        <Image
          src={srcImage}
          draggable={false}
          alt="imagem blog"
          className={`rounded-l-[0.5rem] h-full absolute ${
            isBlock ? "filter grayscale blur-[2px]" : ""
          }`}
        />
      </div>
      <div className="w-full bg-[#fff] rounded-r-[0.5rem] lg:px-4 px-[0.5rem] py-[1rem]">
        <p className="text-[0.625rem] text-[rgba(0,0,0,0.56)]">{name}</p>
        <p className="lg:text-[0.875rem] text-[0.70rem] text-[#0B112E] font-bold lg:leading-[1.5rem] lg:mt-0 mt-1">
          {title}
        </p>
        <p className="text-[0.75rem] text-[rgba(0,0,0,0.56)] font-bold flex items-center lg:mt-[0.5rem] mt-[0.2rem] gap-[0.5rem]">
          {/* <Image src={calendar} alt="calendar" className="w-[0.75rem]" /> */}
          {date}
        </p>
      </div>
    </div>
  );
}

export default CardAulas;
