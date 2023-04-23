import React from 'react';
import { Button, Form, Input, Select, Tag } from 'antd';
import { Outlet } from "react-router-dom";
import backgoundinfo from "../img/backgound.jpg";
import airplaneSeatMap from '../img/ban-do-ghe-tren-may-bay.png';
import Navbar from "./NavBar";
import { Breadcrumb, Layout} from 'antd';
const { Header} = Layout;






function Info() {

    


    const handleSubmit = () => {
        window.location.href = "/invoice";
    };
    const goBack = () =>{
        window.location.href = "/flight";
    }


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
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 5 }}
                    layout="horizontal"
                    style={{width:'60%',height:'20%',
                        margin: 'auto',border:'1' ,background:'#B6E0E0'}}
                    >
            <h1 class="title text-center"> Thông Tin Chi Tiết </h1>
                <div>
                    <div class="productinfo text-center">
                        <div className='d-sm-inline-block'>
                            <b >TP.Hồ Chí Minh</b> <br></br>
                             <b>06:00</b>
                        </div>&emsp;-----------------------
                        <img src='https://www.vietjetair.com/static/media/icon_flight.c92d4c69.svg' width={50} />
                        -----------------------&emsp;
                        <div className='d-sm-inline-block'>
                            <b >TP.Hà Nội</b> <br></br>
                            <b>08:00</b>
                        </div><hr></hr>
                        <img src={airplaneSeatMap} width={800} />

                        <Form.Item label="Chọn Ghế">
                            <Select >
                                    <Select.Option>A</Select.Option>
                                    <Select.Option>B</Select.Option>
                                    <Select.Option>C</Select.Option>
                                    <Select.Option>D</Select.Option>
                                    <Select.Option>E</Select.Option>
                                    <Select.Option>F</Select.Option>
                            </Select>
                            <Select className='mt-2'>
                                    <Select.Option>1</Select.Option>
                                    <Select.Option>2</Select.Option>
                                    <Select.Option>3</Select.Option>
                                    <Select.Option>4</Select.Option>
                                    <Select.Option>5</Select.Option>
                                    <Select.Option>6</Select.Option>
                                    <Select.Option>7</Select.Option>
                                    <Select.Option>8</Select.Option>
                                    <Select.Option>9</Select.Option>
                                    <Select.Option>10</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <p style={{textAlign:'center'}}>--------------------------------------------------------------------------------------------------</p>
                    <h2 style={{textAlign:'center'}}>Tổng: 3.500.000 VND</h2>
                </div>
                <p style={{textAlign:'center'}}>--------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                
                <b style={{margin: 60}}>Bao gồm:</b>
                <div style={{marginLeft:'90px'}}>
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

                <div style={{textAlign:'center', paddingBottom:10}}>
                    <Button style={{width:150,backgroundColor: "#CCFF00", color: "black"}} onClick={goBack} type="primary" ><b>Back</b></Button>  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;      
                    <Button style={{width:150,backgroundColor: "#CCFF00", color: "black"}} onClick={handleSubmit} type="primary" ><b>Mua Vé</b></Button>        
                </div>
            </Form>
        </div>
    );

}

export default Info;