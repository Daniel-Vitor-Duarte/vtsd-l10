"use client";
import React from "react";
import Countdown from "react-countdown";

const eventDate = new Date("2024-07-10T19:00:00-03:00");
function CountDown() {
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state
      return (
        <div className="flex lg:gap-8 gap-[0.62rem] text-[#656565]">
          <div className="flex flex-col items-center">
            <p className="text-[0.625rem]">Dias</p>
            <p className="font-bold">00</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[0.625rem]">Horas</p>
            <p className="font-bold">00</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[0.625rem]">Minutos</p>
            <p className="font-bold">00</p>
          </div>
        </div>
      );
    } else {
      // Render a countdown
      return (
        <div className="flex items-center lg:gap-6 gap-5 text-[#2A2A2A]">
          <div className="flex flex-col items-center">
            <p className="text-[0.625rem] uppercase font-bold">Dias</p>
            <p className="font-bold text-[1.81469rem] leading-[1.9035rem] -tracking-[0.1rem]">
              {days.toLocaleString("pt-BR", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </p>
          </div>
          <div className="h-[2.5625rem] w-[0.125rem] bg-[#AC872B]"></div>
          <div className="flex flex-col items-center">
            <p className="text-[0.625rem] uppercase font-bold">Horas</p>
            <p className="font-bold text-[1.81469rem] leading-[1.9035rem] -tracking-[0.1rem]">
              {hours.toLocaleString("pt-BR", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </p>
          </div>
          <div className="h-[2.5625rem] w-[0.125rem] bg-[#AC872B]"></div>
          <div className="flex flex-col items-center">
            <p className="text-[0.625rem] uppercase font-bold">Min.</p>
            <p className="font-bold text-[1.81469rem] leading-[1.9035rem] -tracking-[0.1rem]">
              {minutes.toLocaleString("pt-BR", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </p>
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <Countdown date={eventDate} renderer={renderer} />
    </div>
  );
}

export default CountDown;
