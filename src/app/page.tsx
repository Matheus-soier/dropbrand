"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsBoxSeam } from "react-icons/bs";
import { IoIosStarOutline } from "react-icons/io";
import { GiSpiderWeb } from "react-icons/gi";
import { SiAlwaysdata } from "react-icons/si";
import { IoBagCheck } from "react-icons/io5";
import { FaFunnelDollar } from "react-icons/fa";

export default function Page() {
  
  const [desktop, setDesktop] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(true);
  const [showBtn, setShowBtn] = useState<boolean>(false);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setShowBtn(true);
    }, 10000);
  }, []);

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
      <>
      {modal &&
          <div className="blur-background">
              <div className="bg-white p-5 flex justify-center items-center rounded-lg w-[90%] h-fit flex-col gap-3">
                <FaEyeSlash className="text-black text-3xl"/>
                <h2 className="font-bold text-xl">Atenção, Conteúdo Sensível!</h2>
                <p>Só passe para a próxima etapa caso tenha 5 minutos disponíveis para ler e compreender o assunto. O conteúdo que você está prestes a visualizar pode ser a sua mudança de jogo dentro do mercado de Dropshipping, caso não tenha esse tempo disponível realmente não há espaço para você nesse mercado tão abundante de vendas online!</p>
                {showBtn &&
                  <button className="bg-black text-white w-full p-4 rounded-lg font-semibold text-xl mt-3 flex items-center gap-2 justify-center" onClick={() => setModal(false)}>
                  Proxima Etapa
                  <IoIosArrowRoundForward className="text-4xl" />
                  </button>
                }
              </div>
          </div>  
      }
        <div className="w-screen h-fit flex flex-col items-center bg-black text-white py-4 overflow-x-hidden">
          <header className="flex justify-center items-center w-screen h-fit px-5 pb-4 bg-black mb-3">
            <div className="w-full flex justify-center items-center">
              <Image src={'/logodp.png'} alt="Logo Drop Brand"  width={170} height={0}/>
            </div>  
          </header>
          <main className="flex flex-col items-center gap-5">
            <div className="flex flex-col gap-5 px-5">
              <h1 className="font-bold text-start text-5xl capitalize">Domine o Dropshipping</h1>
              <h2>Descubra como <span className="font-semibold">construir uma operação lucrativa do zero</span> e alcançar <span className="font-semibold">vendas de seis dígitos mensais</span> no mercado de Dropshipping <span className="font-semibold">nacional</span> ou <span className="font-semibold">global</span>. Junte-se à nossa iniciativa exclusiva e transforme suas ambições em realidade!</h2>
            </div>
            <div className="grid grid-cols-2 items-center px-5">
            <Image src={'/cell2.png'} alt="Logo Drop Brand"  width={500} height={0}/>
            <div className="flex flex-col gap-3">
              <div className="h-full w-full rounded-md p-3 animated-gradient flex items-start flex-col justify-center gap-1">
                  <BsBoxSeam className="text-xl"/> <p className="leading-5">Chega pedidos taxados, use nossos <span className="font-semibold">fornecedores nacionais e internacionais.</span></p>
                </div>
                <div className="h-full w-full rounded-md p-3 animated-gradient flex items-start flex-col justify-center gap-1">
                <IoIosStarOutline className="text-2xl"/> <p className="leading-5"><span className="font-semibold">Aumente sua margem de lucro</span> com poucos ajustes em sua operação.</p>
                </div>
            </div>
            </div>
            <div
                    x-data="{}"
                    x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
                    className=" w-screen my-5 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] px-5"
                >
                    <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        <li>
                            <Image src="/8.png" alt="Facebook" width={200} height={0}/>
                        </li>
                        <li>
                        <Image src="/9.png" alt="Facebook" width={200} height={0}/>
                        </li>
                        <li>
                        <Image src="/10.png" alt="Facebook" width={200} height={0}/>
                        </li>
                        <li>
                        <Image src="/11.png" alt="Facebook" width={200} height={0}/>
                        </li>
                        <li>
                        <Image src="/12.png" alt="Facebook" width={200} height={0}/>
                        </li>
                        <li>
                        <Image src="/13.png" alt="Facebook" width={200} height={0}/>
                        </li>
                        <li>
                        <Image src="/14.png" alt="Facebook" width={200} height={0}/>
                        </li>
                        <li>
                        <Image src="/15.png" alt="Facebook" width={200} height={0}/>
                        </li>
                    </ul>     
                    <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        <li>
                            <Image src="/8.png" alt="Facebook" width={200} height={0}/>
                        </li>
                        <li>
                        <Image src="/9.png" alt="Facebook" width={200} height={0}/>
                        </li>
                        <li>
                        <Image src="/10.png" alt="Facebook" width={200} height={0}/>
                        </li>
                        <li>
                        <Image src="/11.png" alt="Facebook" width={200} height={0}/>
                        </li>
                        <li>
                        <Image src="/12.png" alt="Facebook" width={200} height={0}/>
                        </li>
                        <li>
                        <Image src="/13.png" alt="Facebook" width={200} height={0}/>
                        </li>
                        <li>
                        <Image src="/14.png" alt="Facebook" width={200} height={0}/>
                        </li>
                        <li>
                        <Image src="/15.png" alt="Facebook" width={200} height={0}/>
                        </li>
                    </ul>                
                </div>
                <div className="flex flex-col items-center gap-5 px-3">
                  <h2 className="text-3xl font-semibold capitalize text-center">Aumente o número de vendas de sua operação</h2>
                  <div className="flex flex-col gap-3 items-center w-full">
                    <div className="border-2 border-gray-200 w-full py-3 px-4 flex justify-between items-center rounded-lg gap-6">
                      <div className="flex flex-col">
                        <h3 className="font-semibold text-xl">Crie uma teia</h3>
                        <p className="text-sm">Aprenda a anúnciar em diversas plataformas de forma inteligente.</p>
                      </div>
                      <div className="bg-white text-black p-3 rounded-lg">
                        <GiSpiderWeb className="text-3xl"/>
                      </div>
                    </div>
                    <div className="border-2 border-gray-200 w-full py-3 px-4 flex justify-between items-center rounded-lg gap-6">
                      <div className="flex flex-col">
                        <h3 className="font-semibold text-xl">Analise as métricas</h3>
                        <p className="text-sm">Saiba onde estão os gargalos da sua operação apenas olhando as métricas.</p>
                      </div>
                      <div className="bg-white text-black p-3 rounded-lg">
                      <SiAlwaysdata className="text-3xl"/>
                      </div>
                    </div>
                    <div className="border-2 border-gray-200 w-full py-3 px-4 flex justify-between items-center rounded-lg gap-6">
                      <div className="flex flex-col">
                        <h3 className="font-semibold text-xl">Aprenda a minerar</h3>
                        <p className="text-sm">O coração da sua operação precisa ser o teste de produto, nunca pare de anúnciar!</p>
                      </div>
                      <div className="bg-white text-black p-3 rounded-lg">
                        <IoBagCheck className="text-3xl"/>
                      </div>
                    </div>
                    <div className="border-2 border-gray-200 w-full py-3 px-4 flex justify-between items-center rounded-lg gap-6">
                      <div className="flex flex-col">
                        <h3 className="font-semibold text-xl">Aumente seu ticket médio</h3>
                        <p className="text-sm">Estruture um fúnil de vendas bem alinhado e aumente seu ticket médio/lucro.</p>
                      </div>
                      <div className="bg-white text-black p-3 rounded-lg">
                      <FaFunnelDollar className="text-3xl"/>
                      </div>
                    </div>
                  </div>
                </div>
          </main>
        </div>
      </>
      }
    </div>
  );
}