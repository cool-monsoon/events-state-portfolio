import cn from "classnames";

export default function Toolbar ({ onSelectFilter, filters, selected }) {
  return (
    <div className="toolbar">
      {["All", ...filters].map((filter) => (
        <button
          className={cn("filter", { "active": selected === filter })}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};