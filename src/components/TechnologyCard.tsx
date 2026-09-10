import { useState } from "react";
import type { ITechnology } from "../type";

interface TechnologyCardProps {
  technology: ITechnology;
}

const handleAddToStack = () => {

};

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
    const [isAdded, setIsAdded] = useState(false);
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-9 w-9 object-contain"
          />
        </div>

        <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-500">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-bold text-slate-900">
        {technology.name}
      </h3>

      <p className="mt-2 min-h-15 text-sm leading-5 text-slate-500">
        {technology.description}
      </p>

      <div className="my-3 border-t border-slate-100"></div>

      <div className="flex items-center justify-between gap-2">
        <span className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
          {technology.category}
        </span>

        <span className="text-xs text-slate-500">{technology.difficulty}</span>

        <div className="flex items-center gap-1 text-xs font-medium text-slate-700">
          <span className="text-amber-500">★</span>
          <span>{technology.rating}</span>
        </div>
      </div>

      <button
        onClick={handleAddToStack}
        className="mt-3 w-full rounded-md bg-slate-900 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
      >
        Add to Stack
      </button>
    </div>
  );
};

export default TechnologyCard;
