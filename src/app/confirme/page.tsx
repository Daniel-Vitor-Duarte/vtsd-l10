/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";

import zap from "public/whatsappBtn.svg";
import arrowRight from "public/arrow-right-white.svg";
import gmail from "public/gmail.svg";
import outlook from "public/ms_outlook.svg";
import mailIos from "public/mail-ios.svg";

import Footer from "../components/Footer";
import { useEffect } from "react";
import TopoConf from "../components/TopoConf";
import DataLayer from "../DataLayer";
import { Saira_Condensed } from "next/font/google";


const SairaCondensed = Saira_Condensed({
    weight: ['800'],
    subsets: ["latin"]
});

export default function Confirme() {
  

  return (
    <main className="overflow-x-hidden bg-[#0b112e]">
      <DataLayer
        type_page="confirme"
        type_content="pico"
        id_produto="2438760"
        operacao="pico"
        versao_pico="l2"
      />
      <TopoConf />
      <section className="max-w-[79.5rem] mx-auto">
        <section className="mx-auto flex flex-col lg:mt-24 mt-[2rem] w-full items-center text-center">
          <p className={`${SairaCondensed.className} text-[#46CCEE] lg:text-[2.375rem] text-[2rem] uppercase`}>Inscrição</p>
          <div className="flex items-center  font-bold gap-[1rem]">
            <h1
              className={
                `${SairaCondensed.className} uppercase lg:text-[5.5rem] text-[3.25rem] -tracking-[.16rem] lg:leading-normal leading-[2.75rem] text-[#fff] font-bold lg:-tracking-[0.055rem]`
              }
            >
              80% concluída!
            </h1>
            
          </div>
          <div className="mt-[1.5rem] max-w-[36.75rem] w-full mx-auto  shadow-[0px_4px_48px_0px_rgba(0,189,167,0.08)] lg:px-0 px-4">
            <div className="border-[2px] border-[#ffffff1f] rounded-full">
              <div className=" p-[0.38rem] bg-[#0B112E] rounded-full">
                <div className="w-full relative bg-[#ffffff1f] rounded-full">
                  <div className=" progress-bar rounded-full">
                    <p className="text-end px-[0.75rem] py-[0.25rem] text-[#0B112E] font-bold">
                      80%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-[#FFF] font-semibold lg:text-[1.75rem] text-[1.25rem] lg:mt-4 mt-3 ">
            Você está quase lá!
          </h2>
        </section>
        <section className="w-full flex flex-col items-center lg:mt-16 mt-10 lg:px-0 px-6 ">
          <div className="max-w-[35.5rem] shadow-[0px_4px_48px_0px_rgba(0,189,167,0.12)] w-full py-[1.5rem] lg:py-[1.75rem] px-[1.5rem] lg:px-[2rem] bg-[#fff] rounded-[0.5rem] flex flex-col between lg:items-center">
            <div className="flex flex-col justify-center lg:mt-auto ">
              <h1 className="lg:text-[1rem] text-[0.84375rem] text-[#0b112e3d] font-extrabold uppercase">
                passo 1
              </h1>
              <h2 className="text-[#0B112E] lg:text-[1.75rem] text-[1.25rem] lg:mt-3 mt-2 font-bold">
                WhatsApp
              </h2>
              <p className=" mt-[0.5rem] lg:text-base lg:font-medium font-bold text-[#656565] ">
                Entre no grupo de WhatsApp para receber os materiais de apoio e
                informações das aulas.
              </p>
            </div>
            <a
              href="https://joinz.app/curso-copy"
              target="_blank"
              className="w-full lg:mx-0 mx-auto mt-[2rem]"
            >
              <button className="lg:text-[1.125rem] flex bg-[#25D366] shadow-[0px_16px_40px_-16px_rgba(0,155,75,0.56)] w-full h-[3.5rem] rounded-[0.5rem] justify-between items-center gap-3 text-white font-semibold lg:mt-auto mx-auto px-[1rem]">
                <div className="flex gap-[1rem] items-center">
                  <Image src={zap} alt="zap" />{" "}
                  <span className="lg:hidden">Entrar no grupo</span>
                  <span className="lg:block hidden">
                  Reservar meu lugar e baixar o relatório
                  </span>
                </div>
                <Image src={arrowRight} alt="arrowRight" />
              </button>
            </a>
          </div>
          <div className="max-w-[35.5rem] w-full py-[1.25rem] lg:py-[1.75rem] px-[1.5rem] lg:px-[2rem] bg-[#ffffff1f] rounded-[0.5rem] lg:mt-8 mt-6 flex ">
            <div className="flex flex-col lg:items-center lg:mx-0 mx-auto lg:w-full">
              <div className=" flex flex-col justify-center lg:mt-auto ">
                <h1 className="lg:text-[1rem] text-[0.84375rem] text-[#ffffff3d] font-extrabold uppercase">
                  passo 2
                </h1>
                <h2 className=" text-[#fff] lg:text-[1.75rem] text-[1.25rem] lg:mt-3 mt-2 font-bold">
                  Acesse seu e-mail
                </h2>
                <p className="text-[#E0E0E0]  mt-[0.5rem] lg:text-base font-semibold ">
                Abra a caixa de entrada e procure um e-mail com o título {" "}
                  <strong>
                  &quot;Confirme sua participação no Curso gratuito Como Entrar no Digital&quot;
                  </strong>
                </p>
              </div>
              <div className="w-full mt-[2rem]">
                <div className="flex items-center justify-start w-full lg:gap-[2rem] gap-8">
                  <div className="lg:w-10 w-9">
                    <Image src={gmail} alt="gmail" />
                  </div>
                  <div className="lg:w-10 w-8">
                    <Image src={outlook} alt="outlook" />
                  </div>
                  <div className="lg:w-10 w-8">
                    <Image src={mailIos} alt="mailIos" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[35.5rem] py-[1.25rem] lg:py-[1.75rem] px-[1.5rem] lg:px-[2rem] bg-[#ffffff1f] rounded-[0.5rem] flex lg:flex-row flex-col lg:justify-between lg:mt-8 mt-6 ">
            <div className="flex flex-col justify-center lg:mt-auto lg:mx-0 mx-auto">
              <h1 className="lg:text-[1rem] text-[0.84375rem] text-[#ffffff3d] font-extrabold uppercase">
                passo 3
              </h1>
              <h2 className="text-[#fff] lg:text-[1.75rem] text-[1.25rem] lg:mt-3 mt-2 font-semibold">
                Clique no link
              </h2>
              <p className="  mt-[0.5rem] lg:text-base font-medium text-[#E0E0E0] ">
                Abra o e-mail e clique no link para confirmar sua presença.
              </p>
            </div>
          </div>
          <div className="w-full max-w-[35.5rem] py-[1.25rem] lg:py-[1.75rem] px-[1.5rem] lg:px-[2rem] bg-[#ffffff1f] rounded-[0.5rem] flex lg:flex-row flex-col lg:justify-between  lg:mt-8 mt-6">
            <div className="flex flex-col justify-center lg:mt-auto lg:mx-0 mx-auto">
              <h1 className="lg:text-[1rem] text-[0.84375rem] text-[#ffffff3d] font-extrabold uppercase">
                passo 4
              </h1>
              <h2 className="text-[#fff] lg:text-[1.75rem] text-[1.25rem] lg:mt-3 mt-2 font-semibold">
                Inscrição confirmada!
              </h2>
              <p className=" mt-[0.5rem] lg:text-base font-medium text-[#E0E0E0]  ">
                Pronto! Neste instante você será redirecionado para  a
                página de confirmado e a sua inscrição estará garantida
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className="lg:mt-24 mt-14">
        <Footer />
      </section>
    </main>
  );
}
