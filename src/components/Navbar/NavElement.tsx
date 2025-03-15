import Link from "next/link";
import React from "react";

type NavElementProps = {
    active: boolean;
};
const NavElement = ({ active }: NavElementProps) => {
    return (
        <div
            className={`${
                active
                    ? "block absolute top-[75px] left-0 bg-primary w-full"
                    : "hidden"
            } md:block`}
        >
            <ul
                className={`gap-y-4 md:gap-y-0 py-4 md:py-0 md:gap-x-12 flex flex-col md:flex-row items-center`}
            >
                <li>
                    <Link
                        href={"/"}
                        className="text-[#7f92b0] text-md font-semibold hover:text-secondary duration-200"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href={"/"}
                        className="text-[#7f92b0] text-md font-semibold hover:text-secondary duration-200"
                    >
                        About Me
                    </Link>
                </li>
                <li>
                    <Link
                        href={"/"}
                        className="text-[#7f92b0] text-md font-semibold hover:text-secondary duration-200"
                    >
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link
                        href={"/"}
                        className="text-[#7f92b0] text-md font-semibold hover:text-secondary duration-200"
                    >
                        Contact Me
                    </Link>
                </li>
                <li>
                    <Link
                        href={"/"}
                        className="text-[#7f92b0] text-md font-semibold hover:text-secondary duration-200"
                    >
                        Github
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavElement;
