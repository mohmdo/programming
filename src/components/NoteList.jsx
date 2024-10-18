import { useContext } from "react";
import NoteContext from "../context/NoteContext";

const NoteList = () => {
  const context = useContext(NoteContext);
  return (
    <ul className="list-group" id="notesList">
      {context.getList.length > 0 ? (
        context.getList.map((item) => (
          <li key={item.id} className="list-group-item">
            <div>
              {item.complate === false ? (
                <strong>{item.getTitle}</strong>
              ) : (
                <strong style={{color:'red'}}>{item.getTitle}</strong>
              )}

              <small>{item.getBody}</small>
              <small>2023-07-22</small>
            </div>
            <div className="note-actions">
              <input
                type="checkbox"
                onChange={() => context.handleComplate(item.id)}
              />
              <button
                className="fas fa-times delete-icon"
                onClick={() => context.handleDelete(item.id)}
              ></button>
            </div>
          </li>
        ))
      ) : (
        <p>Not List</p>
      )}
    </ul>
  );
};

export default NoteList;
