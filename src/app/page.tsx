// import Blogs from "@/components/Blogs";
import Expertise from "@/components/Expertise";
// import GitHubStats from "@/components/GithubStats";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Work from "@/components/Work";

export default function Home() {
    return (
        <div>
            <Hero />

            <Expertise />
            <Skills />
            <Work />
            {/* <GitHubStats />
            <Blogs /> */}
        </div>
    );
}
