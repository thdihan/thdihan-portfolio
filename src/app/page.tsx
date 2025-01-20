import { poppins } from "@/fonts";

export default function Home() {
    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            <h1
                className={`${poppins.className} text-white  text-4xl md:text-8xl text-center`}
            >
                Tanvir Hossain Dihan
            </h1>
        </div>
    );
}
