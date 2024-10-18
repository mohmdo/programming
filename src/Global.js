import { useEffect, useState } from "react";
import NoteContext from "./context/NoteContext";

const Global = (props) => {
  const [getTitle, setTitle] = useState("");
  const [getBody, setBody] = useState("");
  const [getList, setList] = useState([]);

  const handleCreate = (e) => {
    e.preventDefault();
    const AddNote = {
      id: Date.now(),
      getTitle,
      getBody,
      complate: false,
      date: new Date().toISOString(),
    };
    setList((prevList) => [...prevList, AddNote]);
    // console.log(getList);
    setTitle("");
    setBody("");
  };
  const handleDelete = (id) => {
    setList((prevList) => [...prevList].filter((p) => p.id !== id));
  };
  const handleComplate = (id) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, complate: !item.complate } : item
      )
    );
    console.log(getList);
  };
  const handleAllList = () => {
    setList(getList);
  };

  const handleAllComplate = () => {
    setList([...getList].filter((p) => p.complate === true));
  };

  const handleFilter = (e) => {
    if (e === "latest") {
      setList([...getList].sort((a, b) => Number(a.id) - Number(b.id)));
    }
    if (e === "oldest") {
      setList([...getList].sort((a, b) => Number(b.id) - Number(a.id)));
    }
  };

  useEffect =
    (() => {
      console.log(getList);
    },
    [getList]);

  return (
    <NoteContext.Provider
      value={{
        getTitle: getTitle,
        getBody: getBody,
        setTitle: setTitle,
        setBody: setBody,
        getList,
        handleCreate: handleCreate,
        handleDelete: handleDelete,
        handleComplate: handleComplate,
        handleAllList: handleAllList,
        handleAllComplate: handleAllComplate,
        handleFilter: handleFilter,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default Global;
