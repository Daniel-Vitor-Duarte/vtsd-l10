import Image from "next/image"
import { Saira_Condensed } from "next/font/google";
import Leadro from "public/Leandro.webp"
import LeadroM from "public/Leandro-mob.webp"
import Form from "../FormsBottom"


const SairaCondensed = Saira_Condensed({
    weight: ['800'],
    subsets: ["latin"]
});

function Mid() {
    return (
        <main>
            
            <section className="bg-[#0B112E] relative lg:pt-[6.95rem] lg:pb-[6.95rem] pt-12">
                <Image className="absolute top-0 left-0 lg:block hidden" src={Leadro} alt="leandro" />
                <div className="max-w-[76rem] mx-auto flex lg:flex-row flex-col justify-end">
                    <div className="text-white max-w-[30.5rem] z-10 lg:text-left text-center lg:mx-0 mx-auto">
                        <h1 className={`${SairaCondensed.className} lg:text-[3rem] text-[1.875rem]  lg:-tracking-[0.03rem] -tracking-[0.01875rem] lg:leading-[3.25rem] leading-[2.25rem] uppercase `}>
                            Quem é <br />
                            <span className="text-[#85A0D6]">leandro ladeira?</span>
                        </h1>
                        <h2 className="lg:text-[1.375rem] text-[1.25rem] font-semibold lg:leading-8 leading-[1.625rem] mt-4 lg:max-w-full max-w-[17rem] lg:mx-0 mx-auto">
                            Considerado um dos maiores nomes <br className="lg:block hidden" />
                            do Marketing Digital do Brasil
                        </h2>
                        <p className="text-[#ffffffe0] font-medium leading-7 lg:mt-8 mt-[1.25rem] lg:max-w-full max-w-[19.9rem] lg:mx-0 mx-auto">
                            Mais de 285 milhões faturados, mais de 180 mil vendas.
                            O produtor que está a mais tempo no programa Hotmart Galaxy,
                            no ranking dos 25 maiores produtores <br className="lg:hidden"/> do mundo.
                        </p>
                    </div>
                    <Image className="lg:hidden -mt-[7rem] w-full" src={LeadroM} alt="leandro" />
                </div>
            </section>

            <section className="bg-[#0B112E]">
                <div className="flex flex-col items-center lg:gap-10 gap-8 lg:py-[5.5rem] py-12 border-t-2 border-[#ffffff29] lg:max-w-[76rem] max-w-[20.5rem] mx-auto">
                    <h1 className={`${SairaCondensed.className} lg:text-[3rem] text-[1.875rem]  lg:leading-[3.25rem] leading-[2.25rem]  lg:-tracking-[.03rem] -tracking-[.01875rem] uppercase text-white lg:max-w-[41rem] max-w-[20.5rem] text-center`}>
                        INSCREVA-SE abaixo para aprender
                        como entrar no mercado digital
                    </h1>
                    <Form />
                </div>
            </section>
        </main>
    )
}

export default Mid