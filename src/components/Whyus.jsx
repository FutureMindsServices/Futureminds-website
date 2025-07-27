import React, { useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Whyus = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section
      id="whyus"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a] px-4 py-20 sm:px-6 md:px-12 lg:px-24 text-white"
    >
      {/* Decorative Blur Circles */}
      <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl top-[-150px] left-[-150px] z-0"></div>
      <div className="absolute w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-3xl bottom-[-200px] right-[-150px] z-0"></div>

      {/* Large Background Title */}
      <h1 className="absolute text-[70px] sm:text-[100px] md:text-[160px] lg:text-[200px] font-extrabold text-white/5 top-10 left-6 sm:left-12 select-none z-0">
        WHY US
      </h1>

      {/* Main Card */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        className="relative z-10 max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl px-6 py-14 md:py-20 shadow-2xl border border-white/20 mt-32"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-center mb-8">
          Why Choose FutureMind Services?
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-gray-200 text-center max-w-3xl mx-auto mb-10"
        >
          We’re not just another service provider; we’re your innovation partner.
          FutureMind stands apart because we deliver more than solutions —
          we deliver confidence, trust, and technology that scales with your vision.
        </motion.p>

        {/* Feature Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto mt-8"
        >
          {[
            "Tailored Solutions",
            "Cutting-Edge Technology",
            "Transparent Process",
            "Dedicated Support",
          ].map((item, index) => (
            <motion.div key={index} variants={fadeInUp} className="flex items-center gap-4">
              <CheckCircleIcon className="w-8 h-8 text-blue-400 flex-shrink-0" />
              <p className="text-gray-200 text-lg font-medium">{item}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={fadeInUp} className="text-center mt-12">
          <p className="text-gray-300 text-lg mb-6">
            We don’t just build projects — we build lasting relationships.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Let’s Connect
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Whyus;
