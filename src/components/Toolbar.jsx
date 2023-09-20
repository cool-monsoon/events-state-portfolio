import cn from "classnames";
import uniqid from 'uniqid';

export default function Toolbar ({ onSelectFilter, filters, selected }) {
  return (
    <div className="toolbar">
      {["All", ...filters].map((filter) => (
        <button
          key={uniqid()}
          className={cn("filter", { "active": selected === filter })}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};