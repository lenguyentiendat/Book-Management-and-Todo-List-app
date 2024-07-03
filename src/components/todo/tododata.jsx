const TodoData = (props) => {
    //props là 1 object
    // {
    //     name: "ERIC",
    //     age: 25,
    //     data: {}
    // }

    const { name, age, data } = props
    // const name = props.name
    // const age = props.age
    // const data = props.data


    console.log(">>>props: ", props)
    return (
        <div className="title-below">
            <div>My Name is {name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
        </div>
    )
}
export default TodoData
