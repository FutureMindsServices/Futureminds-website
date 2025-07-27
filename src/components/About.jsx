import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen px-4 sm:px-8 md:px-16 py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
    >
      {/* Decorative blurred circles */}
      <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-3xl bottom-[-200px] right-[-150px]" />

      {/* Faded "ABOUT" text in background */}
      <h1 className="absolute text-[80px] sm:text-[120px] md:text-[200px] font-extrabold text-white/5 top-10 left-6 select-none z-0">
        ABOUT
      </h1>

      {/* Main Content */}
      <motion.div
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={controls}
        className="relative z-10 max-w-7xl mx-auto mt-36 px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={fadeInUp}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-extrabold mb-6 text-center text-white"
          >
            Who We Are at{" "}
            <span className="text-blue-400">FutureMind Services</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-200 mb-10 text-center max-w-3xl mx-auto"
          >
            We are a forward-thinking tech consultancy helping startups and
            businesses{" "}
            <strong className="text-blue-300">
              turn bold ideas into digital reality
            </strong>
            . At FutureMind Services, innovation meets execution — seamlessly
            and scalably.
          </motion.p>

          {/* Highlights */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8"
          >
            {[
              "Client-First Mindset",
              "Cutting-Edge Technologies",
              "Reliable & Scalable Delivery",
              "Crystal Clear Communication",
              "Flexible & Agile Workflow",
              "Round-the-Clock Support",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="flex items-start space-x-3 group hover:scale-105 transition-transform"
              >
                <CheckCircleIcon className="w-6 h-6 text-blue-400 animate-pulse group-hover:text-green-400" />
                <p className="text-gray-200 font-medium">{item}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="text-center mt-14">
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              Let’s Build Something Amazing
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
