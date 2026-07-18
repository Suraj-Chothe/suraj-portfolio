import { motion } from "framer-motion";

const steps = [
  "User Query",
  "Embedding",
  "Vector Search",
  "Context Retrieval",
  "LLM Processing",
  "Response",
];

const AIWorkflow = () => {
  return (
    <div className="mt-20">
      <h3 className="text-2xl font-semibold text-center text-white mb-12">
        AI Request Flow
      </h3>

      <div className="flex flex-wrap justify-center items-center gap-4">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-5 py-4 rounded-xl border border-cyan-500/30 bg-white/5 backdrop-blur-md text-white font-medium"
            >
              {step}
            </motion.div>

            {index !== steps.length - 1 && (
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="mx-3 text-cyan-400 text-xl"
              >
                →
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIWorkflow;