const NoteFilter = () => {
  return (
    <div className="d-flex justify-content-start align-items-center mb-3">
      <a href="#" id="allFilter" className="filter-item mr-4">
        All <span id="allCount">3</span>
      </a>
      <a href="#" id="completedFilter" className="filter-item mr-4">
        Completed <span id="completedCount">1</span>
      </a>
      <a href="#" id="openFilter" className="filter-item">
        Open <span id="openCount">2</span>
      </a>
    </div>
  );
};

export default NoteFilter;
