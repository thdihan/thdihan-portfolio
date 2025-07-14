"use client";
import {
    ArrowDown,
    Download,
    Mail,
    Github,
    Linkedin,
    Twitter,
} from "lucide-react";

const Hero = () => {
    const scrollToWork = () => {
        const element = document.getElementById("work");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            id="hero"
            className="min-h-screen flex items-center justify-center py-20 px-4"
        >
            <div className="text-center max-w-4xl mx-auto">
                {/* Animated greeting */}
                <div className="animate-fade-in-up opacity-1 animation-delay-200">
                    <p className="text-blue-400 font-mono text-lg mb-4">
                        Hi there, I am
                    </p>
                </div>

                {/* Main heading */}
                <div className="animate-fade-in-up opacity-1 animation-delay-400">
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 font-sans">
                        Tanvir Hossain{" "}
                        <span className="text-gradient">Dihan</span>
                    </h1>
                </div>

                {/* Subtitle */}
                <div className="animate-fade-in-up opacity-1 animation-delay-600">
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 font-mono uppercase tracking-wider">
                        Software Engineer, Full Stack Web & App Developer
                    </p>
                </div>

                {/* Description */}
                <div className="animate-fade-in-up opacity-1 animation-delay-800">
                    <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        I craft digital experiences that combine beautiful
                        design with powerful functionality. Passionate about
                        creating innovative solutions that make a difference.
                    </p>
                </div>

                {/* Social Links */}
                <div className="animate-fade-in-up opacity-1 animation-delay-900 flex justify-center gap-4 mb-8">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass hover:bg-white/10 p-3 rounded-full transition-all duration-300 hover-glow"
                    >
                        <Github className="w-5 h-5 text-gray-400 hover:text-white" />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass hover:bg-white/10 p-3 rounded-full transition-all duration-300 hover-glow"
                    >
                        <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass hover:bg-white/10 p-3 rounded-full transition-all duration-300 hover-glow"
                    >
                        <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
                    </a>
                </div>

                {/* CTA Buttons with more rounded corners */}
                <div className="animate-fade-in-up opacity-1 animation-delay-1000 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <button
                        onClick={scrollToWork}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl flex items-center gap-2 font-medium transition-all duration-300 hover-glow"
                    >
                        View My Work
                        <ArrowDown className="w-4 h-4" />
                    </button>

                    <button className="glass hover:bg-white/10 text-white px-8 py-3 rounded-xl flex items-center gap-2 font-medium transition-all duration-300">
                        <Download className="w-4 h-4" />
                        Download CV
                    </button>

                    <button className="border border-blue-600 hover:bg-blue-600 text-blue-400 hover:text-white px-8 py-3 rounded-xl flex items-center gap-2 font-medium transition-all duration-300">
                        <Mail className="w-4 h-4" />
                        Get In Touch
                    </button>
                </div>

                {/* Floating animation indicator */}
                <div className="animate-float">
                    <ArrowDown className="w-6 h-6 text-blue-400 mx-auto opacity-60" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
