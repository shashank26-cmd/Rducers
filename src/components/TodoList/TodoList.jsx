/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Todo from "../Todo/Todo";
import TodoContext from "../context/TodoContext";
import { useContext } from "react";
import TodoDispatch from "../context/TodoDispatch";
function TodoList(){

    const{list}=useContext(TodoContext)
const{dispatch}=useContext(TodoDispatch);

function onFinished(todo,isFinished){
    
    dispatch({type:'finish_todo',payload:{todo,isFinished}})

 }


function onDelete(todo){

  dispatch({type:'delete_todo',payload:{todo}})
}
function onEdit(todo,todoText){

    dispatch({type:'edit_todo',payload:{todo,todoText}})


}

// so now we will use reducer to improve readability of code reduce the work
//reducer will take two things state and action ex state as list and action as delete onedit etc

return (
 <div>
    {list.length > 0 && list.map(todo=><Todo key={todo.id} 
     isFinished={todo.Finished}
     id={todo.id} 
     todoData={todo.todoData}
     changeFinished={(isFinished)=>onFinished(todo,isFinished)}
      
     onDelete={()=>onDelete(todo)}
     onEdit={(todoText)=>onEdit(todo,todoText)}


      />)}
    </div>
)
    }

export default TodoList;