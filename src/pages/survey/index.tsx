import styles from './shop.module.css'
import Header from '@/components/header/header'
import CnicheFresh from '@/components/cnicheFresh/cnicheFresh'
import Footer from '@/components/footer/footer'
import '@/app/globals.css';
import { Button, Checkbox, Form, Input, Select, } from 'antd';
import { FacebookOutlined } from "@ant-design/icons";
import FacebookLogin from '@greatsumini/react-facebook-login';
import { NextResponse } from 'next/server'
import { useState } from 'react';
import 'antd/dist/reset.css'

const { Option } = Select;

export async function postSurveys(args: any) {
  const res = await fetch(window.location.href.indexOf("localhost") !== -1 ? "http://localhost:8000/surveys/" : "https://canichesurveys.pythonanywhere.com/surveys/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    } as any,
    body: JSON.stringify({
      ...args,
      you_own: args.shop_or_factory,
      social_media_profile: args.contact
    }),
  })
 
  const data = await res.json()
 
  return NextResponse.json(data)
}

type FieldType = {
  first_name?: string;
  last_name?: string;
  shop_or_factory?: string;
  business_name?: string;
  business_website?: string;
  online_presence?: string;
  inventory_space?: string;
  social_profile?: string;
  email?: string;
  contact?: string;
  contact_me?: string;
};

const onOwnChange = (value: string) => {
  switch (value) {
    case 'male':
      break;
    case 'female':
      break;
    case 'other':
      break;
    default:
  }
};
 
const responseFacebook = (response: any) => {
  console.log(response);
}
 
export default function Home() {
  const [form] = Form.useForm();
  const [ success, setSuccess ] = useState(false);
  const onFinish: any = async (values: any) => {
    console.log('Success:', values);
    try {
      const res = await postSurveys(values);
    } catch (err) {
      alert("Some unknown error occurred!")
    }
    setSuccess(res.status >= 200 && res.status < 300)
    alert("Survey submitted successfully, we will reach out via social media!")
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <main className={styles.main}>
        {/* <Header/> */}
        <div style={{padding: 50, margin: "0 auto", color: '#3B4256', fontSize: 44, fontFamily: 'IBM Plex Sans', fontWeight: '600', wordWrap: 'break-word'}}>Caniche Survey
        <br/>
        <div style={{width: 460, color: '#0E6245', fontSize: 24, fontFamily: 'IBM Plex Sans', fontWeight: '400', wordWrap: 'break-word'}}>First steps to start<br/> an online shop</div>

        </div>        
        { success ? "" :         <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, padding: 25 }}
          initialValues={{ contact_me: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item wrapperCol={{ span: 16 }}>
            <FacebookLogin
              appId="6584569751654261"
              onSuccess={(response) => {
                console.log(response);
                // (document.getElementById("basic_first_name") as any).value = response;
                // (document.getElementById("basic_last_name") as any).value = response;
              }}
              onFail={(error) => {
                console.log('Login Failed!', error);
              }}
              className='ant-btn css-pr0fja ant-btn-default'
              style={{ width: "100%" }}
              onProfileSuccess={(response) => {
                console.log('Get Profile Success!', response);
                // (document.getElementById("basic_first_name") as any).value = response.name?.split(" ")[0];
                // (document.getElementById("basic_last_name") as any).value = response.name?.split(" ")[1];
                // (document.getElementById("basic_email") as any).value = response.email;
                // (document.getElementById("basic_contact") as any).value = "https://www.facebook.com/profile.php?id=" + response.id;
                form.setFieldValue("first_name", response.name?.split(" ")[0])
                form.setFieldValue("last_name", response.name?.split(" ")[1])
                form.setFieldValue("email", response.email)
                form.setFieldValue("contact", "https://www.facebook.com/profile.php?id=" + response.id)
              }}
            >
                <FacebookOutlined /> <span>Auto fill with Facebook</span>
            </FacebookLogin>
          </Form.Item>

          <Form.Item<FieldType>
            label="First name"
            name="first_name"
            rules={[{ required: true, message: 'Please input your first name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Last name"
            name="last_name"
            rules={[{ required: true, message: 'Please input your last name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="shop_or_factory" label="You own:" rules={[{ required: true, message: 'Please input your response!' }]}>
            <Select
              placeholder="You own"
              onChange={onOwnChange}
              allowClear
            >
              <Option value="factory">Factory</Option>
              <Option value="shop">Shop</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>

          <Form.Item<FieldType>
            label="Business name?"
            name="business_name"
            rules={[{ required: true, message: 'Please input your response!' }]}
          >
            <Input />
          </Form.Item>  

          <Form.Item<FieldType>
            label="Business website?"
            name="business_website"
            rules={[{ required: true, message: 'Please input your response!' }]}
          >
            <Input />
          </Form.Item>  
          
          <Form.Item<FieldType>
            label="Social media profile"
            name="contact"
            rules={[{ required: true, message: 'Please input your profile!' }]}
          >
            <Input />
          </Form.Item>  

          <Form.Item<FieldType>
            name="contact_me"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Contact me about opportunities.</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>}

        {/* <CnicheFresh/> */}
        <Footer/>
    </main>
  )
}
