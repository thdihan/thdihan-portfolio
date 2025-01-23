import Link from "next/link";
import React from "react";

const NavElement = () => {
    return (
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
    );
};

export default NavElement;
