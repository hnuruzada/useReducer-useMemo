import Todoitem from "./todoitem";
import {memo} from "react"

function Todos({todos}){
    console.log("Todos");
    return (
        <>
        <ul>
        {todos.map((todo,index)=>(
          <Todoitem todo={todo} key={index}/>
        ))}
      </ul>
        </>
    );
}
export default memo(Todos)