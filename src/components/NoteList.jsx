const NoteList = () => {
  return (
    <ul className="list-group" id="notesList">
      <li className="list-group-item">
        <div>
          <strong>note 3</strong>
          <small>desc 3</small>
          <small>2023-07-22</small>
        </div>
        <div className="note-actions">
          <input type="checkbox" />
          <i className="fas fa-times delete-icon"></i>
        </div>
      </li>
    </ul>
  );
};

export default NoteList;
