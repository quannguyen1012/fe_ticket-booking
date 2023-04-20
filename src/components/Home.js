import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select, Tag } from 'antd';
import { Outlet } from "react-router-dom";
import { Breadcrumb, Layout} from 'antd';
import Navbar from "./NavBar";

import logo from "../img/logo.jpg";
import background from "../img/backgound.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Flight from "./Flight";


const { Header } = Layout;



function SLayout(){
    const [startDate, setStartDate] = useState(new Date());
    const date = `${startDate.getDate()}/` + `${startDate.getMonth()+1}/`+`${startDate.getFullYear()}`;
    console.log(date);

    const [ticket, setTicket] = useState({
        departurePoint:'',
        destination: '',
        seats: '',
        flightTime:'',
        price:''
    });

    console.log(ticket);

    const [places , setPlace] = useState([]);

    const addStart = (value) => {
        setTicket(ticket => ({
            ...ticket, departurePoint : value
          }));
    };

    const addEnd = (value) => {
        setTicket(ticket => ({
            ...ticket, destination : value
          }));
    };

    useEffect(() => {
        loadPlace();
    }, []);
    
    const loadPlace = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/places`);
        setPlace(result.data);
    }

    const handleSubmit = () => {
        axios.post(`http://localhost:8080/api/v1/flights?date=${date}`, ticket)
        .then(res => {
            Flight.loadFlight(res.data);
            window.location.href = "/flight";
        })
        .catch(err => {
        throw err;
        });

    };

    return (
        <div>
            <Layout>
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
                        <Select onChange={(value)=>{ addStart(value)}}>     
                            {places.map((place) => ( 
                            <Select.Option key={place.id} value={place.flyingLocation}>{place.flyingLocation}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item label="Điểm đến" >
                        <Select onChange={(value)=>
                            {addEnd(value)}}>      
                            {places.map((place) => ( 
                            <Select.Option key={place.id} value={place.flyingLocation}>{place.flyingLocation}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item label="Ngày đi">
                        <DatePicker className="rounded-2"   onChange={(date)=>{setStartDate(date)}} selected={startDate}/>
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
