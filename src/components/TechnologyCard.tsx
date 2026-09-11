import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../type";
import { toast } from "react-toastify";

interface TechnologyCardProps {
  technology: ITechnology;
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const TechnologyCard = ({
  technology,
  selectedTechnologies,
  setSelectedTechnologies,
}: TechnologyCardProps) => {
  const handleAddToStack = () => {
    const alreadySelected = selectedTechnologies.some(
      (tech) => tech.id === technology.id,
      toast.success(`${technology.name} added to stack!`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    );

    if (alreadySelected) {
      toast.info(`${technology.name} is already in stack!`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    setSelectedTechnologies((previous) => [...previous, technology]);
  };

  const isSelected = selectedTechnologies.some(
    (tech) => tech.id === technology.id,
  );

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
        disabled={isSelected}
        className={`mt-3 w-full rounded-md py-2 text-sm font-medium transition ${
          isSelected
            ? "cursor-not-allowed bg-slate-200 text-slate-500"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
