"use client";
import Image from "next/image"
import Rtg from "public/Rtg.svg"
import RtgG from "public/Rtg-gray.svg"
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

interface Props{
    gray?: boolean;
    blue?: boolean;
}

const Footer = ({ gray = false, blue = false }: Props) =>  {
 return (
    <main>
        {gray ? (
        <section className="bg-[#F1F1F3] lg:pt-8 pt-4 lg:pb-8 pb-6 border-t-2 border-[#0b112e14]">
            <div className={`${sora.className} text-[.625rem] text-[#0b112e29] font-semibold lg:max-w-[76rem] mx-auto max-w-[15rem] lg:text-left text-center flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-4`}>
                <p>
                Todos os direitos reservados. Ready To Go. CNPJ: 37.643.030/0001-26
                </p>
                <div className="flex items-center gap-4">
                    <p className="lg:block hidden">
                    Designed by
                    </p>
                    <Image src={RtgG} alt="logo rtg"/>
                </div>
            </div>
        </section>

        ) : blue ? (
            <section className="bg-[#0B112E] lg:pt-8 pt-4 lg:pb-8 pb-6 border-t-2 border-[#ffffff29]">
              <div
                className={`${sora.className} text-[.625rem] text-[#ffffff29] font-semibold lg:max-w-[76rem] mx-auto max-w-[15rem] lg:text-left text-center flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-4`}
              >
                <p>
                  Todos os direitos reservados. Ready To Go. CNPJ: 37.643.030/0001-26
                </p>
                <div className="flex items-center gap-4">
                  <p className="lg:block hidden">Designed by</p>
                  <Image src={Rtg} alt="logo rtg blue" />
                </div>
              </div>
            </section>
          ) : (
            <section className="bg-[#0B112E] lg:pt-8 pt-4 lg:pb-8 pb-6 border-t-2 border-[#ffffff29]">
            <div className={`${sora.className} text-[.625rem] text-[#ffffff29] font-semibold lg:max-w-[76rem] mx-auto max-w-[15rem] lg:text-left text-center flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-4`}>
                <p>
                Todos os direitos reservados. Ready To Go. CNPJ: 37.643.030/0001-26
                </p>
                <div className="flex items-center gap-4">
                    <p className="lg:block hidden">
                    Designed by
                    </p>
                    <Image src={Rtg} alt="logo rtg"/>
                </div>
            </div>
        </section>
        )}
        
    </main>
  )
}

export default Footer