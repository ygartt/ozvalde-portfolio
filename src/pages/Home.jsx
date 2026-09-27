import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Home.css";
import Album from "./Album";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const scrollWrapperRef = useRef(null);
  const homeContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = homeContainerRef.current;

      gsap.to(container, {
        x: () => -(container.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: scrollWrapperRef.current,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          end: () => "+=" + (container.scrollWidth - window.innerWidth),
        },
      });
    }, scrollWrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="scroll-wrapper" ref={scrollWrapperRef}>
      <div className="home-container" ref={homeContainerRef}>
        <div className="home-col text-col">
          <div className="vertical-text-container">
            <span className="text-eng">OZVALDE</span>
            <span className="text-jap">ラッパー</span>
          </div>
        </div>

        <div className="home-col">
          <div className="top-box no-border"></div>
          <div className="content-area">
            <div className="content-half top-half desc-box align-bottom">
              <p className="desc-text">
                Once upon a time, in the weirdest place imaginable, a
                twelve-year-old kid heard rap for the very first time. It
                clicked immediately: complex word patterns woven into effortless
                rhyme schemes, a labyrinth of noise fitting together in
                unexpected harmony, driving listeners through emotions they had
                never felt before.
              </p>
            </div>
            <div className="content-half bottom-half pic-box">
              <img src="/imgs/2.jpeg" alt="pic2" className="card-pic" />
            </div>
          </div>
        </div>

        <div className="home-col">
          <div className="top-box title-box">
            <h1 className="top-title">Welcome to Psychoactivity</h1>
          </div>
          <div className="content-area">
            <div className="content-half top-half pic-box">
              <img src="/imgs/1.jpeg" alt="pic1" className="card-pic" />
            </div>
            <div className="content-half bottom-half desc-box align-top">
              <p className="desc-text">
                Since that moment, our hero has been sharpening his pen to
                become a true wordsmith—skirting the fine line of freedom of
                speech, navigating the haze of substance abuse, chasing
                acceptance, and breaking taboos. By glorifying street slang,
                exploring raw human nature, and emphasizing sexual themes, he
                dives headfirst into the deepest dungeons of lyricism and
                psychoactivity.
              </p>
            </div>
          </div>
        </div>

        <div className="home-col">
          <div className="top-box logo-box">
            <img src="/imgs/icon.png" alt="logo" className="logo" />
          </div>
          <div className="content-area">
            <div className="content-half top-half"></div>
            <div className="content-half bottom-half"></div>
          </div>
        </div>

        <Album />
      </div>
    </div>
  );
};

export default Home;
