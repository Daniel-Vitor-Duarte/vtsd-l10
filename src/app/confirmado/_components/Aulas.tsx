"use client";
import Image from "next/image";
import aula01 from "public/thumb01.webp";
import aula02 from "public/thumb02.webp";
import aula03 from "public/thumb03.webp";
import calendar from "public/date.svg";
import youtube from "public/youtube.svg";
import youtubeWhite from "public/youtube.svg";
import arrowUPr from "public/arrow-up-right.svg";
import arrowUPrW from "public/arrow-up-right-white.svg";
import bell from "public/bell.png";
import calendarGoogle from "public/GoogleCalendar.svg";
import { useState } from "react";
import { Saira_Condensed } from "next/font/google";


const SairaCondensed = Saira_Condensed({
  weight: ['700'],
  subsets: ["latin"]
});


interface Props {
  aqueciomento?: boolean;
}

const Aulas = ({ aqueciomento = false }: Props) => {
  const [openView, setOpenView] = useState(false);

  const handleViewMore = () => {
    setOpenView(!openView);
  };
  return (
    <main>
      <section className="flex lg:flex-row flex-col justify-between lg:items-start items-center lg:gap-0 gap-[1.5rem] lg:px-0 px-4 ">
        <div className="bg-[#fff] max-w-[23.5rem] flex flex-col  items-center pb-6 rounded-lg">
          <Image className="rounded-t-lg" src={aula01} alt="aula01" />
          <div className="lg:px-6 px-5 lg:mt-6 mt-5">
            <div className="bg-[#46ccee29] lg:w-16 w-12 lg:h-20 h-[3.75rem] text-[#0B112E] flex flex-col items-center justify-center gap-1">
              <p
                className={`${SairaCondensed.className} lg:text-[1.125rem] text-[0.84375rem] lg:leading-4 leading-3`}
              >
                AULA
              </p>
              <p className={`${SairaCondensed.className} lg:text-[3.01363rem] text-[2.26025rem] lg:leading-[2.67881rem] leading-[2.00906rem]`}>
                01
              </p>
            </div>

            <h1 className="lg:text-[1.75rem] text-[1.375rem] font-bold lg:leading-[2.25rem] leading-[1.75rem] mt-[0.75rem] text-[#0B112E] ">
              As oportunidades
              escondidas no Digital
            </h1>
            <div className="lg:mt-4 mt-3">
              <div className="flex gap-[0.5rem] items-center">
                <Image src={calendar} alt="calendar" loading="lazy" />
                <p className="text-[1.125rem] font-semibold text-[#0000008f]">
                  09/09 às 19h
                </p>
              </div>
              <div className="flex gap-[0.5rem] items-center mt-[0.13rem]">
                <Image src={youtube} alt="youtube" loading="lazy" />
                <p className="text-[1.125rem] font-semibold text-[#0000008f]">
                  Assista no Youtube
                </p>
              </div>
            </div>
            <ul className="mt-[1.75rem] list-square pl-4 text-[#0000008f] font-medium ">
              <li className="">
                Os tipos de produtos digitais que mais vendem em cada nicho, modelo de negócios digitais e dados que mostram o que as pessoas mais estão desejando comprar
              </li>
              <li className="mt-4">
                Quais profissões vão desaparecer ao longo dos próximos anos e como aproveitar isso
              </li>
              <li className="mt-4">
                Estudo com as tendências de produtos digitais para 2024 e 2025
              </li>
            </ul>
            {aqueciomento ? (
              <a
                href="http://vtsd.com.br/ativar-lembrete-aula-01"
                target="_blank"
              >
                <button className="mt-[1.75rem] flex items-center text-white font-bold btn-calendar w-full py-3 px-[1.25rem] justify-between bg-[#DC2946] rounded-lg">
                  <div className="flex items-center gap-[1rem]">
                    <Image src={calendarGoogle} alt="calendarGoogle" />
                    <p className="text-left lg:leading-[1.5rem] text-[1.125rem] leading-6">
                      Ativar o lembrete no <br /> Google Calendar
                    </p>
                  </div>
                  <Image src={arrowUPrW} alt="arrowUPr" />
                </button>
              </a>
            ) : (
              <a href="https://www.youtube.com/@VTSD" target="_blank">
                <button className="mt-[1.75rem] flex items-center text-white font-bold btn-calendar w-full py-[1rem] px-[1.5rem] justify-between ">
                  <div className="flex items-center gap-[1rem]">
                    <p className="text-left lg:leading-[1.75rem] lg:text-base text-[0.875rem]">
                      Inscreva-se no canal
                    </p>
                  </div>
                  <Image src={arrowUPr} alt="arrowUPr" />
                </button>
              </a>
            )}
          </div>
        </div>

        <div className="bg-[#fff] max-w-[23.5rem] flex flex-col items-center pb-6 rounded-lg">
          <Image className="rounded-t-lg" src={aula02} alt="aula02" />
          <div className="lg:px-6 px-5 lg:mt-6 mt-5">
            <div className="bg-[#46ccee29] lg:w-16 w-12 lg:h-20 h-[3.75rem] text-[#0B112E] flex flex-col items-center justify-center gap-1">
              <p
                className={`${SairaCondensed.className} lg:text-[1.125rem] text-[0.84375rem] lg:leading-4 leading-3`}
              >
                AULA
              </p>
              <p className={`${SairaCondensed.className} lg:text-[3.01363rem] text-[2.26025rem] lg:leading-[2.67881rem] leading-[2.00906rem]`}>
                02
              </p>
            </div>

            <h1 className="lg:text-[1.75rem] text-[1.375rem] font-bold lg:leading-[2.25rem] leading-[1.75rem] mt-[0.75rem] text-[#0B112E] lg:max-w-full max-w-[18rem]">
              Criando seu produto
              digital do ZERO
            </h1>
            <div className="lg:mt-4 mt-3">
              <div className="flex gap-[0.5rem] items-center">
                <Image src={calendar} alt="calendar" loading="lazy" />
                <p className="text-[1.125rem] font-semibold text-[#0000008f]">
                  11/09 às 19h
                </p>
              </div>
              <div className="flex gap-[0.5rem] items-center mt-[0.13rem]">
                <Image src={youtube} alt="youtube" loading="lazy" />
                <p className="text-[1.125rem] font-semibold text-[#0000008f]">
                  Assista no Youtube
                </p>
              </div>
            </div>
            <ul className="mt-[1.75rem] list-square pl-4 text-[#0000008f] font-medium ">
              <li className="">
                Como testar se o digital vale a pena antes de fazer um grande comprometimento: é a técnica da primeira venda com o menor esforço
              </li>
              <li className="mt-4">
                Crie um plano de ação: desde a escolha do seu nicho e criação do seu produto, até a estratégia para conseguir fazer sua primeira venda gastando pouquíssimo ou nenhum dinheiro
              </li>
              <li className="mt-4 list-none lg:-tracking-[.02rem]">
                É sair da aula, colocar em prática e vender
              </li>
            </ul>
            {aqueciomento ? (
              <a
                href="http://vtsd.com.br/ativar-lembrete-aula-01"
                target="_blank"
              >
                <button className="mt-[1.75rem] flex items-center text-white font-bold btn-calendar w-full py-3 px-[1.25rem] justify-between bg-[#DC2946] rounded-lg">
                  <div className="flex items-center gap-[1rem]">
                    <Image src={calendarGoogle} alt="calendarGoogle" />
                    <p className="text-left lg:leading-[1.5rem] text-[1.125rem] leading-6">
                      Ativar o lembrete no <br /> Google Calendar
                    </p>
                  </div>
                  <Image src={arrowUPrW} alt="arrowUPr" />
                </button>
              </a>
            ) : (
              <a href="https://www.youtube.com/@VTSD" target="_blank">
                <button className="mt-[1.75rem] flex items-center text-white font-bold btn-calendar w-full py-[1rem] px-[1.5rem] justify-between ">
                  <div className="flex items-center gap-[1rem]">
                    <p className="text-left lg:leading-[1.75rem] lg:text-base text-[0.875rem]">
                      Inscreva-se no canal
                    </p>
                  </div>
                  <Image src={arrowUPr} alt="arrowUPr" />
                </button>
              </a>
            )}
          </div>
        </div>

        <div className="bg-[#fff] max-w-[23.5rem] flex flex-col items-center pb-6 rounded-lg">
          <Image className="rounded-t-lg" src={aula03} alt="aula03" />
          <div className="lg:px-6 px-5 lg:mt-6 mt-5">
            <div className="bg-[#46ccee29] lg:w-16 w-12 lg:h-20 h-[3.75rem] text-[#0B112E] flex flex-col items-center justify-center gap-1">
              <p
                className={`${SairaCondensed.className} lg:text-[1.125rem] text-[0.84375rem] lg:leading-4 leading-3`}
              >
                AULA
              </p>
              <p className={`${SairaCondensed.className} lg:text-[3.01363rem] text-[2.26025rem] lg:leading-[2.67881rem] leading-[2.00906rem]`}>
                03
              </p>
            </div>

            <h1 className="lg:text-[1.75rem] text-[1.375rem] font-bold lg:leading-[2.25rem] leading-[1.75rem] mt-[0.75rem] text-[#0B112E] max-w-[14rem]">
            Eliminando
            obstáculos
            </h1>
            <div className="lg:mt-4 mt-3">
              <div className="flex gap-[0.5rem] items-center">
                <Image src={calendar} alt="calendar" loading="lazy" />
                <p className="text-[1.125rem] font-semibold text-[#0000008f]">
                13/09 às 19h
                </p>
              </div>
              <div className="flex gap-[0.5rem] items-center mt-[0.13rem]">
                <Image src={youtube} alt="youtube" loading="lazy" />
                <p className="text-[1.125rem] font-semibold text-[#0000008f]">
                  Assista no Youtube
                </p>
              </div>
            </div>
            <ul className="mt-[1.75rem] list-square pl-4 text-[#0000008f] font-medium ">
              <li className="">
              Os erros mais comuns que a maioria 
              das pessoas comentem e que as fazem perder tempo e dinheiro
              </li>
              <li className="mt-4">
              Modelos validados de anúncios, páginas de vendas e estratégias que mais trazem resultado em cada nicho
              </li>
              <li className="mt-4 list-none text-[0.875rem] text-[#0000005c]">
              Ao final de cada aula, eu vou te encontrar num zoom pra poder conversar e tirar dúvidas.
              </li>
            </ul>
            {aqueciomento ? (
              <a
                href="http://vtsd.com.br/ativar-lembrete-aula-01"
                target="_blank"
              >
                <button className="mt-[1.75rem] flex items-center text-white font-bold btn-calendar w-full py-3 px-[1.25rem] justify-between bg-[#DC2946] rounded-lg">
                  <div className="flex items-center gap-[1rem]">
                    <Image src={calendarGoogle} alt="calendarGoogle" />
                    <p className="text-left lg:leading-[1.5rem] text-[1.125rem] leading-6">
                      Ativar o lembrete no <br /> Google Calendar
                    </p>
                  </div>
                  <Image src={arrowUPrW} alt="arrowUPr" />
                </button>
              </a>
            ) : (
              <a href="https://www.youtube.com/@VTSD" target="_blank">
                <button className="mt-[1.75rem] flex items-center text-white font-bold btn-calendar w-full py-[1rem] px-[1.5rem] justify-between ">
                  <div className="flex items-center gap-[1rem]">
                    <p className="text-left lg:leading-[1.75rem] lg:text-base text-[0.875rem]">
                      Inscreva-se no canal
                    </p>
                  </div>
                  <Image src={arrowUPr} alt="arrowUPr" />
                </button>
              </a>
            )}
          </div>
        </div>

      </section>
    </main>
  );
};

export default Aulas;
