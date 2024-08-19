'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Saira_Condensed } from "next/font/google";
import Image from "next/image";
import arrow from "public/arrow-up-right-white.svg";
import Download from "public/download.svg"
import Footer from "../components/Footer";
import DataLayer from "../DataLayer";
import Insta from "public/icon-instagram.svg";

const SairaCondensed = Saira_Condensed({
    weight: ['800'],
    subsets: ["latin"]
});


function Cpl0() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('https://www.instagram.com/p/C-1Euz5vtjS/');
        }, 3000); 

        return () => clearTimeout(timer);
    }, []);

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
                <section className='bg-[#0B112E] lg:pt-[4rem] pt-12 h-screen flex flex-col items-center justify-center gap-12 lg:px-0 px-4'>
                    <h1 className={`${SairaCondensed.className} lg:block hidden text-[3.5rem] leading-[3.5rem] -tracking-[0.03rem] uppercase text-white text-center max-w-[76rem] mx-auto`}>
                        Clique no botão abaixo para {" "} <br />
                        <span className="text-[#46CCEE]"> assistir a live completa:</span>
                    </h1>
                    <h1 className={`${SairaCondensed.className} lg:hidden text-[1.875rem] leading-8 uppercase text-white text-center max-w-[76rem] mx-auto`}>
                        Clique no botão abaixo para {" "} <br />
                        <span className="text-[#46CCEE]"> assistir a live completa:</span>
                    </h1>
                    <a href="https://www.instagram.com/p/C-1Euz5vtjS/" target="_blank">
                        <button
                            className={
                                "shadow-[0px_13px_36px_-8px_rgba(212,49,79,0.53)] rounded-lg flex items-center justify-center lg:gap-6 gap-[.2rem] w-fit bg-[#DC2946]  lg:py-4 py-[1rem] lg:px-5 px-3 text-[#fff] font-bold text-[1.125rem] leading-[1.75rem] mx-auto"
                            }
                        >
                            <div className="flex lg:gap-2 gap-1">
                                <Image className="" src={Insta} alt="whatsapp" />
                                <p>Clique aqui para assistir a live</p>
                            </div>
                            <Image src={arrow} alt="arrow" />
                        </button>
                    </a>
                </section>
            </section>
            <div className="">
                <Footer blue />
            </div>
        </main>
    )
}

export default Cpl0