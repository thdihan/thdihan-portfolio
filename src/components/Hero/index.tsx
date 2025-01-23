"use client";
import { poppins, robotoMono } from "@/fonts";
import Particles from "../Particles";

const Hero = () => {
    return (
        <div className="w-full h-[100vh-72px] flex items-center py-64 justify-center">
            <Particles />
            <div>
                <h1
                    className={`${poppins.className} text-white  text-4xl md:text-8xl text-center`}
                >
                    Tanvir Hossain Dihan
                </h1>
                <p
                    className={`${robotoMono.className} text-white text-2xl text-center py-8 uppercase `}
                >
                    Software Engineer, Full Stack Web & App Developer.
                </p>
            </div>
        </div>
    );
};

export default Hero;
