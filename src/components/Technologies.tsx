import { useState } from "react";
import type { ITechnology } from "../type";
import TechnologyCard from "./TechnologyCard";
import Stack from "./Stack";

const Technologies = ({ technologies }: { technologies: ITechnology[] }) => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnology[]
  >([]);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Explore The <span className="text-[#DB2777]">Technologies</span>
        </h2>

        <p className="mt-2 text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
          {technologies.map((tech) => (
            <TechnologyCard
              key={tech.id}
              technology={tech}
              selectedTechnologies={selectedTechnologies}
              setSelectedTechnologies={setSelectedTechnologies}
            />
          ))}
        </div>

        <div className="lg:col-span-3">
          <Stack
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
