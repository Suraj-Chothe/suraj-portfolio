import { Cpu } from "lucide-react";
import { Database } from "lucide-react";
import { Server } from "lucide-react";
import { Cloud } from "lucide-react";
import { BrainCircuit } from "lucide-react";
import { Monitor } from "lucide-react";

import SectionTitle from "../../common/SectionTitle";
import ArchitectureNode from "./ArchitectureNode";
import ConnectionLine from "./ConnectionLine";

const Architecture = () => {
  const architecture = [
    {
      icon: <Monitor />,
      title: "Frontend",
      description:
        "React.js interface delivering responsive dashboards and annotation tools.",
    },
    {
      icon: <Server />,
      title: "Backend API",
      description:
        "Django & FastAPI services handling authentication, business logic, and REST APIs.",
    },
    {
      icon: <Database />,
      title: "Database",
      description:
        "PostgreSQL with optimized indexing, bulk operations, and scalable schema design.",
    },
    {
      icon: <BrainCircuit />,
      title: "AI Engine",
      description:
        "LangChain, RAG pipelines, embeddings, prompt engineering, and LLM orchestration.",
    },
    {
      icon: <Cloud />,
      title: "Cloud",
      description:
        "Dockerized deployment with AWS infrastructure, CI/CD, and scalable services.",
    },
    {
      icon: <Cpu />,
      title: "Monitoring",
      description:
        "Logging, metrics, debugging, performance optimization, and continuous improvement.",
    },
  ];

  return (
    <section
      id="architecture"
      className="py-24 px-6 bg-gradient-to-b from-[#050816] to-[#0B1120]"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="System Architecture"
          subtitle="How I build scalable backend systems and AI-powered applications."
        />

        <div className="mt-20 max-w-3xl mx-auto">
          {architecture.map((item, index) => (
            <div key={index}>
              <ArchitectureNode {...item} />

              {index !== architecture.length - 1 && (
                <ConnectionLine />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;