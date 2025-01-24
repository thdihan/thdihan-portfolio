"use client";
import React, { useState } from "react";
import { Github, Moon, Sun } from "lucide-react";
import { jetbrainsMono } from "@/fonts";

const NavButtons = () => {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <div className="flex gap-4 items-center">
            {/* Dark Mode  */}
            <div>
                {darkMode ? (
                    <Sun
                        onClick={() => setDarkMode(false)}
                        className="h-6  w-6 text-white cursor-pointer"
                    />
                ) : (
                    <Moon
                        onClick={() => setDarkMode(true)}
                        className="h-6  w-6 text-white cursor-pointer"
                    />
                )}
            </div>

            <div>
                <button
                    onClick={() => {
                        console.log("Github");
                        window.open("https://github.com/thdihan", "_blank");
                        // router.push("https://github.com/thdihan");
                    }}
                    className="bg-secondary px-4 py-2 rounded-md flex justify-between gap-2 font-semibold"
                >
                    <Github />{" "}
                    <span className={`${jetbrainsMono.className}`}>
                        thdihan
                    </span>
                </button>
            </div>
        </div>
    );
};

export default NavButtons;
