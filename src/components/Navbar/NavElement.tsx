import Link from "next/link";
import React from "react";

const NavElement = () => {
    return (
        <ul className="flex gap-x-12">
            <li>
                <Link
                    href={"/"}
                    className="text-[#7f92b0] text-md font-semibold"
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    href={"/"}
                    className="text-[#7f92b0] text-md font-semibold"
                >
                    About Me
                </Link>
            </li>
            <li>
                <Link
                    href={"/"}
                    className="text-[#7f92b0] text-md font-semibold"
                >
                    Portfolio
                </Link>
            </li>
            <li>
                <Link
                    href={"/"}
                    className="text-[#7f92b0] text-md font-semibold"
                >
                    Contact Me
                </Link>
            </li>
            <li>
                <Link
                    href={"/"}
                    className="text-[#7f92b0] text-md font-semibold"
                >
                    Github
                </Link>
            </li>
        </ul>
    );
};

export default NavElement;
