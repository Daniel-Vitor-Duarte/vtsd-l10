"use client";
import React, { useEffect, useState } from "react";
import ArrowRight from "public/arrow-right.svg";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import SelectCustom from "../SelectCustom";
import Folder from "public/folder.svg"

interface FormState {
    name: string;
    email: string;
    phonenumber: string;
    whatsapp: string;
    ddi: string;
}

const CallToAction: React.FC = () => {
    const [telReady, setTelReady] = useState("");
    const pathname = useSearchParams();
    const pathpage = usePathname();
    const conversion = pathname.get("conversion");
    const utm_campaign = pathname.get("utm_campaign");
    const utm_content = pathname.get("utm_content");
    const utm_medium = pathname.get("utm_medium");
    const utm_source = pathname.get("utm_source");
    const utm_term = pathname.get("utm_term");

    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        phonenumber: "",
        whatsapp: "",
        ddi: "55",
    });

    const handleDdi = (ddi: any) => {
        setForm({
            ...form,
            ddi: ddi,
        });
    };

    const phoneMask = (value: any) => {
        const ddiString = String(form.ddi)
        if (!value) return "";
        if (ddiString !== "55") {
            return value;
        }
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{2})(\d)/, "($1) $2");
        value = value.replace(/(\d)(\d{4})$/, "$1-$2");
        return value;
    };

    const handlePhone = (whatsapp: any) => {
        let input = whatsapp.target;
        input.value = phoneMask(input.value);

        setForm({
            ...form,
            whatsapp: whatsapp.target.value,
        });
    };

    // Get cookie value on the client side
    const getCookie = (name: string) => {
        if (typeof document !== 'undefined') {
            let cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                let parts = cookie.split("=");
                if (parts[0] === name) {
                    return parts[1];
                }
            }
        }
        return null;
    };

    const [ck_xid, setCk_xid] = useState<string | null>(null);

    useEffect(() => {
        // Only execute on client side
        const cookieValue = getCookie("_#9r2r6a");
        setCk_xid(cookieValue);

        const phone_number = form.ddi + form.whatsapp;
        setTelReady(phone_number.replace(/\D/g, ""));
    }, [form.ddi, form.whatsapp]);

    return (
        <form
            className="mt-[1rem] max-w-[30.375rem] w-full text-[#666] font-semibold"
            method="POST"
            action="https://readytogo59637.activehosted.com/proc.php"
        >
            <input type="hidden" name="act" value="sub" />
            {/* O único valor que será alterado em todos os formulários é o do campo de input abaixo. */}
            <input type="hidden" name="f" value="26" />
            <input type="hidden" name="or" value="0b2a0fe8b618557e119630b0091d6aa9" />

            <input type="hidden" name="field[10]" value={utm_campaign ?? ""} />

            <input
                type="hidden"
                name="field[11]"
                id="utm_source"
                value={utm_source ?? ""}
            />

            <input
                type="hidden"
                name="field[12]"
                id="utm_medium"
                value={utm_medium ?? ""}
            />

            <input
                type="hidden"
                name="field[13]"
                id="utm_content"
                value={utm_content ?? ""}
            />

            <input
                type="hidden"
                name="field[14]"
                id="utm_term"
                value={utm_term ?? ""}
            />

            <input
                type="hidden"
                name="field[15]"
                id="conversion"
                value={conversion ?? ""}
            />

            <input type="hidden" name="field[16]" id="sigla_produto" value={"VTSD"} />

            <input type="hidden" name="field[17]" id="versao_pico" value="L10" />

            <input
                type="hidden"
                name="field[18]"
                id="pathpage"
                value={pathpage ?? ""}
            />

            <input type="hidden" name="field[19]" id="url_redirect" value={"/"} />

            <input type="hidden" name="field[20]" id="type_redirect" value={"/"} />

            <input type="hidden" name="field[24]" id="ck_xid" value={ck_xid ?? ""} />
            <input
                type="text"
                name="fullname"
                className="lg:py-4 lg:px-4 py-2 px-3 border-[1.5px] border-[#E0E0E0] rounded-lg placeholder:font-normal focus:outline-none w-full lg:leading-normal leading-8"
                placeholder="Digite seu nome e sobrenome"
                required
            />
            <input
                type="email"
                name="email"
                className="lg:py-4 lg:px-4 py-2 px-3 border-[1.5px] border-[#E0E0E0] rounded-lg placeholder:font-normal focus:outline-none w-full mt-2 lg:leading-normal leading-8"
                placeholder="Digite seu melhor e-mail"
                required
            />
            <div className="flex gap-2 mt-2">
                <SelectCustom handleDdi={handleDdi} />
                <input
                    maxLength={15}
                    type={"tel"}
                    onChange={(e) => handlePhone(e)}
                    className="lg:py-4 lg:px-4 py-2 px-3  border-[1.5px] border-[#E0E0E0] rounded-lg placeholder:font-normal focus:outline-none w-full lg:leading-normal leading-8"
                    placeholder="Digite seu telefone"
                    required
                />
                <input type="hidden" value={telReady} name="phone" />
            </div>
            <button
                className={
                    "shadow-[0px_16px_40px_-16px_rgba(54,50,157,0.56)] rounded-lg flex items-center justify-between lg:gap-2 gap-[.44rem] w-full bg-[#FFD52F] mt-[.5rem] lg:py-4 py-2 lg:px-5 px-3 text-[#0B112E] font-bold lg:text-[1.125rem] leading-[1.75rem]"
                }
            >
                <div className="flex gap-2">
                    <Image className="lg:block hidden" src={Folder} alt="pasta" />
                    <p>Reservar meu lugar e baixar o relatório</p>
                </div>
                <Image className="lg:block hidden" src={ArrowRight} alt="ArrowRight" />
            </button>
        </form>
    );
}

export default CallToAction;
