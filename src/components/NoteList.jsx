import { useContext } from "react";
import NoteContext from "../context/NoteContext";

const NoteList = () => {
  const context = useContext(NoteContext);
  return (
    <ul className="list-group" id="notesList">
      {context.getList.length > 0 ? context.getList.map((item) => (
        <li key={item.id} className="list-group-item">
          <div>
            <strong>{item.getTitle}</strong>
            <small>{item.getBody}</small>
            <small>2023-07-22</small>
          </div>
          <div className="note-actions">
            <input type="checkbox" />
            <i className="fas fa-times delete-icon"></i>
          </div>
        </li>
      )) : <p>Not List</p>}
    </ul>
  );
};

export default NoteList;
