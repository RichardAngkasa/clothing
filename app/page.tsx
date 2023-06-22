/* eslint-disable @next/next/no-img-element */
"use client"; // This is a client component

import { useState } from "react";

const initData = { id: "satu", name: "Navy Vannila Crewneck", price: 144 };

export default function Home() {
  const [open, setopen] = useState({
    condition: false,
    selectedData: initData,
  });
  const data = [
    { id: "satu", name: "Navy Vannila Crewneck", price: 144 },
    { id: "dua", name: "Black Vannila Crewneck", price: 144 },
    { id: "tiga", name: "Violet Lime Hoodie", price: 499 },
    { id: "empat", name: "Butterfly on White Tee", price: 229 },
    { id: "lima", name: "Morp light Tee", price: 299 },
    { id: "enam", name: "Pink Violet Tee", price: 299 },
  ];
  return (
    <main className="relative w-full">
      {open.condition ? (
        <div className="w-screen h-screen flex item-center justify-center z-50 fixed">
          <div className="w-1/3 h-fit border bg-black/80 p-4">
            <div className="flex justify-end">
              <img
                src="/assets/logo/close.svg"
                alt=""
                className="w-6 aspect-square"
                onClick={()=> open ? setopen({condition: false, selectedData: initData}): setopen({condition: true, selectedData: initData})}
              />
            </div>
            <img src={`/assets/${open.selectedData.id}.png`} alt="" />
            <div className="space-y-2 font-revxRegular">
              <div>
                <div className="text-2xl">{open.selectedData.name}</div>
                <div className="text-xl">{open.selectedData.price}K</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm">SIZE</div>
                <div className="flex gap-1">
                  {["M", "L", "XL"].map((unit) => {
                    return (
                      <div
                        className="w-8 aspect-square border border-white flex items-center justify-center hover:bg-white hover:text-black duration-200 hover:border-none"
                        key={unit}
                      >
                        {unit}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-1 pb-4">
                <div className="text-sm">COLOR</div>
                <div className="flex gap-1">
                  {["WHITE", "BLACK"].map((unit) => {
                    return (
                      <div
                        className="w-fit px-4 py-2 border border-white flex items-center justify-center hover:bg-white hover:text-black duration-200 hover:border-none"
                        key={unit}
                      >
                        {unit}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="px-6 py-2 bg-white text-black font-revxSemiBold text-center ">
                BUY
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <video
        src="/assets/distord.mp4"
        className="w-full fixed opacity-20"
        autoPlay
        muted
        loop
      ></video>
      <div className="relative justify-center">
        <div className="container mx-auto flex justify-between items-center text-sm font-japan space-x-2">
          <div className="hover:border-b-2 border-white duration-500 transition-all">
            Home
          </div>
          <div>Catalog</div>
          <div>Contact</div>
          <div className="my-20">
            <img src="/assets/logo.gif" alt="" className="w-[30rem] pb-2" />
          </div>
          <div>Section</div>
          <div>About Us</div>
          <div>Track Order</div>
        </div>
        <div className="container mx-auto justify-center">
          <div className="grid grid-cols-4">
            {data.map((unit) => {
              return (
                <div
                  className="flex flex-col items-center font-revxRegular cursor-pointer"
                  key={unit.id}
                  onClick={() =>
                    open
                      ? setopen({ condition: true, selectedData: unit })
                      : setopen({ condition: false, selectedData: unit })
                  }
                >
                  <img src={`/assets/${unit.id}.png`} alt="satu" className="" />
                  <div>{unit.name}</div>
                  <div>{unit.price}K</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-purple-400/20 mt-20 w-full h-full text-gray-100">
          <div className="container mx-auto px-4 py-10 w-full flex flex-col lg:flex-row gap-4 lg:items-start lg:justify-between">
            <div>
              <div className="font-cosmas text-4xl">Metamorphosis</div>
            </div>
            <div className="flex w-full sm:w-fit gap-4 lg:gap-8">
              <div>
                <div className="text-base sm:text-lg font-revxRegular">
                  Contact us
                </div>
                <div className="flex items-center gap-1">
                  <img src="/assets/logo/call.svg" alt="" className="h-5 w-5" />
                  <div className="text-base sm:text-xl font-revxRegular ">
                    628-1245-42343
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <img
                    src="/assets/logo/email.svg"
                    alt=""
                    className="h-5 w-5"
                  />
                  <div className="text-base sm:text-xl font-revxRegular ">
                    admin@metamorphosis.id
                  </div>
                </div>
              </div>
              <div>
                <div className="text-base sm:text-lg font-revxRegular">
                  Social
                </div>
                <div className="flex items-center gap-1">
                  <img
                    src="/assets/logo/insta.svg"
                    alt=""
                    className="h-5 w-5"
                  />
                  <div className="text-base sm:text-xl font-revxRegular ">
                    metamorphosis.id
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <img
                    src="/assets/logo/facebook.svg"
                    alt=""
                    className="h-5 w-5"
                  />
                  <div className="text-base sm:text-xl font-revxRegular ">
                    metamorphosis_id
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <img
                    src="/assets/logo/twitter.svg"
                    alt=""
                    className="h-5 w-5"
                  />
                  <div className="text-base sm:text-xl font-revxRegular ">
                    metamorphosis.id
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="text-3xl font-revxSemiBold">About Us</div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
