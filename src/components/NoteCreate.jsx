const NoteCreate = () => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <form id="noteForm">
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                id="noteTitle"
                className="form-control"
                placeholder="Note title"
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                id="noteDescription"
                className="form-control"
                placeholder="Note description"
                required
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
