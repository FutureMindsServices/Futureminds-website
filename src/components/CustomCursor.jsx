import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  // Instant values for inner dot
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Smooth values for outer circle (spring follows the dot)
  const circleX = useSpring(dotX, { stiffness: 80, damping: 18 });
  const circleY = useSpring(dotY, { stiffness: 80, damping: 18 });

  useEffect(() => {
    const moveCursor = (e) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const tag = e.target.tagName.toLowerCase();
      const classes = e.target.classList;
      if (
        ["h1", "h2", "h3", "a", "button", "li", "span"].includes(tag) ||
        classes.contains("hover-target")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer circle follows smoothly */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: circleX,
          y: circleY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-20 h-20 bg-blue-500/10 blur-2xl rounded-full" />
      </motion.div>

      {/* Main circle (smooth) */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: circleX,
          y: circleY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ease-out flex items-center justify-center ${
            isHovering ? "scale-150 border-blue-400" : "scale-100 border-white"
          }`}
        />
      </motion.div>

      {/* Inner dot (instant) */}
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className={`w-2 h-2 rounded-full ${
            isHovering ? "bg-blue-400 scale-125" : "bg-white scale-100"
          } transition-all duration-300`}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
