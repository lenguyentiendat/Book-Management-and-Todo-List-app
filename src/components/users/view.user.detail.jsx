import { Drawer } from "antd"
import { useState, useEffect } from "react"


const ViewUserDetail = (props) => {
    const { dataDetails,
        setDataDetails,
        isDataDetailsOpen,
        setIsDataDetailsOpen
    } = props

    const [fullName, setFullName] = useState("")
    const [id, setId] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        console.log(">>>check dataDetails props: ", dataDetails)
        if (dataDetails) {
            setFullName(dataDetails.fullName)
            setId(dataDetails._id)
            setEmail(dataDetails.email)
            setPhoneNumber(dataDetails.phone)
        }
    }, [dataDetails])

    return (
        <Drawer
            title="User Details"
            onClose={() => { setIsDataDetailsOpen(false) }}
            open={isDataDetailsOpen}
        >
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>ID: {id}</span>
                </div>

                <div>
                    <span>Full name: {fullName}</span>
                </div>

                <div>
                    <span>Phone Number: {phoneNumber}</span>
                </div>

                <div>
                    <span>Email: {email}</span>
                </div>

            </div>
        </Drawer>
    )
}
export default ViewUserDetail