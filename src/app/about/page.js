import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Portfolio/HeroSection";
import WorkExperience from "@/components/Portfolio/WorkExperience";
import Footer from "@/components/Footer";
import AboutSection from "@/components/Portfolio/AboutSection";

export default function Home() {
    return (
        <main className="min-h-screen bg-black transition-colors duration-300">
            <AboutSection/>
            {/*<WorkExperience />*/}
        </main>
    );
}
