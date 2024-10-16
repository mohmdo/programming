import {useEffect, useState } from "react";
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

  useEffect = (()=>{
    console.log(getList);
  },[getList]);

  return (
    <NoteContext.Provider
      value={{
        getTitle: getTitle,
        getBody: getBody,
        setTitle: setTitle,
        setBody: setBody,
        getList,
        handleCreate: handleCreate,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default Global;
