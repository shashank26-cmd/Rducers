import { useState } from "react";

/* eslint-disable react/prop-types */
function Todo({todoData,isFinished, changeFinished}){
const [finished,setfinished]=useState(isFinished);
    return (
        <div>
            <input type="checkbox" checked={finished} onChange={(e)=>{
                setfinished(e.target.checked);
            changeFinished(e.target.checked);
            }} />
            {todoData}
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}
export default Todo;