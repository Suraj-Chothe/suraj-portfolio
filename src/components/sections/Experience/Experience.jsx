import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";
import Badge from "../../common/Badge";

import experience from "../../../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-28">
      <Container>
        <SectionTitle
          subtitle="EXPERIENCE"
          title="Professional Journey"
          description="My experience building backend systems, scalable APIs, and AI-powered applications."
          center
        />

        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* Timeline */}
          <div className="absolute left-6 top-0 h-full w-1 rounded bg-slate-800 md:left-1/2 md:-translate-x-1/2" />

          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative mb-16 flex ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 top-10 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-950 bg-blue-500 md:left-1/2">
              </div>

              {/* Card */}
              <div className="ml-16 w-full rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur md:ml-0 md:w-[45%]">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-blue-600 p-4">
                    <FaBriefcase className="text-xl" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">
                      {job.role}
                    </h3>

                    <p className="text-blue-400">
                      {job.company}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-400">
                  <span>{job.duration}</span>

                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    {job.location}
                  </span>
                </div>

                <div className="mt-8">
                  <h4 className="mb-4 text-lg font-semibold">
                    Key Achievements
                  </h4>

                  <ul className="space-y-3 text-slate-400">
                    {job.achievements.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <h4 className="mb-4 text-lg font-semibold">
                    Technologies
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {job.technologies.map((tech) => (
                      <Badge key={tech}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;