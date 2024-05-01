import { ReactNode } from "react";

type Props = {
    icon: ReactNode;
    text: string;
    not?: boolean;
}

export const ItensPlan = ({icon ,text, not}: Props) => {
    return(
        <p className={`${not ? 'line-through text-gray-500' : ''} flex items-center gap-2`}>
            {icon}
            {text}
        </p>
    );
}