
import "./components/todo/todo.css"
import TodoData from "./components/todo/tododata"
import TodoNew from "./components/todo/todonew"
import reactLogo from "./assets/react.svg"

const App = () => {
  const datLNT = "DatLNT The Blues"
  const age = 22
  const data = {
    address: "HCM city",
    country: "Vietnam"
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData
        name={datLNT}
        age={age}
        data={data}
      />
      <div className="todo-img">
        <img src={reactLogo} className="logo" alt="React logo" />
      </div>
    </div>
  )
}

export default App
