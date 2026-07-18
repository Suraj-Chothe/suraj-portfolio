import { motion } from "framer-motion";

const ArchitectureNode = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -6,
      }}
      transition={{ duration: 0.25 }}
      className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl"
    >
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="text-sm mt-2 text-gray-400 leading-relaxed">
        {description}
      </p>

      <motion.div
        animate={{
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute inset-0 rounded-2xl border border-cyan-500"
      />
    </motion.div>
  );
};

export default ArchitectureNode;