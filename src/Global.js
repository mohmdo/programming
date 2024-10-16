import NoteContext from "./context/NoteContext";

const Global = (props) => {
  return (
    <NoteContext.Provider value={{}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default Global;