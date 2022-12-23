import {memo} from "react"
function Addtodo({handleSubmit,handleChange,state}) {
    console.log("Add to do");
    
    return(
        <>
        <form onSubmit={handleSubmit}>
        <input type="text" value={state.todo} onChange={handleChange}/>
        <button type="submit">Add</button>
        </form>
        </>
    );
}
export default memo(Addtodo)


