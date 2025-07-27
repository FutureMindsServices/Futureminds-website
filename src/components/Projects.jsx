import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  const projects = [
    {
      name: "TriumphTribe.in",
      description:
        "A modern, community-driven platform designed for engagement and connectivity.",
      link: "https://triumphtribe.in",
    },
    {
      name: "AlJaharaSteelProjects.com",
      description:
        "An industrial website showcasing services, projects, and client solutions for a steel company.",
      link: "https://aljahrasteelprojects.com/",
    },
  ];

  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");

      // Counter Animation
      let start = 0;
      const end = projects.length;
      const duration = 1000;
      const increment = end / (duration / 50);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, 50);
    }
  }, [inView, projects.length]);

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a] px-4 py-20 sm:px-6 md:px-12 lg:px-24 text-white"
    >
      {/* Background Blur Elements */}
      <div className="absolute w-[350px] h-[350px] bg-blue-400/20 rounded-full blur-[120px] top-[-120px] left-[-150px]" />
      <div className="absolute w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-[120px] bottom-[-200px] right-[-150px]" />

      {/* Faded Big Text */}
      <h1 className="absolute text-[90px] md:text-[160px] lg:text-[200px] font-extrabold text-white/5 top-12 left-10 select-none z-0">
        PROJECTS
      </h1>

      {/* Main Content */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={stagger}
        className="relative z-10 max-w-6xl w-full mx-auto bg-white/10 backdrop-blur-md rounded-3xl px-4 sm:px-6 py-14 md:py-20 shadow-2xl border border-white/20 mt-32"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
          Our Projects
        </motion.h2>

        <motion.p variants={fadeInUp} className="text-gray-300 text-lg text-center mb-8 max-w-3xl mx-auto">
          Showcasing innovation through successful project deliveries.
        </motion.p>

        {/* Project Counter */}
        <motion.p
          variants={fadeInUp}
          className="text-2xl md:text-3xl font-semibold text-blue-400 text-center mb-12"
        >
          Projects Completed: <span>{count}</span>
        </motion.p>

        {/* Project Cards */}
        <motion.div
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-6 transition-transform"
            >
              <h3 className="text-2xl font-semibold mb-2 text-white text-center">
                {project.name}
              </h3>
              <p className="text-gray-300 mb-4 text-center">
                {project.description}
              </p>
              <div className="text-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-medium transition"
                >
                  View Live
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Statement */}
        <motion.p variants={fadeInUp} className="text-gray-400 mt-12 text-lg text-center">
          More innovative projects coming soon… Yours could be next!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Projects;
