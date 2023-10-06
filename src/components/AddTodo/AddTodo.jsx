import { useState } from "react";

function AddTodo({updateList}){
const[inputText,setinputText]=useState('');
return(
<div>
<input type="text" 
placeholder="add todo"
value={inputText}
onChange={e=>setinputText(e.target.value)}

/>


<button onClick={()=>{updateList(inputText);
setinputText('');
}}>Add</button>

</div>



)


}
export default AddTodo;