import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { CursorFollower } from './components/CursorFollower';
import { Snowfall } from './components/Snowfall';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Education } from './sections/Education';
import { Thesis } from './sections/Thesis';
import { References } from './sections/References';
import { Contact } from './sections/Contact';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Snowfall />
      <CursorFollower />
      <Nav />

      <main id="main-content" className="app-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Thesis />
        <References />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
