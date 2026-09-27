import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import Home from "./pages/Home";
import About from "./pages/About";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Intro from "./pages/Intro.jsx";
import "./App.css";

function App() {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [introDone]);

  return (
    <>
      {!introDone && <Intro onComplete={() => setIntroDone(true)} />}

      <ReactLenis root>
        <Home />
        <About />
      </ReactLenis>
    </>
  );
}

export default App;
