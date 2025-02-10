import React, { useContext, useState } from 'react';
import { Menu } from 'antd';
import Logo from "../assets/images/logo.svg"
import { dashboardNavbarList } from '../hooks/dashboardRoutesList';
import { Link } from 'react-router-dom';
import { Context } from '../context/Contex';
const data = dashboardNavbarList.map(item => {
  const items =
  {
    key: item.id,
    icon: item.icon,
    label: <Link className='text-[16px]' to={item.path}>{item.title}</Link>,
  }
  return items
})
const Navbar = () => {
  const { collapsed } = useContext(Context)
  return (
    <div className={`${collapsed ? "w-[100px]" : "w-[22%]"} h-[100vh] flex flex-col items-center duration-300 bg-[#001628] overflow-y-auto`}>
      <div className={`${collapsed ? "my-[10px] mx-auto" : "mt-[13px] mb-[20px]"} text-[black] flex items-center `}>
        <img className='logo-in-login' src={Logo} alt="" />
        <span className={`${collapsed && "hidden"} text-white text-[34px] font-normal`}>Admin paneli</span>
      </div>
      <Menu
        className='!mt-2'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={data}
      />

    </div>
  );
};
export default Navbar;