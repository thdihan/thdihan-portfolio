"use client";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

const Blogs = () => {
    const blogPosts = [
        {
            title: "Building Scalable React Applications",
            excerpt:
                "Learn how to structure and optimize React applications for better performance and maintainability as your project grows.",
            date: "Dec 15, 2024",
            readTime: "5 min read",
            category: "React",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
            slug: "building-scalable-react-applications",
        },
        {
            title: "The Future of Web Development",
            excerpt:
                "Exploring emerging trends in web development including AI integration, edge computing, and the evolution of JavaScript frameworks.",
            date: "Dec 10, 2024",
            readTime: "7 min read",
            category: "Web Development",
            image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80",
            slug: "future-of-web-development",
        },
        {
            title: "TypeScript Best Practices",
            excerpt:
                "A comprehensive guide to writing clean, type-safe TypeScript code with real-world examples and advanced patterns.",
            date: "Dec 5, 2024",
            readTime: "6 min read",
            category: "TypeScript",
            image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80",
            slug: "typescript-best-practices",
        },
        {
            title: "Mastering CSS Grid and Flexbox",
            excerpt:
                "Deep dive into modern CSS layout techniques with practical examples and tips for creating responsive designs.",
            date: "Nov 28, 2024",
            readTime: "4 min read",
            category: "CSS",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
            slug: "mastering-css-grid-flexbox",
        },
    ];

    return (
        <section id="blog" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Latest <span className="text-gradient">Blog Posts</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Sharing my thoughts on technology, development
                        practices, and industry insights.
                    </p>
                </div>

                {/* Featured Post */}
                <div className="mb-12">
                    <div className="glass rounded-xl overflow-hidden hover-glow transition-all duration-500 group cursor-pointer">
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <img
                                    src={blogPosts[0].image}
                                    alt={blogPosts[0].title}
                                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="md:w-1/2 p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium">
                                        Featured
                                    </span>
                                    <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium">
                                        {blogPosts[0].category}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                    {blogPosts[0].title}
                                </h3>

                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {blogPosts[0].excerpt}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {blogPosts[0].date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {blogPosts[0].readTime}
                                        </div>
                                    </div>

                                    <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                                        Read More
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {blogPosts.slice(1).map((post, index) => (
                        <div
                            key={index}
                            className="group glass rounded-xl overflow-hidden hover-glow transition-all duration-500 cursor-pointer"
                        >
                            <div className="relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between text-xs text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {post.readTime}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Posts Button */}
                <div className="text-center">
                    <button className="glass hover:bg-white/10 text-white px-8 py-3 rounded-lg flex items-center gap-2 font-medium transition-all duration-300 mx-auto">
                        <BookOpen className="w-5 h-5" />
                        View All Posts
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
