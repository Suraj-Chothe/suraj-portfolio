import { motion } from "framer-motion";

const AICard = ({ icon, title, description, technologies }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl"
    >
      <div className="text-cyan-400 mb-5">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full text-sm bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default AICard;