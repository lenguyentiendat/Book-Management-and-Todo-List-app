const TodoData = (props) => {
    //props là 1 object
    // {
    //     name: "ERIC",
    //     age: 25,
    //     data: {}
    // }

    const { todoList } = props
    // const name = props.name
    // const age = props.age
    // const data = props.data


    console.log(">>>props: ", props.todoList)
    return (
        <div className="title-below">
            {todoList.map((item, index) => {
                console.log(">>> check map ", item, index)
                return (
                    <div className={`todo-item`} key={item.id} >
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>
                )
            })}

        </div>
    )
}
export default TodoData
