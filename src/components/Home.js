import React, { useState } from "react";
import { Button, Form, Input, Select, Tag } from 'antd';
import { Outlet } from "react-router-dom";
import { Breadcrumb, Layout} from 'antd';
import Navbar from "./NavBar";

import logo from "../img/logo.jpg";
import background from "../img/backgound.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";


const { Header,Sider, Footer } = Layout;

const handleSubmit = () => {
    window.location.href = "/flight";
};

function SLayout(){
    const [places , setPlace] = useState([]);

    const addStartPoint = (newId) => {
        if(product.categoryDto.id !== newId) {
          const cateId = [newId].map((catId) => ({id: catId}))[0];
          setProduct(product => ({
            ...product, categoryDto: cateId
          }));
        }
    }
    
    useEffect(() => {
        loadPlace();
    }, []);
    
    const loadPlace = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/places`, config);
        setPlace(result.data);
    }

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
                <Form   className="rounded-5 bg-secondary "
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 12 }}
                    layout="horizontal"
                    style={{width:'30%',height:'20%',
                        margin: 'auto',border:'1' }}
                    >
                    <div style={{paddingTop: 20, display: 'flex', justifyContent: 'center', alignItems: "center"}}>
                        <img
                        alt="logo GMS"
                        src={logo}
                        style={{ marginBottom: 20, borderRadius:20}}
                        width={200} height={150}
                        />
                    </div>
                    <Form.Item label="Điểm khởi hành">
                        <Select onChange={(value)=>{
                            addStartPoint(value)}}>     
                            {places.map((place) => ( 
                            <Select.Option key={place.id} value={place.id}>{place.flyingLocation}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item label="Điểm đến" >
                        <Select onChange={(value)=>{
                            addEndPoint(value)}}>     
                            {places.map((place) => ( 
                            <Select.Option key={place.id} value={place.id}>{place.flyingLocation}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item label="Ngày đi">
                        <DatePicker className="rounded-2" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </Form.Item>
                    
                    <div style={{textAlign:'center', paddingBottom:10}}>
                        <Button style={{width:150,backgroundColor: "#CCFF00", color: "black"}} onClick={handleSubmit} type="primary" ><b>Tìm chuyến bay</b></Button>        
                    </div>
                    
                </Form>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
            
        </div>
    );
};

export default SLayout;
