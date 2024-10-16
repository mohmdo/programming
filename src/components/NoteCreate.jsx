import { useContext } from "react";
import NoteContext from "../context/NoteContext";

const NoteCreate = () => {
  const context = useContext(NoteContext);
  return (
    <div className="card mb-4">
      <div className="card-body">
        <form id="noteForm" onSubmit={context.handleCreate}>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                id="noteTitle"
                className="form-control"
                placeholder="Note title"
                value={context.getTitle}
                onChange={e=>context.setTitle(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                id="noteDescription"
                className="form-control"
                placeholder="Note description"
                value={context.getBody}
                onChange={e=>context.setBody(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Add New Note
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteCreate;
