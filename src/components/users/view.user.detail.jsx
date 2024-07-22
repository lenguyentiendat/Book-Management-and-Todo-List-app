import { Button, Drawer } from "antd"
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
            width={"40vw"}
            title="User Details"
            onClose={() => {
                setIsDataDetailsOpen(false)
                setDataDetails(null)
            }}
            open={isDataDetailsOpen}
        >

            {dataDetails ? <>
                <div>
                    <p>ID: {dataDetails._id}</p>
                </div>
                <br />

                <div>
                    <p>Full name: {dataDetails.fullName}</p>
                </div>
                <br />

                <div>
                    <p>Phone Number: {dataDetails.phone}</p>
                </div>
                <br />

                <div>
                    <p>Email: {dataDetails.email}</p>
                </div>
                <br />
                <p> Avatar: </p>
                <div>
                    <img height={100} width={150}
                        src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetails.avatar}`} />
                </div>
                <div>
                    <label htmlFor="btnUpload" style={{
                        display: "block",
                        width: "fit-content",
                        marginTop: "15px",
                        padding: "10px",
                        background: "orange",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>
                        Upload Avatar
                    </label>
                    <input type="file" hidden id="btnUpload" />
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