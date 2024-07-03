const TodoNew = (props) => {
    console.log(">>>check log", props)
    const { addNewTodoFunc } = props

    // addNewTodoFunc("Cobra")
    return (
        <div className="input-container">
            <input type="text" placeholder="Enter your task" />
            <button>Add</button>
        </div>
    )
}
export default TodoNew