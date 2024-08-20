import { Saira_Condensed } from "next/font/google";
import Image from "next/image";
import YouTubeEmbed from "../components/YouTubeEmbed";
import Folder from "public/folder.svg"
import FolderW from "public/folder-white.svg"
import Download from "public/download.svg"
import DownloadW from "public/download-white.svg"
import Footer from "../components/Footer";
import DataLayer from "../DataLayer";
import calendar from "public/GoogleCalendar.svg";
import arrowUPrW from "public/arrow-up-right-white.svg";

const SairaCondensed = Saira_Condensed({
    weight: ['800'],
    subsets: ["latin"]
});


function Cpl0() {
    return (
        // h-screen flex flex-col justify-between
        <main className="bg-gradient-cpl0">
            <DataLayer
                type_page="cpl"
                type_content="pico"
                id_produto="1006882"
                operacao="pico"
                versao_pico="L10"
            />
            <section>
                <section className='bg-[#0B112E] lg:pt-[4rem] pt-12 lg:pb-[28.19rem]'>
                    <h1 className={`${SairaCondensed.className} lg:block hidden text-[3rem] leading-[3.25rem] -tracking-[0.03rem] uppercase text-white text-center max-w-[46rem] mx-auto`}>
                        Assista o vídeo para entender através
                        de exercícios práticos  {" "} <br />
                        <span className="text-[#46CCEE]">  como poupar tempo e dinheiro:</span>
                    </h1>
                    <h1 className={`${SairaCondensed.className} lg:hidden text-[1.875rem] leading-8 uppercase text-white text-center max-w-[22.375rem] mx-auto`}>
                        Assista o vídeo para entender através
                        de exercícios práticos como {" "} <br />
                        <span className="text-[#46CCEE]"> poupar tempo e dinheiro:</span>
                    </h1>
                    <div className="lg:absolute lg:mt-0 top-[27%] w-full">
                        <YouTubeEmbed />
                    </div>
                </section>
                <section className="flex lg:flex-row flex-col items-start lg:justify-around lg:gap-0 gap-8 lg:mt-[23.56rem] xlg:mt-[26.5rem] mt-8 lg:max-w-[76rem] max-w-[22.4rem] mx-auto relative">
                    <div className="lg:w-[69%] w-[70%] h-[0.1875rem] absolute bg-[rgba(11,17,46,0.08)] lg:top-[.35rem] top-2 lg:rotate-0 rotate-90 origin-top-left lg:left-auto left-2"></div>
                    <div className="flex flex-col lg:items-center lg:gap-6 gap-5 relative">
                        <div className="flex lg:flex-col items-center gap-6">
                            <div className="w-[0.9375rem] h-[0.9375rem] rounded-full bg-[#FFD52F] border-2 border-white"></div>
                            <p className="text-[#9598A4] font-bold">
                                PASSO 01
                            </p>
                        </div>
                        <a href="https://vendatodosantodia.com.br/raiox-digital-pico.pdf" target="_blank">
                            <button
                                className={
                                    "shadow-[0px_16px_40px_-16px_rgba(249,199,0,0.36)] rounded-lg flex items-center justify-center lg:gap-6 gap-[.5rem] w-fit bg-[#FFD52F]  lg:py-4 py-[.6rem] lg:px-5 px-3 text-[#0B112E] font-bold lg:text-[1.125rem] leading-[1.75rem] mx-auto lg:ml-0 ml-[2.4rem]"
                                }
                            >
                                <div className="flex gap-[.62rem]">
                                    <Image className="lg:w-auto w-[1rem]" src={Folder} alt="pasta" />
                                    <p>Baixe seu relatório</p>
                                </div>
                                <Image className="lg:w-auto w-5" src={Download} alt="" />
                            </button>
                        </a>
                    </div>

                    <div className="flex flex-col lg:items-center lg:gap-6 gap-5 relative">
                        <div className="flex lg:flex-col items-center gap-6">
                            <div className="w-[0.9375rem] h-[0.9375rem] rounded-full bg-[#0B112E] border-2 border-white"></div>
                            <p className="text-[#9598A4] font-bold">
                                PASSO 02
                            </p>
                        </div>
                        <a href="https://vendatodosantodia.com.br/livroresultados.pdf" target="_blank">
                            <button
                                className={
                                    "shadow-[0px_16px_40px_-16px_rgba(11,17,46,0.60)] rounded-lg flex items-center justify-center lg:gap-6 gap-[.5rem] w-fit bg-[#0B112E]  lg:py-4 py-[.6rem] lg:px-5 px-3 text-white font-bold lg:text-[1.125rem] leading-[1.75rem] mx-auto lg:ml-0 ml-[2.4rem]"
                                }
                            >
                                <div className="flex gap-[.62rem]">
                                    <Image className="lg:w-auto w-[1rem]" src={FolderW} alt="pasta" />
                                    <p>Baixe o livro de resultados</p>
                                </div>
                                <Image className="lg:w-auto w-5" src={DownloadW} alt="" />
                            </button>
                        </a>
                    </div>

                    <div className="flex flex-col lg:items-center lg:gap-6 gap-5 relative">
                        <div className="flex lg:flex-col items-center gap-6">
                            <div className="w-[0.9375rem] h-[0.9375rem] rounded-full bg-[#DC2946] border-2 border-white"></div>
                            <p className="text-[#9598A4] font-bold">
                                PASSO 03
                            </p>
                        </div>
                        <a href="http://vtsd.com.br/ativar-lembrete-cpl0-aula1" target="_blank">
                            <button
                                className={
                                    "shadow-[0px_16px_40px_-16px_rgba(220,41,70,0.60)] rounded-lg flex items-center justify-center lg:gap-6 gap-[.5rem] w-fit bg-[#DC2946]  lg:py-4 py-[.6rem] lg:px-5 px-3 text-white font-bold lg:text-[1.125rem] leading-[1.75rem] mx-auto lg:ml-0 ml-[2.4rem]"
                                }
                            >
                                <div className="flex gap-[.62rem]">
                                    <Image className="lg:w-auto w-[1rem]" src={calendar} alt="calendario" />
                                    <p>Ativar o lembrete</p>
                                </div>
                                <Image className="lg:w-auto w-5" src={arrowUPrW} alt="ArrowRight" />
                            </button>
                        </a>
                    </div>
                </section>
            </section>
            <div className="lg:mt-[6.94rem] mt-24">
                <Footer gray />
            </div>
        </main>
    )
}

export default Cpl0