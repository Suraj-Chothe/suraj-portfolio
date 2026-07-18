import {
  BrainCircuit,
  Bot,
  Database,
  Workflow,
} from "lucide-react";

import SectionTitle from "../../common/SectionTitle";
import AICard from "./AICard";
import AIWorkflow from "./AIWorkflow";

const aiFeatures = [
  {
    icon: <BrainCircuit size={40} />,
    title: "Retrieval-Augmented Generation (RAG)",
    description:
      "Built intelligent AI systems using vector embeddings, semantic search, and contextual document retrieval.",
    technologies: [
      "LangChain",
      "FAISS",
      "Pinecone",
      "Embeddings",
    ],
  },
  {
    icon: <Bot size={40} />,
    title: "LLM Integration",
    description:
      "Integrated OpenAI and Gemini models to build conversational assistants, document intelligence, and AI-powered automation.",
    technologies: [
      "OpenAI",
      "Gemini",
      "Prompt Engineering",
      "Function Calling",
    ],
  },
  {
    icon: <Database size={40} />,
    title: "Vector Databases",
    description:
      "Implemented semantic search pipelines using vector databases for efficient knowledge retrieval and scalable AI applications.",
    technologies: [
      "FAISS",
      "Pinecone",
      "ChromaDB",
    ],
  },
  {
    icon: <Workflow size={40} />,
    title: "AI Workflow Automation",
    description:
      "Designed modular AI pipelines combining backend APIs, retrieval systems, and LLM orchestration for production-ready solutions.",
    technologies: [
      "Python",
      "REST APIs",
      "LangChain",
      "Docker",
    ],
  },
];

const AI = () => {
  return (
    <section
      id="ai"
      className="py-24 px-6 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Artificial Intelligence"
          subtitle="Building production-ready AI applications with modern LLMs, retrieval pipelines, and scalable backend architecture."
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {aiFeatures.map((feature) => (
            <AICard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>

        <AIWorkflow />
      </div>
    </section>
  );
};

export default AI;