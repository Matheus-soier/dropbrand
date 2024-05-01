"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoDiamond } from "react-icons/io5";

export default function Page() {
  
  const [desktop, setDesktop] = useState<boolean>(false);

  useEffect(() => {
   const checkScreenSize = () => {
    const match: boolean = window.innerWidth > 640;
    setDesktop(match);
   };
   checkScreenSize();
   window.addEventListener("resize", checkScreenSize);
   return () => { window.removeEventListener("resize", checkScreenSize); }
  },[]);

  return(
    <div>
      {desktop &&
        <div className="w-screen h-screen flex justify-center items-center bg-black text-white">
          <p className="text-center">
            Abra em um dispositivo mobile para visualizar o site!
          </p>
        </div>
      }
      {!desktop &&
        <div className="w-screen h-fit flex flex-col items-center bg-black text-white py-4">
          <header className="flex justify-center items-center w-screen h-fit px-5 pb-4 bg-black mb-3">
            <div className="w-full flex justify-center items-center">
              <Image src={'/logodp.png'} alt="Logo Drop Brand"  width={170} height={0}/>
            </div>  
          </header>
          <main className="flex flex-col items-center px-5 gap-5">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-start text-5xl capitalize">Domine o Dropshipping</h1>
              <h2>Descubra como <span className="font-semibold">construir uma operação lucrativa do zero</span> e alcançar <span className="font-semibold">vendas de seis dígitos mensais</span> no mercado de Dropshipping <span className="font-semibold">nacional</span> ou <span className="font-semibold">global</span>. Junte-se à nossa iniciativa exclusiva e transforme suas ambições em realidade!</h2>
            </div>
            <div className="grid grid-cols-2">
            <Image src={'/cell2.png'} alt="Logo Drop Brand"  width={500} height={0}/>
            <div className="flex flex-col gap-3">
              <div className="h-[50%] w-full bg-white rounded-md p-3">
                <p></p>
              </div>
              <div className="h-[50%] w-full bg-white rounded-md p-3">
                <p></p>
              </div>
            </div>
            </div>
          </main>
        </div>
      }
    </div>
  );
}