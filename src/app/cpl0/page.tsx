import { Saira_Condensed } from "next/font/google";
import Image from "next/image";
import YouTubeEmbed from "../components/YouTubeEmbed";
import Folder from "public/folder.svg"
import Download from "public/download.svg"
import Footer from "../components/Footer";


const SairaCondensed = Saira_Condensed({
    weight: ['800'],
    subsets: ["latin"]
});


function Cpl0() {
    return (
        <main className="h-screen flex flex-col justify-between">
            <section>
                <section className='bg-[#0B112E] lg:pt-[4rem] pt-12 lg:pb-[25.19rem]'>
                    <h1 className={`${SairaCondensed.className} lg:text-[3rem] text-[1.875rem] lg:leading-[3.25rem] leading-8 lg:-tracking-[0.03rem] uppercase text-white text-center max-w-[76rem] mx-auto`}>
                        Assista a aula introdutória do {" "} <br className="lg:block hidden" />
                        <span className="text-[#46CCEE]">  curso gratuito &quot;Como entrar no digital&quot;</span> {" "} <br />
                        para aprender 3 coisas:
                    </h1>
                    <div className="lg:absolute lg:mt-0 top-[26%] w-full">
                        <YouTubeEmbed />
                    </div>
                </section>
                <section>
                    <a href="https://vendatodosantodia.com.br/raiox-digital-pico.pdf" target="_blank">
                        <button
                            className={
                                "shadow-[0px_16px_40px_-16px_rgba(249,199,0,0.3)] rounded-lg flex items-center justify-center lg:gap-6 gap-[.5rem] w-fit bg-[#FFD52F] lg:mt-[23.56rem] mt-8 lg:py-4 py-[.6rem] lg:px-5 px-3 text-[#0B112E] font-bold lg:text-[1.125rem] leading-[1.75rem] mx-auto mb-8"
                            }
                        >
                            <div className="flex gap-2">
                                <Image className="lg:w-auto w-[1rem]" src={Folder} alt="pasta" />
                                <p>Clique aqui para baixar o relatório</p>
                            </div>
                            <Image className="lg:w-auto w-5" src={Download} alt="ArrowRight" />
                        </button>
                    </a>
                </section>
            </section>
            <section className="relative">
                <div className="lg:mt-[6.94rem]">
                    <Footer gray/>
                </div>
            </section>
        </main>
    )
}

export default Cpl0