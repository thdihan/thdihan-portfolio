"use client";

import { Github, Star, GitFork, BookOpen, Calendar, Clock } from "lucide-react";

const GitHubStats = () => {
    const repositories = [
        {
            name: "dplab_106",
            description: "Console Based JAVA Application for ride sharing",
            language: "Java",
            languageColor: "#b07219",
            stars: 2,
            forks: 1,
        },
        {
            name: "Codeforces_Solution_Finder_Extension",
            description: "No description provided",
            language: "JavaScript",
            languageColor: "#f1e05a",
            stars: 1,
            forks: 0,
        },
        {
            name: "Daily_Cat_Extension",
            description: "No description provided",
            language: "HTML",
            languageColor: "#e34c26",
            stars: 2,
            forks: 1,
        },
        {
            name: "vmath",
            description:
                "Java math library with more efficiency and lots of methods",
            language: "Java",
            languageColor: "#b07219",
            stars: 3,
            forks: 2,
        },
        {
            name: "Solvish-Refactored",
            description: "No description provided",
            language: "Java",
            languageColor: "#b07219",
            stars: 0,
            forks: 0,
        },
        {
            name: "data-Structure-using-cpp",
            description: "No description provided",
            language: "C++",
            languageColor: "#f34b7d",
            stars: 2,
            forks: 0,
        },
    ];

    const achievements = [
        {
            title: "Rainbow Lang User",
            points: "22pt",
            color: "text-purple-400",
        },
        { title: "Ultra Committer", points: "548pt", color: "text-green-400" },
        { title: "Ultra Repo Creator", points: "59pt", color: "text-blue-400" },
        { title: "You are a Star", points: "30pt", color: "text-yellow-400" },
        { title: "Dynamic User", points: "23pt", color: "text-blue-400" },
        { title: "High Issuer", points: "23pt", color: "text-red-400" },
    ];

    return (
        <section id="github-stats" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My <span className="text-blue-400">GitHub</span> wanna
                        say something...
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Side - Stats Overview */}
                    <div className="lg:col-span-1">
                        <div className="glass rounded-xl p-6 mb-6">
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">
                                        1,180
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        Total Contributions
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        Aug 14, 2022 - Present
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="relative w-16 h-16 mx-auto mb-2">
                                        <svg className="w-16 h-16 transform -rotate-90">
                                            <circle
                                                cx="32"
                                                cy="32"
                                                r="28"
                                                stroke="#374151"
                                                strokeWidth="4"
                                                fill="none"
                                            />
                                            <circle
                                                cx="32"
                                                cy="32"
                                                r="28"
                                                stroke="#f97316"
                                                strokeWidth="4"
                                                fill="none"
                                                strokeDasharray="176"
                                                strokeDashoffset="88"
                                                className="transition-all duration-300"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-xl font-bold text-orange-500">
                                                2
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-sm text-orange-500 font-medium">
                                        Current Streak
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        Jun 4 - Jun 5
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">
                                        11
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        Longest Streak
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        Mar 16, 2023 - Mar 26, 2023
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass rounded-xl p-6">
                            <h3 className="text-blue-400 text-lg font-semibold mb-4">
                                Tanvir Hossain Dihan&apos;s GitHub Stats
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <Star className="w-4 h-4 text-yellow-400" />
                                        <span className="text-gray-300">
                                            Total Stars Earned:
                                        </span>
                                    </div>
                                    <span className="text-white font-semibold">
                                        30
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-blue-400" />
                                        <span className="text-gray-300">
                                            Total Commits (2025):
                                        </span>
                                    </div>
                                    <span className="text-white font-semibold">
                                        528
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <GitFork className="w-4 h-4 text-green-400" />
                                        <span className="text-gray-300">
                                            Total PRs:
                                        </span>
                                    </div>
                                    <span className="text-white font-semibold">
                                        6
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <BookOpen className="w-4 h-4 text-red-400" />
                                        <span className="text-gray-300">
                                            Total Issues:
                                        </span>
                                    </div>
                                    <span className="text-white font-semibold">
                                        23
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-purple-400" />
                                        <span className="text-gray-300">
                                            Contributed to (last year):
                                        </span>
                                    </div>
                                    <span className="text-white font-semibold">
                                        3
                                    </span>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-center">
                                <div className="w-20 h-20 rounded-full border-4 border-blue-500 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-blue-400">
                                        B-
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Repositories and Achievements */}
                    <div className="lg:col-span-2">
                        {/* Repositories Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {repositories.map((repo, index) => (
                                <div
                                    key={index}
                                    className="glass rounded-lg p-4 hover-glow transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <h4 className="text-blue-400 font-semibold text-sm hover:underline cursor-pointer">
                                            {repo.name}
                                        </h4>
                                        <BookOpen className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                                        {repo.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div
                                                className="w-3 h-3 rounded-full"
                                                style={{
                                                    backgroundColor:
                                                        repo.languageColor,
                                                }}
                                            ></div>
                                            <span className="text-gray-300 text-xs">
                                                {repo.language}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-3 h-3 text-gray-400" />
                                                <span className="text-gray-400 text-xs">
                                                    {repo.stars}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <GitFork className="w-3 h-3 text-gray-400" />
                                                <span className="text-gray-400 text-xs">
                                                    {repo.forks}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Achievements */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className="glass rounded-lg p-4 text-center"
                                >
                                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gray-700 flex items-center justify-center">
                                        <span className="text-xl font-bold text-gray-300">
                                            A
                                        </span>
                                    </div>
                                    <h5 className="text-white font-semibold text-sm mb-1">
                                        {achievement.title}
                                    </h5>
                                    <p
                                        className={`text-xs ${achievement.color}`}
                                    >
                                        {achievement.points}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Visit GitHub Button */}
                        <div className="text-center">
                            <button className="glass hover:bg-white/10 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-all duration-300 mx-auto">
                                <Github className="w-5 h-5" />
                                Visit My GitHub
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GitHubStats;
