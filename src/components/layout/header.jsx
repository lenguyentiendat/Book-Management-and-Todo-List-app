import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd";
import { UserAddOutlined, HomeOutlined, AuditOutlined, SettingOutlined } from '@ant-design/icons';
import { useState } from "react";

const Header = () => {
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/users"}>Users</Link>,
            key: 'users',
            icon: <UserAddOutlined />,
        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: 'books',
            icon: <AuditOutlined />,
        },
        {
            label: "Settings",
            key: 'settings',
            icon: <SettingOutlined />,
            children: [
                {
                    label: <Link to={"/login"}>Login</Link>,
                    key: "login",
                },
                {
                    label: "Log out",
                    key: "logout",
                }

            ]
        }

    ];
    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    )
}

export default Header;