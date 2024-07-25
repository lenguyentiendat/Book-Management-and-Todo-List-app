import { Input, Button, Flex, notification, Modal, Form } from 'antd';
import { useState } from 'react';


const RegisterPage = () => {
    const [form] = Form.useForm()

    const onFinish = (values) => {
        console.log(">>CHECK VALUES ", values)
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
                        name="fullname"
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
                                message: 'Please input your username!',
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
                                message: 'Please input your username!',
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
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    {/* <button type="submit">Register</button> */}

                    <div>
                        <Button onClick={() => form.submit()}
                            type="primary">Register</Button>
                    </div>
                </div>
            </div>
        </Form >
    )
}

export default RegisterPage 