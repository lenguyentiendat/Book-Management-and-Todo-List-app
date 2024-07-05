import { useState } from "react"

const TodoNew = (props) => {
    const { addNewTodoFunc } = props

    //useState hook
    const [valueInput, setValueInput] = useState("datLNT")


    // const valueInput = "datLNT"

    // addNewTodoFunc("Cobra")
    const handleClick = () => {
        console.log(">>> check value input:", valueInput)
    }
    const handleOnChange = (name) => {
        // console.log(">>> handle onchange",event)
        setValueInput(name)
    }
    return (
        <div className="input-container">
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
                placeholder="Enter your task" />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>
                My text input is {valueInput}
            </div>
        </div>
    )
}
export default TodoNew