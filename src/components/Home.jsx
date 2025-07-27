import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

const taglines = [
  "From imagination to implementation — We build your ideas into real-world digital products.",
  "Bringing your concepts to life with world-class tech solutions.",
  "Innovate, iterate, and launch — your product’s journey starts here.",
  "Empowering startups and businesses to scale with modern technology.",
];

const bounceLetters = "FutureMinds".split("");

const Home = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTagline((prev) => (prev + 1) % taglines.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden px-4 sm:px-6 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      {/* Glowing Blobs */}
      <div className="absolute top-[-150px] left-[-100px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-pink-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-150px] right-[-100px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-blue-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full">
        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug sm:leading-tight mb-6 drop-shadow-lg"
          data-aos="fade-up"
        >
          Empowering <span className="text-blue-300">Innovation</span> with <br />
          <span className="text-orange-300 inline-block">
            {bounceLetters.map((letter, i) => (
              <span
                key={i}
                className="inline-block bounce-letter"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {letter}
              </span>
            ))}{" "}
            Services
          </span>
        </h1>

        {/* Rotating Tagline */}
        <p
          data-aos="fade-up"
          className={`text-base sm:text-lg md:text-xl font-light mb-8 sm:mb-10 transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {taglines[currentTagline]}
        </p>

        {/* Value Propositions */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-sm sm:text-base font-medium mb-8 sm:mb-10 px-2 sm:px-0"
          data-aos="zoom-in-up"
        >
          {[
            "🚀 Rapid MVP Development",
            "🎯 Scalable Tech Solutions",
            "💡 UI/UX & Product Strategy",
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 border border-white/20 p-4 sm:p-5 rounded-xl shadow-lg hover:shadow-xl transition backdrop-blur-md text-white"
            >
              {item}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a
            href="#services"
            className="w-full sm:w-auto text-center bg-white text-gray-900 px-8 py-3 rounded-full font-semibold shadow-xl hover:bg-gray-100 transition cursor-pointer"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-xl hover:opacity-90 transition cursor-pointer"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
