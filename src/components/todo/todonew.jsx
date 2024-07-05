const TodoNew = (props) => {
    console.log(">>>check log", props)
    const { addNewTodoFunc } = props

    // addNewTodoFunc("Cobra")
    const handleClick = () => {
        alert("click me")
    }
    const handleOnChange = (name) => {
        console.log(">>> handle on change", name)
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
        </div>
    )
}
export default TodoNew