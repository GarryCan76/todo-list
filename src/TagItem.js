import React, {useState} from "react";

export default function TagItem (props){
    const [tagCss, setTagCss] = useState('todo tag');
    const [completed, setCompleted] = useState(false);
    const [completeButton, setCompleteButton] = useState("Done");


    function taskState(){
        setCompleted(!completed)
        console.log(completed)
        if (completed){
            setTagCss('todo tag')
            setCompleteButton('Done')
        }else {
            setTagCss('done tag')
            setCompleteButton('Not Done')
        }
    }

    return(
        <div className={tagCss}>
            <div className={"change-position"}>
                <button onClick={()=>{props.positionTag(-1, props.createdAt)}}>left</button>
                <button onClick={()=>{props.positionTag(1, props.createdAt)}}>right</button>
            </div>
            <h2 className={'task'}>{props.task}</h2>
            <p className={'description'} dangerouslySetInnerHTML={{ __html: props.description}}></p>
            <div className={'deadline'} >Deadline {props.deadline}</div>
            <button onClick={()=>{taskState()}}>{completeButton}</button>
            <button onClick={()=>{props.removeTag(props.createdAt)}}>Remove</button>
        </div>
    )
}