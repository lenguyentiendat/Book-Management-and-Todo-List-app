import { Table, Popconfirm, notification } from 'antd';
import { useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateUser from './update.user';
import { deleteUserApi } from '../../service/api.service';
import ViewUserDetail from './view.user.detail';


const TableUsers = (props) => {
    const { dataUsers, loadUser } = props

    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false)

    const [dataUpdate, setDataUpdate] = useState(null)

    const [dataDetails, setDataDetails] = useState(null)
    const [isDataDetailsOpen, setIsDataDetailsOpen] = useState(false)



    const handleDeleteUser = async (id) => {
        const res = await deleteUserApi(id)
        if (res.data) {
            notification.success({
                message: "Delete User",
                description: "Delete user successfully"
            })
            await loadUser()
        } else {
            notification.error({
                message: "Delete User fail",
                description: JSON.stringify(res.message)
            })
        }
    }






    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a
                        onClick={() => {
                            setDataDetails(record)
                            setIsDataDetailsOpen(true)
                        }
                        }>{record._id}
                    </a>
                )
            }
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined
                        onClick={() => {
                            // 
                            setDataUpdate(record)
                            setIsModalUpdateOpen(true)
                        }}
                        style={{ cursor: "pointer", color: "blue" }} />
                    <Popconfirm
                        title="Delete User"
                        description="Are you sure to delete this task?"
                        onConfirm={() => { handleDeleteUser(record._id) }}
                        // onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                        placement='left'
                    >
                        <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                    </Popconfirm>

                </div>
            ),
        },
    ];

    //     {
    //         key: '1',
    //         name: 'John Brown',
    //         age: 32,
    //         address: 'New York No. 1 Lake Park',
    //         tags: ['nice', 'developer'],
    //     },
    //     {
    //         key: '2',
    //         name: 'Jim Green',
    //         age: 42,
    //         address: 'London No. 1 Lake Park',
    //         tags: ['loser'],
    //     },
    //     {
    //         key: '3',
    //         name: 'Joe Black',
    //         age: 32,
    //         address: 'Sydney No. 1 Lake Park',
    //         tags: ['cool', 'teacher'],
    //     },
    // ];

    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUsers}
                rowKey={"_id"}
            />
            <UpdateUser
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
            <ViewUserDetail
                dataDetails={dataDetails}
                setDataDetails={setDataDetails}
                isDataDetailsOpen={isDataDetailsOpen}
                setIsDataDetailsOpen={setIsDataDetailsOpen}
                loadUser={loadUser}
            />
        </>

    )
}
export default TableUsers;  