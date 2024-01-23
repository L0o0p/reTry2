import { useState } from 'react';
import { Button, Form, Input } from 'antd';

const View = () => {

  // constructor(){
  //   super();
  //   this.state = {
  //     Usernam:"",
  //     password:"",
  //     repassword:"",
  //   }
  //   }


  // const handleChange=(e)=>{
  //   this.setState({
  //     username:e.target.value
  //   })
  // }


  // const onSubmit=()=>(
  //   // 禁用跳转：
  //   e.preventDefault(),
  // // 验证读取：
  //   console.log()
  //   )
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // 提交表单
    console.log('Submitting form data:', FormData);
  };

  type FieldType = {
    username?: string;
    password?: string;
    // remember?: string;
    repassword?: string;
  };



  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  // 相当于构造器：constructor
  const [FormData, setFormData] = useState({
    username: '',
    password: '',
    repassword: '',
  });

  // 输入框onChange事件
  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value,
    }));
    console.log(e.target.id, ':', e.target.value)
  };

  return (
    <Form
      name=""
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
      // onChange={handleChange}
      >
        <Input onChange={handleChange} />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password onChange={handleChange} />
      </Form.Item>

      <Form.Item<FieldType>
        label="rePassword"
        name="repassword"
        rules={[{ required: true, message: 'Please input your password again!' }]}
      >
        <Input.Password onChange={handleChange} />
      </Form.Item>


      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default View;