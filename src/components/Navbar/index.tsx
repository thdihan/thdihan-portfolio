"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import NavElement from "./NavElement";
import NavButtons from "./NavButtons";

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
        <>
            <div className={`${scrolled ? "h-[75px]" : "h-0"}`}></div>
            <nav
                className={`w-full ${
                    scrolled ? "sticky border-b border-[#222f43]" : ""
                } bg-primary py-6`}
            >
                <div
                    className={`w-full max-w-[1260px] mx-auto  flex justify-between items-center`}
                >
                    <Logo text="thdihan._" />

                    <NavElement />

                    <NavButtons />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
