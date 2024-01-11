import React, {useState} from "react";

export default function TagCreator ({createTag}){
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");
    let date = new Date()

    function clearInputs(){

        //create tag at app function
        createTag(task, description, deadline, date.getTime())

        //reset inputs
        setTask("")
        setDescription("")
    }

    return(
        <div className={"tag-creator"}>
            <label htmlFor={"task"}>Task</label>
            <input type={"text"} placeholder={"Task"} name={"task"} onInput={e => setTask(e.target.value)} value={task}/>
            <label htmlFor={"description"}>description</label>
            <textarea placeholder={"description"} name={"description"}  onInput={e => setDescription(e.target.value)} value={description}/>
            <label htmlFor={"deadline"}>deadline</label>
            <input type={"date"} name={"deadline"}  onInput={e => setDeadline(e.target.value)} placeholder={"dd-mm-yyyy"}/>
            <input type={"Submit"} name={"Add"} onClick={clearInputs}/>
        </div>
    )
}