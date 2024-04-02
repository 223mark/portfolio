import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="max-w-[1025px] px-4  w-full mx-auto">
        <AboutMe />
        <Projects />
      </div>
      <ContactMe />
    </>
  );
}

export default App;
