"use client";
import { useEffect, useState } from "react";
import { Github, Menu, X, Sun, Moon } from "lucide-react";
import { jetbrainsMono } from "@/fonts";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

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
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setActive(false);
    };

    return (
        <>
            <div className={`${scrolled ? "h-[75px]" : "h-0"}`}></div>
            <nav
                className={`w-full ${
                    scrolled
                        ? "sticky glass border-b border-[#222f43]"
                        : "bg-transparent"
                } py-6 px-4 md:px-0`}
            >
                <div className="w-full max-w-[1260px] mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <h1
                        className={`${jetbrainsMono.className} text-2xl font-bold font-mono flex items-center gap-2`}
                    >
                        <span className="text-blue-400">thdihan</span>
                        <span className="text-white">.</span>
                        <span className="text-pink-400">dev</span>
                    </h1>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <ul className="flex gap-8 items-center">
                            <li>
                                <button
                                    onClick={() => scrollToSection("hero")}
                                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 font-medium"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("work")}
                                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 font-medium"
                                >
                                    Portfolio
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("skills")}
                                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 font-medium"
                                >
                                    Skills
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("blog")}
                                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 font-medium"
                                >
                                    Blog
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Right side buttons */}
                    <div className="flex gap-4 items-center">
                        {/* Dark mode toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        >
                            {darkMode ? (
                                <Sun className="w-5 h-5 text-white" />
                            ) : (
                                <Moon className="w-5 h-5 text-white" />
                            )}
                        </button>

                        {/* GitHub button */}
                        <button
                            onClick={() =>
                                window.open(
                                    "https://github.com/thdihan",
                                    "_blank"
                                )
                            }
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl flex items-center gap-2 font-medium transition-colors d"
                        >
                            <Github className="w-4 h-4" />
                            <span
                                className={`${jetbrainsMono.className} hidden sm:inline`}
                            >
                                github.com / thdihan
                            </span>
                        </button>

                        {/* Mobile menu toggle */}
                        <button
                            onClick={() => setActive(!active)}
                            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                        >
                            {active ? (
                                <X className="w-6 h-6 text-white" />
                            ) : (
                                <Menu className="w-6 h-6 text-white" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`${
                        active
                            ? "block absolute top-[65px] left-0 w-full glass border-b border-[#222f43]"
                            : "hidden"
                    } md:hidden`}
                >
                    <ul className="flex flex-col gap-4 py-6 px-4">
                        <li>
                            <button
                                onClick={() => scrollToSection("hero")}
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 font-medium"
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection("work")}
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 font-medium"
                            >
                                Portfolio
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection("skills")}
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 font-medium"
                            >
                                Skills
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection("blog")}
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 font-medium"
                            >
                                Blog
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
