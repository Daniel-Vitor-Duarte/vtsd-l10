"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Pic from 'public/youtube-top.webp';
import PicM from 'public/youtube-top-mob.webp';
import Play from 'public/play-top.webp';
import PlayM from 'public/play-top-mob.webp';

function YouTubeEmbed() {
  const [showFrame, setShowFrame] = useState(false);
 
  // const [isClient, setIsClient] = useState(false);
  //   useEffect(() => {
  //       setIsClient(true);
  //   }, []);

  //   if (!isClient) {
  //       return (
  //           <div className="flex h-screen w-full justify-center items-center">
  //               <svg
  //                   className="w-8 h-8 text-gray-300 animate-spin"
  //                   viewBox="0 0 64 64"
  //                   fill="none"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   width="24"
  //                   height="24"
  //               >
  //                   <path
  //                       d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
  //                       stroke="currentColor"
  //                       strokeWidth="5"
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                   ></path>
  //                   <path
  //                       d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
  //                       stroke="currentColor"
  //                       strokeWidth="5"
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                       className="text-gray-900"
  //                   ></path>
  //               </svg>
  //           </div>
  //       );
  //   }

  return (
    <>
      <Head>
        {/* Preload the images */}
        <link rel="preload" href="/youtube-top.webp" as="image" />
        <link rel="preload" href="/youtube-top-mob.webp" as="image" />
      </Head>
      <div
        className="relative lg:w-[85%] lg:max-w-[76rem] max-w-full  mx-auto mt-[2.5rem]  group cursor-pointer lg:border-[3px] border-[rgba(255,255,255,0.32)] rounded-2xl"
        onClick={() => {
          setShowFrame(true);
        }}
      >
        {showFrame ? (
          <iframe
            width="100%"
            height="192.34"
            className="lg:h-[687.39px] mm:h-[560px] lg:rounded-2xl rounded-lg"
            src={`https://www.youtube.com/embed/EdrQPJZ77vY?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <div className="lg:block hidden  ">
              <Image className='rounded-2xl' src={Pic} alt="Play Button" quality={50} priority />
            </div>
            <div className="block lg:hidden">
              <Image className='w-full' src={PicM} alt="Play Button" quality={50} priority />
            </div>
            <div className="absolute flex justify-center items-center w-full top-[40%] group-hover:scale-110">
              <div className="lg:block hidden">
                <Image src={Play} alt="Play Button" quality={50} priority />
              </div>
              <div className="block lg:hidden">
                <Image src={PlayM} alt="Play Button" quality={50} priority />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default YouTubeEmbed;
