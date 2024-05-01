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
import { FaDiscord } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { HiCheck } from "react-icons/hi";
import { ItensPlan } from "./components/ItensPlans";
import { Plans } from "./components/Plans";
import Link from "next/link";
import { FaLock } from "react-icons/fa";

export default function Page() {
  
  const [desktop, setDesktop] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(true);
  const [showBtn, setShowBtn] = useState<boolean>(false);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setShowBtn(true);
    }, 4000);
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
                <div className="grid grid-cols-2 gap-5 w-full px-3 mt-5 relative items-center">
                  <div className="flex flex-col gap-3">
                    <h2 className="w-full font-semibold text-3xl">Aprenda o Blackhat</h2>
                    <ul className="flex flex-col gap-2">
                      <li>Clone páginas/ofertas</li>
                      <li>Crie docs e aprove suas contas</li>
                      <li>Tenha acesso a scripts exclusivos</li>
                    </ul>
                  </div>
                  <Image src={'/mascara.png'} alt="máscara" width={300} height={0} className="absolute -top-5 -right-24" />
                </div>
                <div
                    x-data="{}"
                    x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
                    className=" w-screen mt-16 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] px-5"
                >
                    <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        <li>
                            <Image src="/1.png" alt="appmax" width={300} height={0}/>
                        </li>
                        <li>
                        <Image src="/2.png" alt="appmax" width={300} height={0}/>
                        </li>
                        <li>
                        <Image src="/3.png" alt="appmax" width={300} height={0}/>
                        </li>
                        <li>
                        <Image src="/4.png" alt="appmax" width={300} height={0}/>
                        </li>
                        <li>
                        <Image src="/5.png" alt="appmax" width={300} height={0}/>
                        </li>
                        <li>
                        <Image src="/6.png" alt="appmax" width={300} height={0}/>
                        </li>
                        <li>
                        <Image src="/7.png" alt="appmax" width={300} height={0}/>
                        </li>
                        <li>
                        <Image src="/4.png" alt="appmax" width={300} height={0}/>
                        </li>
                    </ul>     
                    <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        <li>
                            <Image src="/6.png" alt="appmax" width={300} height={0}/>
                        </li>
                        <li>
                        <Image src="/1.png" alt="appmax" width={300} height={0}/>
                        </li>
                        <li>
                        <Image src="/2.png" alt="appmax" width={300} height={0}/>
                        </li>
                        <li>
                        <Image src="/3.png" alt="appmax" width={300} height={0}/>
                        </li>
                        <li>
                        <Image src="/4.png" alt="appmax" width={300} height={0}/>
                        </li>
                        <li>
                        <Image src="/5.png" alt="appmax" width={300} height={0}/>
                        </li>
                        <li>
                        <Image src="/6.png" alt="appmax" width={300} height={0}/>
                        </li>
                        <li>
                        <Image src="/7.png" alt="appmax" width={300} height={0}/>
                        </li>
                    </ul>                
                </div>
                <div className="flex flex-col items-center gap-5 px-3 mt-5 mb-10">
                  <h2 className="font-semibold text-center capitalize text-3xl">Tenha acesso VIP aos nossos canais de conteúdo</h2>
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-3 rounded-lg">
                        <FaDiscord className="text-4xl text-[#535FEE]"/>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                      <IoLogoWhatsapp className="text-4xl text-[#4BC658]"/>
                      </div>
                      {/* <div className="bg-[#09EB0B] p-3 rounded-lg">
                      <IoIosStar className="text-4xl text-white"/>
                      </div> */}
                    </div>
                    <p className="text-center text-lg">Faremos call 3 vezes por semana até todos conteúdos serem passados, acesso vitalício ao conteúdo gravado, acesso VIP em nossa comunidade do Discord e Whatsapp, conteúdo atualizado e acesso ao nosso drive pessoal de cursos, conteúdos, temas e scripts!</p>
                </div>
                <div className="flex flex-col items-center px-3 gap-5">
                <h2 className="font-semibold text-center capitalize text-3xl">Planos e conteúdos</h2>
                <Plans plano="Conteúdo Essencial" titleplano="Para quem está Começando">
              <p className="h-fit ss:h-24 ss:text-base ">Tudo que você precisa saber para vender todos os dias com uma margem de lucro alta.</p>
              <hr />
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Como criar e estruturar uma loja de sucesso"}/>
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Passo a passo para criar sua marca"}/>
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Estratégias SEO (Vendas no orgânico)"}/>
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Análise de concorrentes"}/>
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Mineração - como e onde encontrar produtos"}/>
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Esteira de Produtos personalizada Trello"}/>
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Como criar uma oferta"}/>
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Aprenda a anunciar no Meta ADS, Tiktok ADS e Google ADS"}/>
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Como não ter produtos taxados"}/>
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Organização Empresarial"}/>
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Ferramentas de automação"}/>
              <hr />
              <div className="flex flex-col gap-1 justify-center">
                  <p className="font-semibold text-green-500">Bônus Exclusivos:</p>
                  <ul className="flex flex-col gap-1 text-green-500 capitalize">
                    <li>+ fornecedores exclusivos</li>
                    <li>+ Organizando colunas de métricas</li>
                    <li>+ Contingência</li>
                    <li>+ 10 temas premium</li>
                  </ul>
              </div>
              <hr />
              <div className="flex flex-col gap-1">
                <p>De <span className="line-through">497,00</span> Por apenas:</p>
                <div className="flex justify-between items-center flex-wrap">
                  <p className="font-semibold text-3xl">R$ 197,00</p>
                </div>
                <p className="text-sm">Ou apenas 12x de R$16,40</p>
              </div>
              <hr />
              <Link href={'https://pay.kiwify.com.br/6IE57zh'} className="bg-black text-white px-4 py-3 rounded-lg flex justify-center font-semibold hover:opacity-90 transition-all ease-in-out items-center gap-2">
                <FaLock />
                <p>Começar Agora</p>
            </Link>
            </Plans>
            <Plans plano="Conteúdo Avançado" bestseller={true} titleplano="Para quem Fatura + de 50K por mês">
              <p className="h-fit ss:h-24 ss:text-base">Incluído Tudo do plano Essencial + informações abaixo:</p>
              <hr />
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Facebook ADS avançado"}/>
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Google ADS avançado"}/>
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Tiktok ADS avançado"}/>
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Estrutura de Teste de Produto(Tiktok, Facebook, Google)"}/>
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Escala (tiktok, facebook, google)"}/>
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Contingência (avançada)"}/>
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Scripts personalizados"}/>
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Estruturando um Funil automático"}/>
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Branding de sucesso"}/>
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Análise de Público"}/>
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Remarketing Avançado"}/>
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Recuperação de Vendas"}/>
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Como fazer uma loja passar confiança"}/>
              <ItensPlan icon={<HiCheck className="text-xl" />} text={"Como ter um Suporte de sucesso"}/>
              <hr />
              <div className="flex flex-col gap-1 justify-center">
                  <p className="font-semibold text-green-500">Bônus Exclusivos:</p>
                  <ul className="flex flex-col gap-1 text-green-500 capitalize">
                    <li>+ Google Tag Manager</li>
                    <li>+ fornecedor nacional (o segredo de quem escala)</li>
                    <li>+ Ferramentas Avançadas</li>
                    <li>+ Prompts e IAs para conteúdo</li>
                    <li>+ Como fechar com influêncers</li>
                    <li>+ tráfego UGC</li>
                    <li>+ Frete Exclusivo</li>
                    <li>+ Close Friends Vitalício</li>
                  </ul>
              </div>
              <hr />
              <div className="flex justify-between items-center gap-1">
                <div className="flex flex-col gap-1">
                  <p>De <span className="line-through">997,00</span> Por apenas:</p>
                  <p className="font-semibold text-3xl">R$ 697,00</p>
                  <p className="text-sm">Ou apenas 12x de R$58,08</p>
                </div>
                <span className="animated-gradient text-white px-2 py-1 rounded-md">
                      30% OFF
                </span>
              </div>
              <hr />
              <Link href={'https://pay.kiwify.com.br/tZLNK75'} className="animated-gradient text-white px-4 py-3 rounded-lg flex justify-center font-semibold hover:opacity-90 transition-all ease-in-out items-center gap-2">
                <FaLock />
                <p>Começar Agora</p>
            </Link>
            </Plans>
                </div>
                <div className="my-2 flex justify-center items-center">
                  <p>Desenvolvido por mim né😂 - @eusoier</p>
                </div>
          </main>
        </div>
      </>
      }
    </div>
  );
}