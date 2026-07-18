import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={scrollTop}
          className="fixed bottom-8 right-8 z-50
                     h-12 w-12 rounded-full
                     bg-cyan-500 text-white
                     shadow-xl shadow-cyan-500/30
                     hover:bg-cyan-400
                     transition-all duration-300
                     flex items-center justify-center"
        >
          <ArrowUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}