import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
  const [activeService, setActiveService] = useState("Web Development & Maintenance");
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const services = [
    {
      title: "Web Development & Maintenance",
      description:
        "We build responsive, fast, and visually stunning static & dynamic websites tailored to your brand, with 3 months of free website maintenance.",
      points: [
        "Responsive on all devices",
        "SEO-optimized pages",
        "Built with React, Next.js, or HTML/CSS/JS",
        "Includes dashboard, admin panel, and contact forms",
        "3 months of free maintenance & minor updates",
      ],
    },
    {
      title: "Data Visualization",
      description:
        "Transform your raw data into interactive charts, dashboards, and insights using Python, D3.js, or web-based solutions.",
      points: [
        "Custom dashboards using Chart.js, D3.js, Plotly, PowerBI",
        "Integration with Excel, CSV, and databases",
        "Real-time updates and filtering options",
        "Deployment-ready solutions (e.g. Streamlit, Flask)",
      ],
    },
    {
      title: "University Projects (Software)",
      description:
        "Get guidance and delivery of final-year software projects with full documentation and mentoring for viva presentations.",
      points: [
        "Project topics with IEEE standards",
        "Full code + abstract + SRS + PPT",
        "Technologies: Java, Python, Web, ML",
        "1:1 mentoring for presentations",
      ],
    },
    {
      title: "Automation Projects (Software)",
      description:
        "Automate your manual work using Python-based solutions — from web scraping, bots, and task automation to full backend tools.",
      points: [
        "Web scraping tools using BeautifulSoup / Selenium",
        "APIs and automation scripts",
        "Email & report automation",
        "Task schedulers and backend bots",
      ],
    },
  ];

  const current = services.find((s) => s.title === activeService);

  return (
    <section
      id="services"
      className="relative w-full min-h-screen px-4 sm:px-8 md:px-16 py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-3xl bottom-[-200px] right-[-150px]" />

      {/* Faded Background Label */}
      <h1 className="absolute text-[80px] sm:text-[120px] md:text-[200px] font-extrabold text-white/5 top-10 left-6 select-none z-0">
        SERVICES
      </h1>

      {/* Main Content */}
      <motion.div
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={controls}
        className="relative z-10 max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={fadeInUp}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10"
        >
          {/* Header */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-extrabold mb-6 text-center text-white"
          >
            What We Do at <span className="text-blue-400">FutureMind Services</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-200 mb-10 text-center max-w-3xl mx-auto"
          >
            We provide smart, scalable digital solutions to solve your unique business challenges — from development and automation to data intelligence.
          </motion.p>

          {/* Main Grid */}
          <div className="flex flex-col md:flex-row gap-10">
            {/* Services List */}
            <div className="flex-1 flex flex-col gap-4">
              {services.map((service) => (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  key={service.title}
                  onMouseEnter={() => setActiveService(service.title)}
                  className={`text-left px-5 py-4 rounded-xl font-medium transition-all duration-300 border ${
                    activeService === service.title
                      ? "bg-blue-600 text-white border-blue-500 shadow-lg"
                      : "bg-white/10 text-gray-200 hover:bg-white/20 border-white/10"
                  }`}
                >
                  {service.title}
                </motion.button>
              ))}
            </div>

            {/* Service Details */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-500 border border-white/10"
                >
                  <h3 className="text-3xl font-semibold mb-4 text-blue-300">{current.title}</h3>
                  <p className="text-gray-100 text-lg mb-5">{current.description}</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 pl-2">
                    {current.points?.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105"
                    >
                      Contact Us
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
