import { Saira_Condensed } from "next/font/google";
import Image from "next/image";
import arrowRight from "public/arrow-right-white.svg";
import Download from "public/download.svg"
import Footer from "../components/Footer";
import DataLayer from "../DataLayer";
import zap from "public/whatsappBtn.svg";

const SairaCondensed = Saira_Condensed({
    weight: ['800'],
    subsets: ["latin"]
});


function Cpl0() {
    return (
        // h-screen flex flex-col justify-between
        <main>
            <DataLayer
                type_page="grupo"
                type_content="pico"
                id_produto="1006882"
                operacao="pico"
                versao_pico="L10"
            />
            <section className="overflow-x-hidden relative">
                <div className="blur-grupo"></div>
                <section className='bg-[#0B112E] lg:pt-[4rem] pt-12 h-screen flex flex-col items-center justify-center gap-12'>
                    <h1 className={`${SairaCondensed.className} lg:block hidden text-[3.5rem] leading-[3.5rem] -tracking-[0.03rem] uppercase text-white text-center max-w-[76rem] mx-auto`}>
                        Clique no botão abaixo para entrar no grupo do {" "} <br />
                        <span className="text-[#46CCEE]">  curso gratuito &quot;Como entrar no digital&quot;</span>
                    </h1>
                    <h1 className={`${SairaCondensed.className} lg:hidden text-[1.875rem] leading-8 uppercase text-white text-center max-w-[76rem] mx-auto`}>
                        Clique no botão abaixo para entrar no grupo do {" "} <br />
                        <span className="text-[#46CCEE]"> curso gratuito <br /> &quot;Como entrar no digital&quot;</span>
                    </h1>
                    <a href="http://vtsd.com.br/grupo-l10" target="_blank">
                        <button
                            className={
                                "shadow-[0px_16px_40px_-16px_rgba(249,199,0,0.3)] rounded-lg flex items-center justify-center lg:gap-6 gap-[.5rem] w-fit bg-[#25D366]  lg:py-4 py-[1rem] lg:px-5 px-3 text-[#fff] font-bold text-[1.125rem] leading-[1.75rem] mx-auto"
                            }
                        >
                            <div className="flex gap-2">
                                <Image className="" src={zap} alt="whatsapp" />
                                <p>Entrar no grupo do Whatsapp</p>
                            </div>
                            <Image src={arrowRight} alt="arrowRight" />
                        </button>
                    </a>
                </section>
            </section>
            <div className="">
                <Footer gray />
            </div>
        </main>
    )
}

export default Cpl0