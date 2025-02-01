import React, { useContext } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import getRequest from '../service';
import { Context } from '../context/Contex';
const CusForm = () => {
    const users = getRequest("/users")
    const {setToken} = useContext(Context)
    const onFinish = (data) => {
        const acceptedUser = users.some(item => data.username == item.username && item.password == data.password)
        if (acceptedUser) {
            setToken(data)
        }
    };
    return (
        <Form autoComplete='off' name="username" onFinish={onFinish}>
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
                <Button loading={false} block type="primary" size='large' htmlType="submit">Log in</Button>
            </Form.Item>
        </Form>
    );
};
export default CusForm;