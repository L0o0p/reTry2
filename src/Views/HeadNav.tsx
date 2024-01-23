import React, { useState } from 'react';
import {  MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const items: MenuProps['items'] = [
  {
    label: '导航页',
    key: 'nav',
    icon: <MailOutlined />,
  },

  {
    label: '登录页',
    key: 'log',
    icon: <SettingOutlined />,
   
  },
  {
    label: '注册页',
    key: 'sig',
    icon: <SettingOutlined />,
   
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        😀 跳转到antd
      </a>
    ),
    key: 'out',
  },
];

const App: React.FC = () => {
  const navigateTo = useNavigate()
  const [current, setCurrent] = useState('nav');

  const menuClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    console.log('惦记了', e.key)
    navigateTo(e.key)
    
  };

  return <Menu onClick={menuClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default App;