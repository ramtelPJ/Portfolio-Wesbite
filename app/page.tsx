import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CinematicIntro from "@/components/portfolio/CinematicIntro";
import Hero from "@/components/portfolio/Hero";
import PlayerBio from "@/components/portfolio/PlayerBio";
import Education from "@/components/portfolio/Education";
import SkillAttributes from "@/components/portfolio/SkillAttributes";
import Projects from "@/components/portfolio/Projects";
import ExperienceTimeline from "@/components/portfolio/ExperienceTimeline";
import Achievements from "@/components/portfolio/Achievements";
import Statistics from "@/components/portfolio/Statistics";
import Contact from "@/components/portfolio/Contact";

export default function Home() {
  return (
    <>
      <CinematicIntro />
      <Navbar />
      <main>
        <Hero />
        <PlayerBio />
        <Education />
        <SkillAttributes />
        <Projects />
        <ExperienceTimeline />
        <Achievements />
        <Statistics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
