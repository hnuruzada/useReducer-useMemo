
import { useReducer } from 'react';
import Addtodo from './addtodo';
import './App.css';
import Header from './header';
import Todos from './todos';

function reducer(state,action){
  switch (action.type) {
    case "SET_TODO":
      return {
        ...state,
        todo:action.value
      }
    case "ADD_TODO":
      return {
        ...state,
        todos:[...state.todos,action.todo]
      }

      
  
    
  }
}

function App() {
console.log("render");
const [state,dispatch]=useReducer(reducer,{
  todos:[],
  todo: ""

})

  // const[todos,setTodos]=useState([])
  // const [todo,setTodo]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch({
      type:"ADD_TODO",
      todo:state.todo
    })

    // setTodos([...todos,todo])
    // setTodo("")
  }

  const handleChange=(e)=>{
    dispatch({
      type:"SET_TODO",
      value: e.target.value
    })
  }
  return (
    <div>
      <Header/>
    <Addtodo handleSubmit={handleSubmit} handleChange={handleChange} state={state.todo}/>

      <Todos todos={state.todos}/>
    </div>
  );
}

export default App;
