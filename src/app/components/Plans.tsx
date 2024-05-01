import { ReactNode } from "react";
import { MdVerified } from "react-icons/md";

type Props = {
    children: ReactNode;
    bestseller?: boolean;
    titleplano: string;
    plano: string
}

export const Plans = ({children, bestseller, plano, titleplano}: Props) => {
    return (
        <div className="flex flex-col text-black">
        <div className={`${bestseller ? 'animated-gradient' : 'bg-black'} rounded-tl-lg rounded-tr-lg flex items-center justify-center py-1`}>
            <p className="font-semibold text-white uppercase text-sm ss:text-base flex items-center gap-2">
                <MdVerified />
                {titleplano}
            </p>
        </div>
        <div className={`${bestseller ? 'border-2 border-indigo-200 relative' : ''} bg-white p-5 rounded-bl-lg rounded-br-lg flex flex-col gap-3 shadow-md`}>
            <h3 className="text-black font-semibold text-2xl">{plano}</h3>
            {children}
        </div>
        </div>
    );
}