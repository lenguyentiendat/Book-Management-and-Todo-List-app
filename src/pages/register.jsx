import { Input, Button, Flex, notification, Modal, Form } from 'antd';
import { useState } from 'react';
import { registerUserApi } from '../service/api.service';
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [form] = Form.useForm()
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log(">>CHECK VALUES ", values)
        const res = await registerUserApi(values.fullName, values.email, values.password, values.phone)

        if (res.data) {
            notification.success({
                message: "Register user",
                description: "Login succesfully"
            })
            navigate("/login")
        } else {
            notification.error({
                message: "Register failed",
                description: JSON.stringify(res.message)
            })
        }
    }

    return (
        <Form
            form={form}
            layout='vertical'
            name="basic"

            onFinish={onFinish}
            // onFinishFailed={onFinishFailed} 
            autoComplete="off"
        >
            <div className='user-form' style={{ margin: "10px 20px" }}>
                <div style={{
                    margin: "50px"
                }}>

                    <Form.Item
                        label="Full Name"
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Phone Number"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                pattern: new RegExp(/\d+/g),
                                message: "Wrong format!"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    {/* <button type="submit">Register</button> */}

                    <div>
                        <Button onClick={() => form.submit()}
                            type="primary">Register</Button>

                        {/* <Button onClick={() => {
                            form.setFieldsValue({
                                email: "datlnt@gmail.com",
                                phone: "038123231231",
                                
                                fullName: "DatLNT"
                            })

                            console.log(">>>Check form", form.getFieldsValue())
                            // form.getFieldsValue()
                        }}>Test</Button> */}
                    </div>
                </div>
            </div>
        </Form >
    )
}

export default RegisterPage 