import { createContext } from "react";

const NoteContext = createContext({
    getTitle: "",
    getBody: "",
    setTitle: "",
    setBody: "",
    getList: [],
    handleCreate: ()=>{},
    handleDelete: ()=>{},
    handleComplate: ()=>{},
    handleAllList: ()=>{},
    handleAllComplate: ()=>{},
    handleFilter: ()=>{},
});
export default NoteContext;