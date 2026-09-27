import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const slide2Ref = useRef(null);
  const slide3Ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to(slide2Ref.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "none",
        duration: 1,
      });

      tl.to(slide3Ref.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "none",
        duration: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = "ozwaldelmasterpiece@gmail.com";
    const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(
      navigator.userAgent,
    );

    if (isMobileDevice) {
      window.location.href = `mailto:${email}`;
    } else {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
        "_blank",
      );
    }
  };

  const contactInfos = [
    {
      id: "instagram",
      text: "oz_valde15",
      url: "https://www.instagram.com/oz_valde15?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      id: "email",
      text: "ozwaldelmasterpiece@gmail.com",
      url: "ozwaldelmasterpiece@gmail.com",
      onClick: handleEmailClick,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
    },
    {
      id: "whatsapp",
      text: "+212629867191",
      url: "https://wa.me/212629867191",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
    },
  ];

  return (
    <>
      <section className="about-section" ref={sectionRef}>
        <div className="about-layer layer-1">
          <img
            src={isMobile ? "/imgs/08.jpeg" : "/imgs/5.jpeg"}
            alt="pic 5"
            className="about-pic"
          />
        </div>

        <div className="about-layer layer-2" ref={slide2Ref}>
          <img
            src={isMobile ? "/imgs/09.jpeg" : "/imgs/6.jpeg"}
            alt="pic 6"
            className="about-pic"
          />
        </div>

        <div className="about-layer layer-3" ref={slide3Ref}>
          <img
            src={isMobile ? "/imgs/010.jpeg" : "/imgs/7.jpeg"}
            alt="pic 7"
            className="about-pic"
          />
        </div>
      </section>

      <div className="empty-band">
        <div className="empty-col col-left">
          <div className="empty-top-box">
            <h1 className="assil-title">The OZ-VERSE</h1>
          </div>
          <div className="empty-bottom-box">
            <p className="about-desc-text">
              The OZ-VERSE is a cinematic, psychoactive dimension where the
              gritty streets of Casablanca collide with high-concept anime
              mythos and cult cinema. Built on a foundation of heavy boom-bap,
              sliced-up traditional music samples, and raw, labyrinthine
              lyricism, it serves as the ultimate stage for character
              duality—where Saad Assil steps aside to let the untamed power of
              the OZVALDE alter ego take full control.
              <br />
              <br />
              Beyond classic hip-hop roots, his artistic identity thrives on
              constant experimentation—shifting seamlessly between vocal styles,
              complex rhyme schemes, and versatile flows. central to his
              identity is a sharp character duality, separating his everyday
              persona from an intense alter ego, a dynamic reminiscent of Boruto
              and Otsutsuki Karma. Visually and conceptually, his universe draws
              heavy inspiration from cinema and anime culture, channeling the
              raw edge of Quentin Tarantino's films alongside narrative depth.
              OZVALDE stands out as a distinct, multi-layered voice carving a
              new path in raw lyrical rap.
            </p>

            <div className="about-links-wrapper">
              {contactInfos.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={item.onClick ? item.onClick : undefined}
                  target={item.id !== "email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="about-info-link"
                >
                  <span className="about-info-icon">{item.icon}</span>
                  <span className="about-info-text">{item.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="empty-col col-right">
          <div className="right-content-wrapper">
            <div className="info-block">
              <h2 className="info-title">Saad Assil ( OZVALDE )</h2>
              <p className="info-desc">
                Saad Assil, known in the music industry as OZVALDE, is a
                22-year-old lyricist born and raised in Casablanca, Morocco.
                Representing the Dream Makers collective, OZVALDE builds his
                sound on a foundation of raw, uncompromising boom-bap, blending
                heavy traditional music samples and cultural instrumentation
                with a harsh, unvarnished delivery.
                <br />
                <br />
                Beyond classic hip-hop roots, his artistic identity thrives on
                constant experimentation—shifting seamlessly between vocal
                styles, complex rhyme schemes, and versatile flows. central to
                his identity is a sharp character duality, separating his
                everyday persona from an intense alter ego, a dynamic
                reminiscent of Boruto and Otsutsuki Karma. Visually and
                conceptually, his universe draws heavy inspiration from cinema
                and anime culture, channeling the raw edge of Quentin
                Tarantino's films alongside narrative depth. OZVALDE stands out
                as a distinct, multi-layered voice carving a new path in raw
                lyrical rap.
              </p>
            </div>

            <div className="info-block">
              <h2 className="info-title">Behind the artist</h2>
              <p className="info-desc">
                Operating in the space where raw street realism meets complex
                mental landscapes, this artist is an architect of chaotic
                harmony. Driven by a childhood fascination with intricate
                wordplay and dense soundscapes, his style is defined by sharp
                lyricism, unfiltered storytelling, and an uncompromising
                exploration of the human psyche.
                <br />
                <br />
                Unafraid to push boundaries, he treats music as both a
                confession and an experiment. Whether dissecting personal
                battles, navigating street culture, or breaking social taboos,
                his work strikes a delicate balance between technical precision
                and visceral emotion—establishing him as a bold, uncompromising
                voice in modern rap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
