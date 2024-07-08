
import "./components/todo/todo.css"
import TodoData from "./components/todo/tododata"
import TodoNew from "./components/todo/todonew"
import reactLogo from "./assets/react.svg"
import { useState } from "react"

const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React" },
    // { id: 2, name: "Watching Youtube" },
  ])

  // const datLNT = "DatLNT The Blues"
  // const age = 22
  // const data = {
  //   address: "HCM city",
  //   country: "Vietnam"
  // }

  const addNewTodo = (name) => {
    const newTodo = {
      id: rndInt,
      name: name
    }

    setTodoList([...todoList, newTodo]) // 

    //array.push()
    // todoList.push(newTodo)
    // setTodoList(todoList)


  }

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const rndInt = randomIntFromInterval(1, 1000000);


  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodoFunc={addNewTodo}
      />

      {todoList.length > 0 ?
        < TodoData
          todoList={todoList}
        />
        :
        <div className="todo-img">
          <img src={reactLogo} className="logo" alt="React logo" />
        </div>
      }

      {/* {todoList.length > 0 &&
          <TodoData
            // name={datLNT}
            // age={age}
            // data={data}
            todoList={todoList}
          />    
      }

      {todoList.length === 0 &&
        <div className="todo-img">
          <img src={reactLogo} className="logo" alt="React logo" />
        </div>
      } */}

    </div>
  )
}

export default App
