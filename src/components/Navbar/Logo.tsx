import { helvatica } from "@/fonts/CustomFont";
import React from "react";

type Props = {
    text?: string;
    image?: string;
};

const Logo = ({ text, image }: Props) => {
    return (
        <>
            {image ? (
                <div>hello</div>
            ) : (
                <h1
                    className={`${helvatica.className} text-2xl text-secondary font-bold`}
                >
                    {text}
                </h1>
            )}
        </>
    );
};

export default Logo;
