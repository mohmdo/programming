import { useContext } from "react";
import NoteContext from "../context/NoteContext";

const NoteFilter = () => {
  const context = useContext(NoteContext);
  return (
    <div className="d-flex justify-content-start align-items-center mb-3">
      <button
        onClick={context.handleAllList}
        id="allFilter"
        className="filter-item mr-4"
      >
        All <span id="allCount">{context.getList.length}</span>
      </button>
      <button onClick={context.handleAllComplate} id="completedFilter" className="filter-item mr-4">
        Completed{" "}
        <span id="completedCount">
          {context.getList.filter((p) => p.complate === true).length}
        </span>
      </button>
      <button id="openFilter" className="filter-item">
        Open{" "}
        <span id="openCount">
          {context.getList.filter((p) => p.complate === false).length}
        </span>
      </button>
    </div>
  );
};

export default NoteFilter;
