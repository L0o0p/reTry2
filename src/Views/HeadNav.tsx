import React, { useState } from 'react';
import {  MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
  {
    label: '导航页',
    key: 'mail',
    icon: <MailOutlined />,
  },

  {
    label: '登录页',
    key: 'SubMenu',
    icon: <SettingOutlined />,
   
  },
  {
    label: '注册页',
    key: 'SubMenu',
    icon: <SettingOutlined />,
   
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        😀 跳转到antd
      </a>
    ),
    key: 'alipay',
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default App;