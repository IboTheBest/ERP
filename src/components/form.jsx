import React, { useContext, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import getRequest from '../service';
import { Context } from '../context/Contex';
import toast, { Toaster } from 'react-hot-toast';
const CusForm = () => {
    const users = getRequest("/users")
    const { setToken } = useContext(Context)
    const [loadingLogin, setLoadingLogin] = useState(false)
    const onFinish = (data) => {
        const acceptedUser = users.some(item => data.username == item.username && item.password == data.password)
        if (acceptedUser) {
            setLoadingLogin(true)
            setTimeout(() => {
                setLoadingLogin(false)
            }, 1000);
            toast.success("Welcome")
            setTimeout(() => {
                setToken(data)
            }, 1000);
        }
        else{
            toast.error("Incorrect name or password")
        }
    };
    return (
        <Form autoComplete='off' name="username" onFinish={onFinish}>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Form.Item name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input size='large' prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input.Password minLength={6} size='large' prefix={<LockOutlined />} type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item>
                <Button loading={loadingLogin} block type="primary" size='large' htmlType="submit">Log in</Button>
            </Form.Item>
        </Form>
    );
};
export default CusForm;