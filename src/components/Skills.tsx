"use client";

import {
    Code,
    Database,
    Smartphone,
    Server,
    Globe,
    Monitor,
    Wrench,
} from "lucide-react";

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: [
                "C",
                "C++",
                "C#",
                "JavaScript",
                "TypeScript",
                "Python",
                "SQL",
                "Bash",
                "Java",
                "Dart",
                "HTML",
                "CSS",
                "Markdown",
            ],
        },
        {
            title: "Database Administration",
            skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
        },
        {
            title: "Frameworks & Libraries",
            skills: [
                "Node.js",
                "Express.js",
                "React.js",
                "Next.js",
                "Flutter",
                "Tailwind CSS",
                "Bootstrap",
                "Material UI",
            ],
        },
        {
            title: "Tools & Platforms :",
            skills: [
                "Git & Github",
                "Prisma",
                "Mongoose",
                "Redux",
                "Docker",
                "Linux(Ubuntu, Fedora, AlmaLinux)",
            ],
        },
    ];

    const techIcons = [
        {
            icon: <Code className="w-8 h-8" />,
            name: "Code",
            color: "text-blue-400",
        },
        {
            icon: <Globe className="w-8 h-8" />,
            name: "Web",
            color: "text-green-400",
        },
        {
            icon: <Database className="w-8 h-8" />,
            name: "Database",
            color: "text-yellow-400",
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            name: "Mobile",
            color: "text-purple-400",
        },
        {
            icon: <Server className="w-8 h-8" />,
            name: "Backend",
            color: "text-red-400",
        },
        {
            icon: <Monitor className="w-8 h-8" />,
            name: "Frontend",
            color: "text-cyan-400",
        },
        {
            icon: <Wrench className="w-8 h-8" />,
            name: "Tools",
            color: "text-orange-400",
        },
        {
            icon: <Code className="w-8 h-8" />,
            name: "API",
            color: "text-pink-400",
        },
    ];

    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        For some people{" "}
                        <span className="text-blue-400">Learning</span> is a{" "}
                        <span className="text-blue-400">Passion</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Technologies and tools I work with
                    </p>
                </div>

                {/* Skills Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Tech Icons Grid */}
                    <div className="order-2 lg:order-1">
                        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-4 gap-6">
                            {techIcons.map((tech, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col items-center justify-center p-4 glass rounded-xl hover-glow transition-all duration-300 aspect-square"
                                >
                                    <div
                                        className={`${tech.color} group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        {tech.icon}
                                    </div>
                                    <span className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Skills Categories */}
                    <div className="order-1 lg:order-2 space-y-8">
                        {skillCategories.map((category, index) => (
                            <div
                                key={index}
                                className="glass rounded-xl p-6 hover-glow transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map(
                                        (skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium hover:bg-blue-600/30 hover:scale-105 transition-all duration-200 cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
