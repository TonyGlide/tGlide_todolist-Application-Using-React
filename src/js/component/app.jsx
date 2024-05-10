import React, {useState} from "react";
import "../../styles/App.css"

const App = () => {

const [inputValue, setInputValue ] = useState('');

const [tasK, setNewTask] = useState([])

function updateTask(e){
if ((e.key === "Enter") && (inputValue!="")){
setNewTask((dataPrev) => [...dataPrev, inputValue]);
}

}

function deleteTask(item) {
console.log(" " + item);
const newtask = tasK.filter((newElement)=>newElement!=item)
setNewTask(newtask)

}

return (
<div>
<h1>To-do-s</h1>
<div className="inputTask">
<input className="form-control" type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} onKeyDown={(e)=>updateTask(e)} placeholder="Press 'Enter' to add a task..." aria-label="default input example"/>      
</div>

<div className="List">

<ul>
{tasK.map((item,index)=><li key={index}>{item} <span onClick={()=>deleteTask(item)}>

<svg 
onClick={() => deleteTask(todo.id)}
xmlns="http://www.w3.org/2000/svg"
width="16"
height="16"
fill="currentColor"
className="bi bi-trash3-fill" viewBox="0 0 16 16">
<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>

</svg></span> </li>)}
</ul>
</div>

<div className="footerCount">
<p>{tasK.length} item left</p>
</div>

</div>

)
};

export default App;