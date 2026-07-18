import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { FaPython, FaAws } from "react-icons/fa";
import {
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiLangchain,
} from "react-icons/si";

import Container from "../../common/Container";
import Button from "../../common/Button";
import Badge from "../../common/Badge";
import ArchitectureCard from "./ArchitectureCard";

const techStack = [
  {
    icon: <FaPython />,
    name: "Python",
  },
  {
    icon: <SiDjango />,
    name: "Django",
  },
  {
    icon: <SiFastapi />,
    name: "FastAPI",
  },
  {
    icon: <SiPostgresql />,
    name: "PostgreSQL",
  },
  {
    icon: <FaAws />,
    name: "AWS",
  },
  {
    icon: <SiLangchain />,
    name: "LangChain",
  },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <p className="mb-4 uppercase tracking-[0.35em] text-blue-400">
              Backend Developer
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Suraj
              <br />
              Chothe
            </h1>

            <div className="mt-8 text-2xl text-blue-400 md:text-3xl">
              <TypeAnimation
                sequence={[
                  "Python Backend Engineer",
                  1500,
                  "Django Developer",
                  1500,
                  "FastAPI Developer",
                  1500,
                  "AI Application Builder",
                  1500,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              I build scalable backend systems,
              REST APIs, AI-powered applications,
              cloud-native software, and intelligent
              backend solutions using Python,
              Django, FastAPI, PostgreSQL,
              AWS and modern AI frameworks.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>
                View Projects
              </Button>

              <Button variant="outline">
                Download Resume
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {techStack.map((item) => (
                <Badge key={item.name}>
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="flex items-center justify-center"
          >
            <ArchitectureCard />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;