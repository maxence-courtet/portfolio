import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import EmailSection from "./components/EmailSection";
import AchievementsSection from "./components/AchievementSection";


export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <NavBar/>
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection/>
          <AchievementsSection/>
          <AboutSection/>
          <EmailSection />
        </div>
        <Footer/>
      </main>
  );
}
