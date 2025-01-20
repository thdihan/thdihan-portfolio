"use client";
import { helvatica } from "@/fonts/CustomFont";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Switch from "@mui/joy/Switch";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
    return (
        <nav
            className={`w-full ${
                scrolled ? "sticky border-b border-[#222f43]" : ""
            } bg-primary `}
        >
            <div
                className={` w-full max-w-[1100px] mx-auto p-4 flex justify-between items-center`}
            >
                <h1
                    className={`${helvatica.className} text-2xl text-secondary font-bold`}
                >
                    thdihan._
                </h1>

                <ul className="flex gap-4">
                    <li>
                        <Link href={"/"} className="text-[#7f92b0] text-sm">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"} className="text-[#7f92b0] text-sm">
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"} className="text-[#7f92b0] text-sm">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"} className="text-[#7f92b0] text-sm">
                            Contact Me
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"} className="text-[#7f92b0] text-sm">
                            Github
                        </Link>
                    </li>
                </ul>

                <div>
                    <Switch />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
