

import React, { useState } from "react";
import { Button, Form, Input, Select, Checkbox  } from 'antd';
import { Outlet } from "react-router-dom";
import { Breadcrumb, Layout} from 'antd';
import Navbar from "./NavBar";

import background from "../img/backgound.jpg";
import "react-datepicker/dist/react-datepicker.css";


const { Header,Sider, Footer } = Layout;

const handleSubmit = () => {
    window.location.href = "/";
};
const goSignUp = () => {
    window.location.href = "/signup";
};


function Login(){
    const [startDate, setStartDate] = useState(new Date());
    
    return (
        
        <div>

            <Layout >
                <Layout>
                <Header className="header">
                    <Navbar/>
                </Header>
                <Outlet />
                </Layout>
            </Layout> 
            <div style={{backgroundImage:`url(${background})`}}>
            <br></br><br></br><br></br><br></br>
                <Form   className="rounded-5 "
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 12 }}
                    layout="horizontal"
                    style={{width:'30%',height:'20%',
                        margin: 'auto',border:'1', background:'#b7ebeb' }}
                    >
                   <h3 className="text-center">Đăng Nhập</h3>

                    <Form.Item label="Username" >
                        <Input type="text" >
                        </Input>
                    </Form.Item>
                    <Form.Item label="Password" >
                        <Input type="text" >
                        </Input>
                    </Form.Item>

                    <div style={{textAlign:'center', paddingBottom:10}}>
                        <Button style={{width:100,backgroundColor: "#CCFF00", color: "black"}}  onClick={goSignUp} type="primary" ><b>Đăng Ký</b></Button>        
                        &emsp;&emsp;
                        <Button style={{width:100,backgroundColor: "#CCFF00", color: "black"}} onClick={handleSubmit} type="primary" ><b>Đăng Nhập</b></Button>        
               
                    </div>

                    
                </Form>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
            
        </div>
    );
};

export default Login;
