import TagCreator from "./TagCreator";
import TagItem from "./TagItem";
import {useState} from "react";

function App() {
    const [tags, setTags] = useState([]);

    function createTag(task, description, deadline, createdAt){

        let tag = {
            "task":task,
            "description":description,
            "deadline":deadline,
            "createdAt":createdAt
        };

        //adding break lines
        tag.description = tag.description.replaceAll("\n", "<br />");


        setTags([...tags, tag])
    }

    function removeTag(createdAt){
        let index = tags.findIndex(t => t.createdAt === createdAt);
        const deleteByIndex = index => {
            setTags(oldValues => {
                return oldValues.filter((_, i) => i !== index)
            })};

        deleteByIndex(index)
    }

    function positionTag(position, element){
        const updatedTags = [...tags];

        // g
        let index = updatedTags.findIndex(t => t.createdAt === element);

        let newIndex = index + position;
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= updatedTags.length) {
            newIndex = updatedTags.length - 1;
        }

        const removedElement = updatedTags.splice(index, 1)[0];

        updatedTags.splice(newIndex, 0, removedElement);

        setTags(updatedTags);
    }

  return (
    <div className="App">
        <TagCreator createTag={createTag} />
        {tags.map(tag=> <TagItem key={tag.createdAt} task={tag.task} description={tag.description} deadline={tag.deadline} createdAt={tag.createdAt} positionTag={positionTag} removeTag={removeTag}/>)}
    </div>
  );
}

export default App;
