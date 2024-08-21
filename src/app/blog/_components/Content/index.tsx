"use client";
import React, { useEffect, useMemo, useState } from "react";
import Thumb1 from "public/blog/thumb1.webp";
import Thumb2 from "public/blog/thumb2.webp";
import Thumb3 from "public/blog/thumb3.webp";
import ThumbBlock from "public/thumb-block.webp";
import CardAulas from "../CardAulas";

import iconlook from "public/lock.svg";
import icondownload from "public/download.svg";
import Image from "next/image";
import zap from "/public/whatsappBtn.svg";
import arrowRight from "public/arrow-right.svg";
import Comments from "../Comments";
import Footer from "@/app/components/Footer";
import isBlockImage from "public/isBlock.svg";
import CountDown from "../CountDown";
import { Saira_Condensed } from "next/font/google";


const SairaCondensed = Saira_Condensed({
    weight: ['800'],
    subsets: ["latin"]
});

interface Props {
  activeAula: number;
}
function Content({ activeAula }: Props) {
  const [isClient, setIsClient] = useState(false);
  const date = new Date();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const checkIfTheClassIsFree = (hour: number, day: number) => {
    if (date.getDay() === day) {
      if (date.getHours() >= hour) {
        return true;
      }
    } else if (date.getDay() > day) {
      return true;
    }
    return false;
  };

  const aulas = useMemo(
    () => [
      {
        name: "AULA 01",
        title: "As oportunidades escondidas...",
        date: "09/09 às 19h",
        srcImage: Thumb1,
        embedYoutube: "3_yRACSyy04",
        dia: 9,
        isBlock: false,
        linkMaterial: "https://vendatodosantodia.com.br/material-lc-aula1.pdf",
        linkRedirect: "cpl01",
      },
      {
        name: "AULA 02",
        title: "Criando seu produto digital...",
        date: "11/09 às 19h",
        srcImage: Thumb2,
        embedYoutube: "qywFoUMn_4U",
        dia: 11,
        isBlock: false,
        linkMaterial: "https://vendatodosantodia.com.br/material-lc-aula2.pdf",
        linkRedirect: "cpl02",
      },
      {
        name: "AULA 03",
        title: "Eliminando obstáculos",
        date: "13/09 às 19h",
        srcImage: Thumb3,
        embedYoutube: "F1jfSJViHh8",
        dia: 13,
        isBlock: false,
        linkMaterial: "https://vendatodosantodia.com.br/material-lc-aula3.pdf",
        linkRedirect: "cpl03",
      },
    ],
    []
  );

  useEffect(() => {
    if (activeAula === 0) {
      return;
    }
    if (aulas[activeAula].isBlock) {
      window.location.href = "/cursodigital/vtsd/l10/blog";
    }
  }, [activeAula, aulas]);

  if (!isClient) {
    return null;
  }

  return (
    <div className=" bg-[#0B112E]">
      <div className="bg-[#FFD52F] relative">
        <div className="py-[1.25rem] lg:text-[1.125rem] text-[0.875rem] font-extrabold text-[#2A2A2A] uppercase">
          <p className="text-center ">
            curso gratuito: como entrar no digital + <br className="lg:hidden" />{" "}
            CERTIFICADO de participação ao final do curso
          </p>
        </div>
      </div>
      <div className="max-w-[76rem] w-full mx-auto flex lg:flex-row flex-col items-start lg:mt-[4rem] ">
        <div>
          {aulas[activeAula].isBlock ? (
            <div className="lg:w-[48rem] lg:h-[27rem] relative flex justify-center items-center">
              <Image
                src={ThumbBlock}
                alt="ThumbBlock"
                className="filter grayscale blur-sm"
                draggable={false}
              />
              <Image
                src={isBlockImage}
                draggable={false}
                className="absolute z-10 w-[3rem]"
                alt="isBlock"
              />
            </div>
          ) : (
            <iframe
              className="lg:w-[48rem] lg:h-[27rem] w-full h-[13.71094rem] border-[3px] border-r-0 border-[rgba(255,255,255,0.32)] rounded-l-2xl"
              src={`https://www.youtube.com/embed/${aulas[activeAula].embedYoutube}?si=0_JV0knKhx3Be4GO`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          <div className="lg:mt-[3rem] mt-[2rem] lg:px-0 px-4">
            <p className="text-[0.625rem] text-[#FEE296]">
              {aulas[activeAula].name}
            </p>
            <p className="text-[#FEE296] mt-[0.5rem] lg:text-[1.125rem] text-[1rem] font-semibold flex gap-[0.5rem] lg:items-center">
              <span className="flex gap-[0.5rem] items-center">
                {" "}
                Liberada{" "}
                {aulas[activeAula].dia !== 12 ? (
                  <></>
                ) : (
                  <div className="flex gap-[0.5rem] items-center">
                    {aulas[activeAula].date}{" "}
                    <Image src={iconlook} alt="iconlook" />
                  </div>
                )}
              </span>
            </p>
            <p className="text-[#fff] mt-[1.6rem] lg:text-[2rem] text-[1.5rem] font-bold">
              <span> {aulas[activeAula].title}</span>
            </p>
            <p className="text-[#E0E0E0] mt-[1.5rem] font-medium flex gap-[0.5rem] items-center lg:text-base text-[0.875rem]">
              Entre no grupo de whatsapp e receba todas as informações do evento
            </p>
            <div className="flex lg:flex-row flex-col mt-[1.5rem] gap-[2rem]">
              <div className="lg:max-w-[23.375rem] w-full">
                <a
                  href="https://joinz.app/curso-copy"
                  target="_blank"
                  className=" w-full lg:mx-0 mx-auto mt-[2rem]"
                >
                  <button className="flex bg-[#25D366] shadow-[0px_16px_40px_-16px_rgba(0,155,75,0.56)] w-full h-[3.5rem] rounded-[0.5rem] justify-between items-center gap-3 text-white font-semibold lg:mt-auto mx-auto px-[1rem]">
                    <div className="flex gap-[1rem] items-center">
                      <Image src={zap} alt="zap" />
                      <p className="text-left lg:text-base text-[0.875rem]">
                        Entrar no grupo do Whatsapp
                      </p>
                    </div>
                    <Image src={arrowRight} alt="arrowRight" />
                  </button>
                </a>
              </div>
              {!aulas[activeAula].isBlock && (
                <>
                  <div className="max-w-[23.375rem]">
                    <a
                      href={aulas[activeAula].linkMaterial}
                      target="_blank"
                      className=" w-full lg:mx-0 mx-auto mt-[2rem]"
                    >
                      <button className="flex bg-[#2A2A2A]  w-full h-[3.5rem] rounded-[0.5rem] justify-between items-center gap-3 text-white font-semibold lg:mt-auto mx-auto px-[1rem]">
                        <div className="flex gap-[1rem] items-center">
                          <p className="text-left lg:text-base text-[0.875rem]">
                            Baixar o material usado nessa aula
                          </p>
                        </div>
                        <Image src={icondownload} alt="icondownload" />
                      </button>
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="lg:px-0 px-4 w-full ">
          <div className="lg:p-[2rem] pb-[2.25rem] p-[1.5rem] bg-cronograma w-full lg:rounded-none lg:rounded-r-[1rem] rounded-[1rem] lg:h-[27rem] lg:mt-0 mt-[2rem]">
            <h1 className={`${SairaCondensed.className} text-center lg:text-[2rem] text-[1.25rem] font-bold text-[#0B112E] uppercase`}>
              Cronograma de aulas
            </h1>
            <div className="mt-[1.25rem] flex flex-col gap-[1.16rem]">
              {aulas.map((aula, index) => (
                <CardAulas
                  key={index}
                  name={aula.name}
                  title={aula.title}
                  date={aula.date}
                  isBlock={aula.isBlock}
                  srcImage={aula.srcImage}
                  linkRedirect={aula.linkRedirect}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[76rem] w-full mx-auto lg:px-0 px-4">
        <div className="h-[2px] w-full lg:mt-[5rem] mt-[2.5rem] bg-[#2A2A2A]"></div>
        <h1 className="lg:mt-[4.5rem] mt-[2.5rem] lg:text-[2rem] text-[1.75rem] font-bold text-center text-[#fff]">
          <span className="text-[#FEE296] lg:inline-block hidden">・</span>
          Deixe aqui o principal insight que você teve durante a aula
          <span className="text-[#FEE296] lg:inline-block hidden">・</span>
        </h1>

        <div className="max-w-[50rem] mx-auto bg-[#d8d7d7] rounded-lg lg:px-0">
          <Comments />
        </div>
      </div>
      <div className="mt-[4rem]">
        <Footer blue />
      </div>

      {/* <div className="items-center justify-center fixed right-0 lg:bottom-10 bottom-0 flex bg-top-conf px-[1.5rem] py-[1rem] lg:rounded-l-[1rem] gap-[1.44rem] lg:w-[24.25rem] w-full z-50">
        <p className="text-[0.75rem] font-bold">
          AULA 02 <br /> LIBERADA EM:
        </p>
        <div>
          <CountDown />
        </div>
      </div> */}
    </div>
  );
}

export default Content;
