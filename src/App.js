import NoteCreate from "./components/NoteCreate";
import NoteFilter from "./components/NoteFilter";
import Noteheader from "./components/NoteHeader";
import NoteList from "./components/NoteList";

const App = () => {
  return (
    <>
      <Noteheader />
      <NoteFilter />
      <NoteCreate />
      <NoteList />
    </>
  );
};

export default App;