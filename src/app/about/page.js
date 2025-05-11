import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkExperience from "@/components/WorkExperience";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

export default function Home() {
    return (
        <main className="min-h-screen bg-black transition-colors duration-300">
            <AboutSection/>
            {/*<WorkExperience />*/}
        </main>
    );
}
