import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Select, Modal } from 'antd';
import axios from 'axios';
import { Outlet } from "react-router-dom";
import backgoundinfo from "../img/backgound.jpg";
import airplaneSeatMap from '../img/ban-do-ghe-tren-may-bay.png';
import Navbar from "./NavBar";
import { Breadcrumb, Layout} from 'antd';
const { Header} = Layout;



function Info() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    
    const [seats, setSeats] = useState([]);

    const [ticket, setTicket] = useState({
        departurePoint:'',
        destination: '',
        startTime:'',
        endTime:'',
        price: '',
        seats:'',
        date:''
    });
    

    const loadSeats = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/airplane-seats`);
        setSeats(result.data);
    }
    const loadTicket = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/flights/info`);
        setTicket(result.data);
    }
    console.log(ticket);

    const addSeats = (value) => {
        setTicket((ticket) => ({
            ...ticket,
            seats : value
          }));
    }
    console.log(ticket);

    useEffect(() => {
        loadSeats();
        loadTicket();
    },[])

    const goInvoice = () => {
        window.location.href = "/invoice";
    };
    const goBack = () =>{
        window.location.href = "/flight";
    }

    const handleSubmit = () => {
        if(ticket.seats != ""){
            axios.post(`http://localhost:8080/api/v1/flights/add`, ticket)
            .then(res => {
              window.location.href = "/invoice";
            })
            .catch(err => {
            throw err;
            });
        }
      };

    return(
        <div style={{backgroundImage:`url(${backgoundinfo})`}}>
            <Layout >
                <Layout>
                <Header className="header">
                    <Navbar/>
                </Header>
                    <Breadcrumb style={{ marginTop: 16, marginLeft:10 }}>
                    </Breadcrumb>
                    <Outlet />
                </Layout>
            </Layout> 

            <Form   className="rounded-5 " 
                    labelCol={{ span: 11 }}
                    wrapperCol={{ span: 3 }}
                    layout="horizontal"
                    style={{width:'60%',height:'20%',
                        margin: 'auto',border:'1' ,background:'#B6E0E0'}}
                    >
            <h1 class="title text-center"> Thông Tin Chi Tiết </h1>

                <div>
                    <div class="productinfo text-center">
                        <div className='d-sm-inline-block'>
                            <b>{ticket.departurePoint}</b> <br></br>
                             <b>{ticket.startTime}</b>
                        </div>&emsp;-----------------------
                        <img src='https://www.vietjetair.com/static/media/icon_flight.c92d4c69.svg' width={50} />
                        -----------------------&emsp;
                        <div className='d-sm-inline-block'>
                            <b >{ticket.destination}</b> <br></br>
                            <b>{ticket.endTime}</b>
                        </div><hr></hr>
                        <img src={airplaneSeatMap} width={800} />

                      
                        <Form.Item label="Chọn Ghế">
                            <Select onChange={(value)=>
                                {addSeats(value)}}> 
                                {seats.map((seat) => ( 
                                <Select.Option key={seat.id} value={seat.seatPosition}>{seat.seatPosition}</Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item label="thông tin chi tiết" class="productinfo text-center">
                            <Button style={{float:'center'}}  type="primary" onClick={showModal}>
                                Show
                            </Button>
                        </Form.Item>
                    </div>


                    <p style={{textAlign:'center'}}>--------------------------------------------------------------------------------------------------</p>
                    
                    <h2 class="productinfo text-center"  >Tổng: {ticket.price}$</h2>
                   
                </div>
                
                <Modal title="Bao gồm:" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <div style={{marginLeft:'20px'}}>
                        <p>Hành lý xách tay: 14kg cho đường bay Úc, Kazakhstan; 10kg cho các đường bay còn lại và 01 túi xách nhỏ không quá 02kg.</p>
                        <p>Hành lý ký gửi: 50kg cho đường bay Úc, Kazakhstan; 30kg cho các đường bay còn lại và 01 bộ dụng cụ chơi golf (nếu có). </p>
                        <p>Phòng chờ sang trọng (không áp dụng trên các chuyến bay nội địa Thái Lan, và tại các sân bay không có dịch vụ phòng chờ đạt tiêu chuẩn)</p>
                        <p>Ưu tiên làm thủ tục trước chuyến bay</p>
                        <p>Ưu tiên phục vụ hành lý</p>
                        <p>Ưu tiên qua cửa an ninh (tùy theo điều kiện từng sân bay)</p>
                        <p>Phục vụ đưa đón riêng ra tàu bay (trong trường hợp sân bay không có ống lồng)</p>
                        <p>Ưu tiên chọn chỗ ngồi trên tàu bay</p>
                        <p>Thưởng thức ẩm thực tươi ngon suốt chuyến bay</p>
                        <p>Bộ tiện ích 3 trong 1</p>
                        <p>Bảo hiểm Skyboss_Flight Care (chưa áp dụng cho các chuyến bay do Thai Vietjet khai thác)</p>
                        <p>Hoàn bảo lưu định danh tiền vé trong vòng 02 (hai) năm kể từ ngày khởi hành dự kiến</p>
                    </div>

                </Modal>
                        
                <hr></hr>
               
                
                <div style={{textAlign:'center', paddingBottom:10}}>
                    <Button style={{width:150,backgroundColor: "#CCFF00", color: "black"}} onClick={goBack} type="primary" ><b>Back</b></Button>  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;      
                    <Button style={{width:150,backgroundColor: "#CCFF00", color: "black"}} onClick={handleSubmit} type="primary" ><b>Mua Vé</b></Button>        
                </div>
            </Form>
            <br></br><br></br><br></br><br></br>
        </div>
        
    );

}

export default Info;