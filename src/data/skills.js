import {
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaRobot,
} from "react-icons/fa";

import {
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiMongodb,
  SiLangchain,
  SiTensorflow,
} from "react-icons/si";

const skills = [
  {
    category: "Backend",
    items: [
      { name: "Python", icon: FaPython, level: 95 },
      { name: "Django", icon: SiDjango, level: 95 },
      { name: "FastAPI", icon: SiFastapi, level: 90 },
    ],
  },

  {
    category: "Database",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, level: 90 },
      { name: "MySQL", icon: SiMysql, level: 85 },
      { name: "MongoDB", icon: SiMongodb, level: 75 },
      { name: "Redis", icon: SiRedis, level: 75 },
    ],
  },

  {
    category: "AI / GenAI",
    items: [
      { name: "LangChain", icon: SiLangchain, level: 85 },
      { name: "OpenAI", icon: FaRobot, level: 80 },
      { name: "TensorFlow", icon: SiTensorflow, level: 70 },
    ],
  },

  {
    category: "Tools & Cloud",
    items: [
      { name: "Git", icon: FaGitAlt, level: 90 },
      { name: "Docker", icon: FaDocker, level: 80 },
      { name: "AWS", icon: FaAws, level: 75 },
    ],
  },
];

export default skills;