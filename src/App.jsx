import './components.css';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Volunteering from './components/Volunteering';
import TechStack from './components/TechStack';
import Courses from './components/Courses';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Volunteering />
      <TechStack />
      <Courses />
      <Contact />
    </>
  );
}
