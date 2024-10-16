import { createContext } from "react";

const NoteContext = createContext({
    getTitle: "",
    getBody: "",
    setTitle: "",
    setBody: "",
    getList: [],
    handleCreate: ()=>{},
});
export default NoteContext;