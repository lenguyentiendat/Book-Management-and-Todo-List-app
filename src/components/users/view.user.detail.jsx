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

    // useEffect(() => {
    //     console.log(">>>check dataDetails props: ", dataDetails)
    //     if (dataDetails) {
    //         setFullName(dataDetails.fullName)
    //         setId(dataDetails._id)
    //         setEmail(dataDetails.email)
    //         setPhoneNumber(dataDetails.phone)
    //     }
    // }, [dataDetails])
    console.log(">>>Check data details: ", dataDetails)

    return (
        <Drawer
            title="User Details"
            onClose={() => {
                setIsDataDetailsOpen(false)
                setDataDetails(null)
            }}
            open={isDataDetailsOpen}
        >

            {dataDetails ? <>
                <div>
                    <span>ID: {dataDetails._id}</span>
                </div>

                <div>
                    <span>Full name: {dataDetails.fullName}</span>
                </div>

                <div>
                    <span>Phone Number: {dataDetails.phone}</span>
                </div>

                <div>
                    <span>Email: {dataDetails.email}</span>
                </div>
            </>
                :
                <>

                    <p>No data</p>
                </>
            }
        </Drawer >
    )
}
export default ViewUserDetail