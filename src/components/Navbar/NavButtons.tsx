"use client";
import React, { useState } from "react";
import { AlignJustify, Github, Moon, Sun, X } from "lucide-react";
import { jetbrainsMono } from "@/fonts";

type NavButtonsProps = {
    active: boolean;
    setActive: (active: boolean) => void;
};
const NavButtons = ({ active, setActive }: NavButtonsProps) => {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <div className="flex gap-2 md:gap-6 items-center">
            {/* Dark Mode  */}
            <div className="order-2">
                {darkMode ? (
                    <Sun
                        onClick={() => setDarkMode(false)}
                        className="h-6  w-6 text-white cursor-pointer"
                    />
                ) : (
                    <Moon
                        onClick={() => setDarkMode(true)}
                        className="h-6  w-6  text-white cursor-pointer"
                    />
                )}
            </div>

            {/* Github button */}
            <div className="order-1">
                <button
                    onClick={() => {
                        console.log("Github");
                        window.open("https://github.com/thdihan", "_blank");
                        // router.push("https://github.com/thdihan");
                    }}
                    className="bg-secondary text-sm px-2 py-1 md:text-lg md:px-4 md:py-2  rounded-md flex justify-between items-center gap-2 font-semibold"
                >
                    <Github className="w-4 h-4 md:w-6 md:h-6" />
                    <span className={`${jetbrainsMono.className}`}>
                        thdihan
                    </span>
                </button>
            </div>

            {/* Responsive Navbar toggle button */}
            <div className="md:hidden order-3">
                <button
                    onClick={() => {
                        setActive(!active);
                    }}
                    className="align-middle"
                >
                    <span className={`${jetbrainsMono.className} `}>
                        {active ? (
                            <X className="h-6 w-6  text-white" />
                        ) : (
                            <AlignJustify className="h-6 w-6 align-middle text-white cursor-pointer" />
                        )}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default NavButtons;
