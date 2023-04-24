import 'bootstrap/dist/css/bootstrap.css';
import background from "../img/backgound.jpg";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import logo from "../img/ve-may-bay-gia-re.jpg";
import backgoundTicket from "../img/backgroupticket.jpeg";

import Navbar from "./NavBar";
import { Breadcrumb, Form, Layout, Button} from 'antd';
import axios from "axios";

const { Header} = Layout;



function Flight() {
 
  const [flights , setFlights] = useState([]);

  const [ticket, setTicket] = useState({
    startTime:'',
    endTime:'',
    price: ''
  });



  const loadFlight = async () => {
    const result = await axios.get(`http://localhost:8080/api/v1/flights`);
    setFlights(result.data);
  }

  useEffect(() => {
    if(flights.length == 0){
      loadFlight();
    }
  }, [flights]);

  useEffect(() => {
  }, [ticket]);

  const add =  (startTime, endTime, price) => {
     setTicket({
      ...ticket,
      startTime: startTime,
      endTime: endTime,
      price: price,
    });
    if(ticket.startTime != ""){
      handleSubmit();

    }
  };

  const handleSubmit = () => {



    axios.post(`http://localhost:8080/api/v1/flights/add-flight`, ticket)
        .then(res => {
          window.location.href = "/info";
        })
        .catch(err => {
        throw err;
        });
  };
  console.log(ticket);

  return (
      <div style={{ backgroundImage:`url(${background})`,  height:"1080px" }}>
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
        <main id='mainContainer'>
          <div className='container '>
            <section className='section'>
                <h1 class="title text-center" style={{background:'#00FFFF'}}> Danh Sách Chuyến Bay</h1>
                <div className='row'>

                {flights.map((flight) => ( 
                  <div class="col-sm-4" >
                    <div class="product-image-wrapper border border-primary mb-4  text-black rounded-5" style={{ backgroundImage:`url(${backgoundTicket})` }}>
                      <div class="single-products">
                          <Form>
                              <div class="productinfo text-center" >
                                <a href="#">
                                <img style={{ marginBottom: 20, borderRadius:20}} src={logo} alt="" width={200} className='mt-1'/>
                                </a>
                                <div>
                                    <h2 className='d-sm-inline-block'>{flight.startTime}-{flight.endTime}</h2>&emsp;&emsp;&emsp; <h2 className='d-sm-inline-block'>${flight.price}</h2> 
                                </div>
                                <Button  onClick={() => add(flight.startTime, flight.endTime, flight.price)} class="btn btn-default"><b>Đặt vé</b></Button >
                              </div>
                          </Form>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
            </section>
          </div>
        </main>
      </div>
  );
};

export default Flight;
