"use client";

import { Monitor, Code, Smartphone } from "lucide-react";

const Expertise = () => {
    const expertiseAreas = [
        {
            icon: <Monitor className="w-8 h-8" />,
            title: "Software",
            subtitle: "Development",
            description:
                "Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.",
            color: "text-pink-400",
        },
        {
            icon: <Code className="w-8 h-8" />,
            title: "Frontend Dev",
            subtitle: "React, NextJS",
            description:
                "Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
            color: "text-blue-400",
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Flutter Dev",
            subtitle: "Android, iOS",
            description:
                "Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.",
            color: "text-orange-400",
        },
    ];

    return (
        <section id="expertise" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My <span className="text-blue-400">Expertise</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Areas where I have deep knowledge and extensive
                        experience
                    </p>
                </div>

                {/* Expertise Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {expertiseAreas.map((area, index) => (
                        <div
                            key={index}
                            className="glass rounded-xl p-8 hover-glow transition-all duration-300 border border-gray-600/30"
                        >
                            {/* Icon */}
                            <div className={`${area.color} mb-6`}>
                                {area.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-white mb-2">
                                <span className={area.color}>{area.title}</span>
                            </h3>
                            <h4 className="text-xl font-semibold text-white mb-4">
                                {area.subtitle}
                            </h4>

                            {/* Code-style description */}
                            <div className="font-mono text-sm text-gray-400 leading-relaxed">
                                <span className="text-gray-500">
                                    &lt;h3&gt;
                                </span>
                                <br />
                                <span className="ml-4 text-gray-300">
                                    {area.description}
                                </span>
                                <br />
                                <span className="text-gray-500">
                                    &lt;/h3&gt;
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
