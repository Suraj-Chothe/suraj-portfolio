import { motion } from "framer-motion";
import {
  FaServer,
  FaBrain,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";

const highlights = [
  {
    icon: <FaServer className="text-3xl text-blue-400" />,
    title: "Backend Development",
    description:
      "Building scalable REST APIs using Django, FastAPI, and Python.",
  },
  {
    icon: <FaDatabase className="text-3xl text-green-400" />,
    title: "Database Design",
    description:
      "Optimized PostgreSQL schemas, indexing, normalization, and query optimization.",
  },
  {
    icon: <FaBrain className="text-3xl text-purple-400" />,
    title: "AI Development",
    description:
      "Developing AI-powered applications using LangChain, RAG, MCP, and LLMs.",
  },
  {
    icon: <FaCloud className="text-3xl text-cyan-400" />,
    title: "Cloud Ready",
    description:
      "Experience with AWS, deployment, scalable architecture, and backend services.",
  },
];

const stats = [
  {
    value: "1.5+",
    label: "Years Experience",
  },
  {
    value: "20+",
    label: "Projects",
  },
  {
    value: "10+",
    label: "Technologies",
  },
  {
    value: "100%",
    label: "Passion",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-28"
    >
      <Container>
        <SectionTitle
          subtitle="ABOUT ME"
          title="Building Scalable Backend Systems"
          description="I enjoy solving complex backend challenges, designing efficient APIs, and building AI-enabled applications."
        />

        <div className="mt-20 grid gap-14 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold">
              Python Backend Engineer
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              I'm a Python Backend Developer with experience
              building scalable web applications,
              REST APIs, database-driven systems,
              and AI-powered solutions.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              My expertise includes Django,
              FastAPI, PostgreSQL,
              database optimization,
              cloud deployment,
              and modern AI technologies
              including LangChain,
              RAG and MCP.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-6">
              {stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center"
                >
                  <h2 className="text-4xl font-black text-blue-400">
                    {item.value}
                  </h2>

                  <p className="mt-2 text-slate-400">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  scale: 1.03,
                }}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7"
              >
                <div className="mb-5">
                  {item.icon}
                </div>

                <h4 className="text-xl font-semibold">
                  {item.title}
                </h4>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;