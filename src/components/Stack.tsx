import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../type";
import { toast } from "react-toastify";

interface StackProps {
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const Stack = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: StackProps) => {
  const handleRemove = (id: string) => {
    setSelectedTechnologies((technologies) =>
      technologies.filter((technology) => technology.id !== id),
    );

    toast.info("Technology removed from stack!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);

    toast.warning("All technologies removed from stack!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>

      <p className="mt-1 text-sm text-slate-400">
        {selectedTechnologies.length} Technology
        {selectedTechnologies.length !== 1 ? "ies" : ""} Selected
      </p>

      {selectedTechnologies.length === 0 ? (
        <div className="mt-6 flex min-h-45 items-center justify-center rounded-xl border border-dashed border-slate-200">
          <p className="text-sm text-slate-400">Your stack is empty.</p>
        </div>
      ) : (
        <>
          <div className="mt-6 space-y-3">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between rounded-xl border border-slate-200 p-3 transition hover:shadow-sm"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-8 w-8 object-contain"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold text-slate-800">
                      {technology.name}
                    </h3>

                    <p className="text-xs text-slate-400">
                      {technology.category}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemove(technology.id)}
                  className="ml-2 text-2xl leading-none text-slate-300 transition hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleRemoveAll}
            className="mt-6 w-full rounded-lg border border-red-200 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default Stack;
