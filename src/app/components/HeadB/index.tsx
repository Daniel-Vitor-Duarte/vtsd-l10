import Image from "next/image"
import Calend from "public/calendar.svg"
import Graphic from "public/graphic.webp"
import GraphicM from "public/graphic-mob.webp"
import Leandro from "public/top-captura.png"
import LeandroM from "public/bg-top-captura-mob.svg"
import Arrow from "public/arrow-up.svg";
import Cert from "public/certificado.webp";
import CertM from "public/certificado-mob.webp";
import Form from "../Forms"
import { Saira_Condensed } from "next/font/google";


const SairaCondensed = Saira_Condensed({
    weight: ['800'],
    subsets: ["latin"]
});

function HeadA() {
    return (
        <main>
            <div className="bg-[#FFD52F] lg:py-5 py-4 text-center lg:text-[1.125rem] text-[1rem] font-black uppercase">
                <p>
                    CERTIFICADO de participação <br className="lg:hidden" /> ao final do curso
                </p>
            </div>

            <section className="bg-[#0B112E] lg:pt-[5.5rem] lg:pb-[5.5rem] pt-12  overflow-hidden">
                <div className="max-w-[76rem] mx-auto relative">
                    <div className="text-white flex flex-col lg:items-start items-center lg:gap-10 gap-6  lg:text-left text-center z-10 relative">
                        <h1 className={`${SairaCondensed.className} lg:text-[5.13188rem] text-[2.9375rem] font-extrabold lg:-tracking-[0.05131rem] -tracking-[0.02938rem] lg:leading-[3.61506rem] leading-[2.125rem] uppercase `}>
                            curso gratuito: <br />
                            <span className="text-[#46CCEE] lg:text-[3.51469rem] text-[2.125rem] lg:leading-[3.61506rem] leading-[2.125rem] lg:-tracking-[.03513rem] -tracking-[0.02rem]">Negócios Digitais</span>
                        </h1>
                        <div className="lg:text-[1.75rem] text-[1.25rem] lg:font-semibold font-medium -tracking-[0.0175rem] lg:leading-10 leading-[1.625rem] lg:max-w-[35.6875rem] max-w-[22.5rem]">
                            <p className="lg:block hidden">
                                Entenda porque tantas pessoas comuns
                                estão {" "} <br className="lg:hidden" />
                                <span className="text-[#46CCEE] lg:font-semibold font-extrabold" >ganhando tanto dinheiro</span> {" "} na internet.
                                Crie um plano de ação personalizado <br className="lg:block hidden" />
                                para seu primeiro negócio digital.
                            </p>
                            <p className="lg:hidden">
                                Entenda porque tantas pessoas comuns estão <span className="text-[#46CCEE] lg:font-semibold font-extrabold">ganhando tanto dinheiro na internet.</span>
                            </p>
                            <p className="lg:hidden mt-3">
                            Crie um plano de ação personalizado para seu  primeiro negócio digital.
                            </p>
                        </div>
                        <div className="flex lg:items-center items-start lg:gap-4 gap-2 lg:text-[1.75rem] text-[1.25rem] font-semibold lg:max-w-full max-w-[20.5rem]">
                            <Image className="lg:w-auto w-[1.125rem] lg:mt-0 mt-[.3rem]" src={Calend} alt="calendario" />
                            <p>
                                9, 11 e 13 de Setembro,<br className="lg:hidden" /> às 19h,  ao vivo
                            </p>
                        </div>
                        <div className="lg:max-w-full max-w-[20.5rem]">
                            <p className="lg:text-[1.125rem] text-[1rem] text-[#ffffffa3] font-semibold" id="B">
                                Deixe seu e-mail abaixo e acesse o curso e o certificado:
                            </p>
                            <Form />
                            <div className="flex items-center lg:gap-[1.88rem] gap-4 mt-8 text-left">
                                <Image className="lg:block hidden" src={Graphic} alt="" />
                                <Image className="lg:hidden" src={GraphicM} alt="" />
                                <div>
                                    <p className="lg:text-[1.375rem] font-black uppercase">
                                        Receba de bônus:
                                    </p>
                                    <p className="text-[#ffffffb8] lg:text-[1.126rem] font-medium max-w-[23.25rem] lg:leading-7 leading-6">
                                        Relatório com os tipos de produtos digitais
                                        que estão dando muito dinheiro
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image className="absolute top-0 -right-40 lg:block hidden" src={Leandro} alt="Leandro" />
                    <Image className="lg:hidden w-full mt-6" src={LeandroM} alt="Leandro" />
                </div>
            </section>

            <section className="bg-[#FFD52F]  lg:text-left text-center lg:px-4 overflow-x-hidden">
                <div className="relative flex lg:flex-row flex-col justify-start items-center lg:pt-[6rem] lg:pb-[6.1rem] pt-12 lg:max-w-[90rem] mx-auto">
                    <div className="lg:max-w-[33.5rem] max-w-[20.5rem] text-[#000000a3] text-w font-semibold relative z-10 ">
                        <h1 className={`${SairaCondensed.className} lg:text-[3rem] text-[1.875rem] text-[#0B112E] font-extrabold uppercase lg:leading-[3.25rem] leading-[2.25rem] lg:-tracking-[.03rem] -tracking-[.01875rem]`}>
                            Um curso intensivo para você aprender a entrar <br />
                            no Marketing Digital
                        </h1>
                        <p className="mt-5 lg:text-[1.375rem] text-[1.25rem] lg:leading-[2rem] leading-[1.625rem]">
                            E levar um certificado reconhecido pelo mercado
                        </p>
                        <p className="mt-6 lg:text-[1.375rem] text-[1rem] lg:leading-[2rem] leading-[1.5rem]">
                            Para garantir que vai receber o seu, <br />
                            se cadastre clicando abaixo:
                        </p>
                        <a href="#B">
                            <button className="flex items-center gap-4 lg:py-3 py-2 lg:px-5 px-4 text-[#0B112E] lg:text-[1.125rem] leading-7 bg-white rounded-lg btn-shadow mt-6 font-bold w-fit lg:mx-0 mx-auto">
                                <p>
                                    Quero participar agora
                                </p>
                                <Image className="lg:w-auto w-[1.125rem]" src={Arrow} alt="seta" />
                            </button>
                        </a>
                    </div>
                    <Image className="lg:block hidden absolute right-0 bottom-0 blur-medium" src={Cert} alt="certificado" />
                    <Image className="lg:hidden max-w-full" src={CertM} alt="certificado" />
                </div>
            </section>
        </main>
    )
}

export default HeadA