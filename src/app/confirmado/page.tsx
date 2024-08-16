"use client";
import Image from "next/image";
import logo from "/public/images/logo.svg";
import formIcon from "public/folder.svg";
import arrowUPr from "public/arrow-up-right.svg";
import arrowD from "public/arrow-down.svg";
import Aulas from "./_components/Aulas";
import Footer from "../components/Footer";
import { useEffect, useRef } from "react";
import Dialog from "./_components/Dialog";
import TopoConf from "../components/TopoConf";
import DataLayer from "../DataLayer";
import { Saira_Condensed } from "next/font/google";


const SairaCondensed = Saira_Condensed({
  weight: ['800'],
  subsets: ["latin"]
});

export default function Confirmado() {
  const refDialog = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    refDialog.current?.showModal();
    document.body.style.overflowY = "hidden";
  };

  const closeModal = () => {
    document.body.style.overflowY = "auto";
    if (refDialog.current) {
      refDialog.current.classList.add("hide");
      refDialog.current.addEventListener(
        "webkitAnimationEnd",
        function animationEnd() {
          refDialog.current?.classList.remove("hide");
          refDialog.current?.close();
          refDialog.current?.removeEventListener(
            "webkitAnimationEnd",
            animationEnd,
            false
          );
        }
      );
    }
  };

  useEffect(() => {
    refDialog.current?.addEventListener("click", function (event) {
      var rect = refDialog.current?.getBoundingClientRect();
      if (rect) {
        if (
          rect.left > event.clientX ||
          rect.right < event.clientX ||
          rect.top > event.clientY ||
          rect.bottom < event.clientY
        ) {
          closeModal();
        }
      }
    });
  }, []);
  return (
    <main className="overflow-hidden">
      <DataLayer
        type_page="confirmado"
        type_content="pico"
        id_produto="1006882"
        operacao="pico"
        versao_pico="L10"
      />
      <TopoConf />
      <section className=" mx-auto overflow-x-hidden bg-gradient">
        <section className="bg-[#0B112E] lg:py-[6.5rem] py-12">
          <div className="max-w-[79.5rem]  mx-auto flex flex-col w-full items-center text-center">
            <h1
              className=
              {`${SairaCondensed.className} uppercase lg:text-[5.5rem] text-[2rem] -tracking-[0.02rem] lg:leading-normal  leading-[2.75rem] text-[white] lg:-tracking-[0.055rem]`}

            >
              inscrição <br className="lg:hidden" />{" "}
              <span className="text-[#46CCEE] lg:text-[5.5rem] text-[3.25rem]  lg:-tracking-[0.055rem] -tracking-[0.0325rem] ">confirmada!</span>
            </h1>
            <Image className="lg:w-auto w-[1.79375rem] lg:mt-0 mt-2" src={arrowD} alt="seta" />
            <p className={`${SairaCondensed.className} text-[#FFD52F] lg:text-[2.375rem] text-[1.625rem] lg:leading-9 leading-7  lg:mt-8 mt-4 uppercase lg:max-w-full `}>
              Você pode ganhar um presente:
            </p>
            <p className="text-[#E0E0E0] lg:mt-6 mt-4 lg:text-[1.375rem] font-medium lg:max-w-[32.4375rem] max-w-[22.375rem] lg:leading-8 leading-[1.5625rem]">
              Um relatório {" "} <span className="text-[#FFD52F] font-bold">completo</span> {" "} com os tipos de produtos digitais que estão <br className="lg:hidden" /> dando muito dinheiro.
            </p>
            <p className="text-[#E0E0E0] lg:mt-[2rem] mt-[1.12rem] lg:max-w-full max-w-[19.375rem]">
              Para desbloquear o presente, responda a pesquisa abaixo:
            </p>
            <button
              onClick={openModal}
              className="flex items-center justify-between lg:gap-6 gap-2 rounded-[0.5rem] bg-[#FFD52F] px-5 py-3 lg:text-[1.125rem] text-[#0B112E] font-bold lg:mt-4 mt-6 text-[1rem] leading-7"
            >
              <div className="flex items-center lg:gap-[.62rem] gap-2">
                <Image src={formIcon} alt="formIcon" />
                <p>Responder pesquisa</p>
              </div>
              <Image src={arrowUPr} alt="arrowUPr" />
            </button>
            {/* </a> */}
          </div>
        </section>
        <section className="max-w-[79.5rem] mx-auto lg:pb-[6.5rem] pb-12">
          <div className="flex lg:justify-start lg:mt-[5.25rem] mt-12">
            <h1 className={`${SairaCondensed.className} text-[#0B112E] lg:text-left text-center lg:text-[3rem] text-[1.875rem] relative lg:leading-[3.75rem] leading-[2.25rem] lg:-tracking-[0.03rem] uppercase`}>
              Importante: <br /> cadastre o compromisso
              no seu Google Agenda
            </h1>
          </div>
          <div className="lg:mt-[3.75rem] mt-8 ">
            <Aulas aqueciomento />
          </div>
        </section>
      </section>

      <Footer gray />

      <Dialog
        className="h-[40rem] top-auto dialogMob"
        ref={refDialog}
        transitions="bottom-to-top"
      >
        <iframe
          className="w-full h-full"
          src="http://vtsd.com.br/responder-pesquisa-lp-curso"
        ></iframe>
      </Dialog>
    </main>
  );
}
