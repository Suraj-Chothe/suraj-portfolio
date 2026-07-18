import { motion } from "framer-motion";

const ConnectionLine = () => {
  return (
    <div className="flex justify-center">
      <div className="relative w-1 h-16 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          animate={{
            y: [-30, 80],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          className="absolute w-full h-8 bg-cyan-400 rounded-full blur-sm"
        />
      </div>
    </div>
  );
};

export default ConnectionLine;