import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const popupVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("fill");
      setTimeout(() => setStatus(""), 2000);
      return;
    }

    emailjs
      .sendForm(
        "service_0r88kzn",
        "template_wmawhj8",
        formRef.current,
        "BQsjV5qjj4zM_sHdh"
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(""), 2000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus(""), 3000);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen px-4 sm:px-8 md:px-16 py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden"
    >
      {/* Background Circles */}
      <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-3xl bottom-[-200px] right-[-150px]" />

      {/* Faded Label */}
      <h1 className="absolute text-[100px] md:text-[200px] font-extrabold text-white/5 top-10 left-10 select-none">
        CONTACT
      </h1>

      {/* Form Block */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="relative z-10 max-w-4xl mx-auto text-center mt-16"
      >
        <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-4">
          Want to turn your ideas into projects?
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-lg text-gray-200 mb-10">
          We’d love to hear your vision and help you bring it to life. Fill out the form below.
        </motion.p>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          variants={fadeInUp}
          className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-6"
          ></motion.textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-500 transition"
          >
            Send Message
          </motion.button>
        </motion.form>

        <motion.div variants={fadeInUp} className="mt-8 text-gray-200">
          <p>📧 Email: futuremindsservices@gmail.com</p>
          <p>📍 Location: Bangalore, India</p>
        </motion.div>
      </motion.div>

      {/* Popup Overlay */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <motion.div
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white text-black rounded-xl px-8 py-6 shadow-2xl max-w-md text-center"
            >
              {status === "success" && (
                <p className="text-green-600 text-lg font-semibold">✅ Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-lg font-semibold">
                  ❌ Something went wrong.<br /> Please email us at <br />
                  <a href="mailto:futuremindsservices@gmail.com" className="underline text-blue-700">
                    futuremindsservices@gmail.com
                  </a>
                </p>
              )}
              {status === "fill" && (
                <p className="text-yellow-600 text-lg font-semibold">
                  ⚠️ Please fill all fields before submitting.
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
