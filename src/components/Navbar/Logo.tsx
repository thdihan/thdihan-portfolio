import { jetbrainsMono } from "@/fonts";
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
                    className={`${jetbrainsMono.className} text-2xl text-secondary font-semibold flex items-center gap-2`}
                >
                    <span>
                        <span>thdihan</span>
                        <span className="text-white">.</span>
                        <span className="text-[#9B37FF]">dev</span>
                    </span>
                    {/* <span className="text-white">&gt;</span>
                    <span className="text-[#ffde37] ">blog</span> */}
                </h1>
            )}
        </>
    );
};

export default Logo;
