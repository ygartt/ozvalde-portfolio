import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/Intro.css";

function Intro({ onComplete }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    tl.fromTo(
      ".intro-logo",
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power2.inOut" },
    )
      .to(
        ".intro-bg-red",
        {
          y: "0%",
          duration: 0.8,
          ease: "power4.inOut",
        },
        "+=2",
      )
      .to(".intro-container", {
        y: "-100%",
        duration: 0.8,
        ease: "power4.inOut",
      });
  }, [onComplete]);

  return (
    <div className="intro-container" ref={containerRef}>
      <div className="intro-bg-black">
        <img src="/imgs/icon.png" alt="Logo" className="intro-logo" />
      </div>
      <div className="intro-bg-red"></div>
    </div>
  );
}

export default Intro;
