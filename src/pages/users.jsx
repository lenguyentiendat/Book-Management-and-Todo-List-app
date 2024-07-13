import FormUser from "../components/users/form.user"
import TableUsers from "../components/users/table.user"

const UsersPage = () => {
    return (
        <div style={{ padding: "20px" }}>
            <FormUser />
            <TableUsers />
        </div>
    )
}

export default UsersPage    