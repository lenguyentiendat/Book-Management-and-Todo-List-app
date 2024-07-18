import FormUser from "../components/users/form.user"
import TableUsers from "../components/users/table.user"
import { fetchAllUserAPI } from "../service/api.service"
import { useEffect, useState } from "react"

const UsersPage = () => {

    const [dataUsers, setDataUsers] = useState([])

    //Ko nen dung async await trog useEffect
    useEffect(() => {
        console.log(">>> run useEffect 11111")
        loadUser()
    }, [])

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUsers(res.data)
    }

    //Lift up state
    return (
        <div style={{ padding: "20px" }}>
            <FormUser loadUser={loadUser} />
            <TableUsers dataUsers={dataUsers} />
        </div>
    )
}

export default UsersPage    