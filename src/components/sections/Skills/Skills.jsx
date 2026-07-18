import { motion } from "framer-motion";

import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";

import skills from "../../../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28"
    >
      <Container>
        <SectionTitle
          subtitle="SKILLS"
          title="Technologies I Work With"
          description="A collection of technologies and tools I use to build scalable backend systems and AI-powered applications."
          center
        />

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: groupIndex * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8"
            >
              <h3 className="mb-8 text-2xl font-bold text-blue-400">
                {group.category}
              </h3>

              <div className="space-y-6">
                {group.items.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Icon className="text-2xl text-blue-400" />

                          <span>{skill.name}</span>
                        </div>

                        <span className="text-sm text-slate-400">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          whileInView={{
                            width: `${skill.level}%`,
                          }}
                          transition={{
                            duration: 1,
                          }}
                          viewport={{
                            once: true,
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;