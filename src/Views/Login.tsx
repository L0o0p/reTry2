import React from 'react';
import { Button,  Form, Input } from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

constructor(){
  super();
  this.state = {
    Usernam:"",
    
  }
  }

const handleChange=(e)=>{
  this.setState({
    username:e.target.value
  })
}

const onSubmit=()=>(
  // 禁用跳转：
  e.preventDefault(),
// 验证读取：
  console.log()
  )

type FieldType = {
  username?: string;
  password?: string;
  // remember?: string;
  repassword?: string;
};

const View: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    // initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
      onMetaChange={handleChange}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType>
      label="rePassword"
      name="repassword"
      rules={[{ required: true, message: 'Please input your password again!' }]}
    >
      <Input.Password />
    </Form.Item>


    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit" onClick={onSubmit}>
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default View;