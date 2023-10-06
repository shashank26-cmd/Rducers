/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";
import { useContext } from "react";
function TodoList(){
const{list,setList}=useContext(TodoContext)

return (
 <div>
    {list.length > 0 && list.map(todo=><Todo key={todo.id} 
     isFinished={todo.isFinished}
     id={todo.id} 
     todoData={todo.todoData}
     changeFinished={(isFinished)=>{
        const updateList=list.map(t=>{
            if(t.id===todo.id){
                todo.finished=isFinished;
            }
            return t;
        });
        updateList(updateList);
     }}
      />)}
    </div>
)

}
export default TodoList;