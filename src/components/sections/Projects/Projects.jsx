import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";
import Badge from "../../common/Badge";

import projects from "../../../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-28"
    >
      <Container>
        <SectionTitle
          subtitle="PROJECTS"
          title="Featured Work"
          description="Some of the backend systems and AI-powered applications I've built."
          center
        />

        <div className="mt-20 grid gap-10 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur"
            >
              <div className="mb-6 flex h-48 items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-800">
                <span className="text-slate-500">
                  Project Screenshot
                </span>
              </div>

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-2 text-blue-400">
                {project.subtitle}
              </p>

              <p className="mt-6 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="mb-3 font-semibold">
                  Features
                </h4>

                <ul className="space-y-2 text-slate-400">
                  {project.features.map((feature) => (
                    <li key={feature}>
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-slate-800 px-5 py-3 transition hover:bg-blue-600"
                >
                  <FaGithub />

                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-blue-500 px-5 py-3 transition hover:bg-blue-600"
                >
                  <FaExternalLinkAlt />

                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;