"use client";
import { useEffect, useState } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateCursor);

        return () => {
            window.removeEventListener("mousemove", updateCursor);
        };
    }, []);

    return (
        <>
            {/* Main glowing circle */}
            <div
                className="fixed pointer-events-none z-50 mix-blend-difference"
                style={{
                    left: `${position.x - 20}px`,
                    top: `${position.y - 20}px`,
                }}
            >
                <div className="w-10 h-10 border-2 border-blue-400 rounded-full animate-pulse" />
            </div>

            {/* Small solid dot at mouse position */}
            <div
                className="fixed pointer-events-none z-50"
                style={{
                    left: `${position.x - 2}px`,
                    top: `${position.y - 2}px`,
                }}
            >
                <div className="w-1 h-1 bg-blue-400 rounded-full" />
            </div>
        </>
    );
};

export default CustomCursor;
