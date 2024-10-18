import { useContext } from "react";
import NoteContext from "../context/NoteContext";

const Noteheader = () => {
  const context = useContext(NoteContext);
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h1>My Notes (3)</h1>
      <select onChange={e=>context.handleFilter(e.target.value)} className="form-control w-auto" id="sortNotes">
        <option >elect One Option</option>
        <option value="latest">Sort based on latest notes</option>
        <option value="oldest">Sort based on oldest notes</option>
      </select>
    </div>
  );
};

export default Noteheader;