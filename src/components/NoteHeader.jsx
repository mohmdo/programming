const Noteheader = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h1>My Notes (3)</h1>
      <select className="form-control w-auto" id="sortNotes">
        <option value="latest">Sort based on latest notes</option>
        <option value="oldest">Sort based on oldest notes</option>
      </select>
    </div>
  );
};

export default Noteheader;