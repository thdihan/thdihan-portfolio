"use client";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const Work = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filterCategories = [
        "All",
        "React",
        "Next.js",
        "Flutter",
        "Node.js",
        "TypeScript",
        "Python",
    ];

    const projects = [
        {
            title: "E-Commerce Platform",
            description:
                "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
            technologies: ["React", "Node.js", "MongoDB", "TypeScript"],
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
            github: "https://github.com/thdihan",
            live: "https://demo.example.com",
            category: ["React", "Node.js", "TypeScript"],
        },
        {
            title: "Task Management App",
            description:
                "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
            github: "https://github.com/thdihan",
            live: "https://demo.example.com",
            category: ["Next.js", "TypeScript"],
        },
        {
            title: "Mobile Banking App",
            description:
                "A secure mobile banking application built with Flutter, featuring biometric authentication, transaction history, and real-time notifications.",
            technologies: ["Flutter", "Dart", "Firebase"],
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
            github: "https://github.com/thdihan",
            live: "https://demo.example.com",
            category: ["Flutter"],
        },
        {
            title: "AI Data Analytics Platform",
            description:
                "A Python-based analytics platform that processes large datasets and provides AI-powered insights with beautiful data visualizations.",
            technologies: [
                "Python",
                "Django",
                "Machine Learning",
                "PostgreSQL",
            ],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            github: "https://github.com/thdihan",
            live: "https://demo.example.com",
            category: ["Python"],
        },
        {
            title: "Real-time Chat Application",
            description:
                "A modern chat application with real-time messaging, file sharing, and video calls built with Socket.io and React.",
            technologies: ["React", "Node.js", "Socket.io", "TypeScript"],
            image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80",
            github: "https://github.com/thdihan",
            live: "https://demo.example.com",
            category: ["React", "Node.js", "TypeScript"],
        },
        {
            title: "Portfolio Website Builder",
            description:
                "A Next.js application that allows users to create beautiful portfolio websites with drag-and-drop functionality and custom themes.",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
            github: "https://github.com/thdihan",
            live: "https://demo.example.com",
            category: ["Next.js", "TypeScript"],
        },
    ];

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((project) =>
                  project.category.includes(activeFilter)
              );

    return (
        <section id="work" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My <span className="text-gradient">Portfolio</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                        Here are some of the projects I&apos;ve worked on. Each
                        one represents a unique challenge and learning
                        experience.
                    </p>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {filterCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                    activeFilter === category
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                                        : "glass text-gray-400 hover:text-white hover:bg-white/10"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="group glass rounded-xl overflow-hidden hover-glow transition-all duration-500"
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Overlay buttons */}
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button
                                        onClick={() =>
                                            window.open(
                                                project.github,
                                                "_blank"
                                            )
                                        }
                                        className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors"
                                    >
                                        <Github className="w-5 h-5 text-white" />
                                    </button>
                                    <button
                                        onClick={() =>
                                            window.open(project.live, "_blank")
                                        }
                                        className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5 text-white" />
                                    </button>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map(
                                        (tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        )
                                    )}
                                </div>

                                {/* Action buttons */}
                                <div className="flex gap-3">
                                    <button
                                        onClick={() =>
                                            window.open(
                                                project.github,
                                                "_blank"
                                            )
                                        }
                                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        <Github className="w-4 h-4" />
                                        Code
                                    </button>
                                    <button
                                        onClick={() =>
                                            window.open(project.live, "_blank")
                                        }
                                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show message when no projects match filter */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-400 text-lg">
                            No projects found for &quot;{activeFilter}&quot;.
                            Try selecting a different filter.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Work;
