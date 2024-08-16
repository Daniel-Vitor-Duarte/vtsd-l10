import { Saira_Condensed } from "next/font/google";
import Image from "next/image";
import YouTubeEmbed from "../components/YouTubeEmbed";
import Folder from "public/folder.svg"
import Download from "public/download.svg"
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
        <main>
            <DataLayer
                type_page="cpl"
                type_content="pico"
                id_produto="1006882"
                operacao="pico"
                versao_pico="L10"
            />
            <section>
                <section className='bg-[#0B112E] lg:pt-[4rem] pt-12 lg:pb-[28.19rem]'>
                    <h1 className={`${SairaCondensed.className} lg:block hidden text-[3rem] leading-[3.25rem] -tracking-[0.03rem] uppercase text-white text-center max-w-[76rem] mx-auto`}>
                    3 exercícios para se preparar para o {" "} <br />
                        <span className="text-[#46CCEE]">  curso gratuito &quot;Como entrar no digital&quot;:</span>
                    </h1>
                    <h1 className={`${SairaCondensed.className} lg:hidden text-[1.875rem] leading-8 uppercase text-white text-center max-w-[76rem] mx-auto`}>
                    3 exercícios para <br /> se preparar para o {" "} <br />
                        <span className="text-[#46CCEE]"> curso gratuito <br /> &quot;Como entrar no digital&quot;:</span>
                    </h1>
                    <div className="lg:absolute lg:mt-0 top-[20%] w-full">
                        <YouTubeEmbed />
                    </div>
                </section>
                <section className="flex lg:flex-row flex-col justify-center gap-4 lg:mt-[23.56rem] xlg:mt-[26.5rem] mt-8">
                    <a href="https://vendatodosantodia.com.br/raiox-digital-pico.pdf" target="_blank">
                        <button
                            className={
                                "shadow-[0px_16px_40px_-16px_rgba(249,199,0,0.3)] rounded-lg flex items-center justify-center lg:gap-6 gap-[.5rem] w-fit bg-[#FFD52F]  lg:py-4 py-[.6rem] lg:px-5 px-3 text-[#0B112E] font-bold lg:text-[1.125rem] leading-[1.75rem] mx-auto"
                            }
                        >
                            <div className="flex gap-2">
                                <Image className="lg:w-auto w-[1rem]" src={Folder} alt="pasta" />
                                <p>Clique aqui para baixar o relatório</p>
                            </div>
                            <Image className="lg:w-auto w-5" src={Download} alt="ArrowRight" />
                        </button>
                    </a>

                    <a href="http://vtsd.com.br/ativar-lembrete-cpl0-aula1" target="_blank">
                        <button
                            className={
                                "shadow-[0px_16px_40px_-16px_rgba(249,199,0,0.3)] rounded-lg flex items-center justify-center lg:gap-6 gap-[.5rem] w-fit bg-[#0B112E]  lg:py-4 py-[.6rem] lg:px-5 px-3 text-white font-bold lg:text-[1.125rem] leading-[1.75rem] mx-auto"
                            }
                        >
                            <div className="flex gap-2">
                                <Image className="lg:w-auto w-[1rem]" src={calendar} alt="pasta" />
                                <p>Ativar o lembrete no Google Calendar</p>
                            </div>
                            <Image className="lg:w-auto w-5" src={arrowUPrW} alt="ArrowRight" />
                        </button>
                    </a>
                </section>
            </section>
            <div className="lg:mt-[6.94rem] mt-24">
                <Footer gray />
            </div>
        </main>
    )
}

export default Cpl0