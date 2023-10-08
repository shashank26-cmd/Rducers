import { useContext, useState } from "react";
import TodoDispatch from "../context/TodoDispatch"; 
function AddTodo(){
const[inputText,setinputText]=useState('');
const {dispatch}=useContext(TodoDispatch);

return(
<div>
<input type="text" 
placeholder="add todo"
value={inputText}
onChange={e=>setinputText(e.target.value)}

/>


<button onClick={()=>{
dispatch({type:'add_todo',payload:{todoText:inputText}})
setinputText('');
}}>Add</button>

</div>



)


}
export default AddTodo;