import { motion } from "framer-motion";
import {
  FaReact,
  FaDatabase,
  FaAws,
} from "react-icons/fa";
import {
  SiFastapi,
  SiLangchain,
} from "react-icons/si";

const nodes = [
  {
    title: "React Frontend",
    icon: <FaReact className="text-sky-400 text-2xl" />,
  },
  {
    title: "REST API",
    icon: <SiFastapi className="text-green-400 text-2xl" />,
  },
  {
    title: "PostgreSQL",
    icon: <FaDatabase className="text-blue-400 text-2xl" />,
  },
  {
    title: "LangChain",
    icon: <SiLangchain className="text-purple-400 text-2xl" />,
  },
  {
    title: "AWS Cloud",
    icon: <FaAws className="text-orange-400 text-2xl" />,
  },
];

const Node = ({ icon, title, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay,
    }}
    whileHover={{
      scale: 1.05,
      boxShadow: "0 0 30px rgba(59,130,246,.35)",
    }}
    className="relative rounded-2xl border border-slate-700 bg-slate-900/70 p-5 backdrop-blur"
  >
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">
        {icon}
      </div>

      <div>
        <p className="font-semibold">{title}</p>
      </div>
    </div>
  </motion.div>
);

const Line = ({ delay }) => (
  <motion.div
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1 }}
    transition={{
      duration: 0.5,
      delay,
    }}
    className="mx-auto h-8 w-[2px] origin-top bg-gradient-to-b from-blue-500 to-cyan-400"
  />
);

const ArchitectureCard = () => {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl">
      <div className="mb-8 flex items-center gap-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />

        <span className="ml-3 text-sm text-slate-400">
          Backend Architecture
        </span>
      </div>

      <div className="space-y-2">
        {nodes.map((node, index) => (
          <div key={node.title}>
            <Node
              icon={node.icon}
              title={node.title}
              delay={index * 0.15}
            />

            {index !== nodes.length - 1 && (
              <Line delay={index * 0.15 + 0.2} />
            )}
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
        }}
        className="mt-8 rounded-xl border border-green-600/30 bg-green-500/10 p-4"
      >
        <p className="font-mono text-sm text-green-400">
          ✓ All services running successfully
        </p>
      </motion.div>
    </div>
  );
};

export default ArchitectureCard;