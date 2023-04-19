import 'bootstrap/dist/css/bootstrap.css';
import background from "../img/backgound.jpg";
import React from 'react';
import { Outlet } from "react-router-dom";
import logo from "../img/ve-may-bay-gia-re.jpg";
import Navbar from "./NavBar";
import { Breadcrumb, Layout} from 'antd';
const { Header} = Layout;



function Flight() {

  const handleSubmit = () => {
    window.location.href = "/info";
  };

  return (
      <div style={{ background: '#CFE6E6', backgroundImage:`url(${background})`}}>
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

                  <div class="col-sm-4">
                    <div class="product-image-wrapper border border-primary mb-4 bg-secondary text-white rounded-pill">
                      <div class="single-products">
                          
                          <div class="productinfo text-center">
                            <a href="#">
                            <img style={{ marginBottom: 20, borderRadius:20}} src={logo} alt="" width={200} className='mt-1'/>
                            </a>
                            <div>
                                <h2 className='d-sm-inline-block'>10:05-12:00</h2>&emsp;&emsp;&emsp; <h2 className='d-sm-inline-block'>100$</h2> 
                            </div>
                            <a  onClick={handleSubmit} class="btn btn-default add-to-cart"><b>Đặt vé</b></a>
                          </div>
                          
                      </div>
                    </div>
                  </div>


                  <div class="col-sm-4">
                    <div class="product-image-wrapper border border-primary bg-secondary text-white rounded-pill">
                      <div class="single-products">
                          <div class="productinfo text-center">
                          <img style={{ marginBottom: 20, borderRadius:20}} src={logo} alt="" width={200} className='mt-1'/>
                          <div>
                              <h2 className='d-sm-inline-block'>12:05-14:00</h2>&emsp;&emsp;&emsp; <h2 className='d-sm-inline-block'>100$</h2> 
                          </div>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i><b>Đặt vé</b></a>
                          </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="product-image-wrapper border border-primary bg-secondary text-white rounded-pill">
                      <div class="single-products ">
                          <div class="productinfo text-center">
                          <img style={{ marginBottom: 20, borderRadius:20}} src={logo} alt="" width={200} className='mt-1'/>
                          <div>
                              <h2 className='d-sm-inline-block'>14:00-16:00</h2>&emsp;&emsp;&emsp; <h2 className='d-sm-inline-block'>100$</h2> 
                          </div>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i><b>Đặt vé</b></a>
                          </div>
                      </div>
                    </div>
                  </div>

                  
                  <div class="col-sm-4">
                    <div class="product-image-wrapper border border-primary mb-4 bg-secondary text-white rounded-pill">
                      <div class="single-products">
                          <div class="productinfo text-center">
                          <img style={{ marginBottom: 20, borderRadius:20}} src={logo} alt="" width={200} className='mt-1'/>
                          <div>
                              <h2 className='d-sm-inline-block'>16:05-18:00</h2>&emsp;&emsp;&emsp; <h2 className='d-sm-inline-block'>100$</h2> 
                          </div>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i><b>Đặt vé</b></a>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4"> 
                    <div class="product-image-wrapper border border-primary bg-secondary text-white rounded-pill">
                      <div class="single-products">
                          <div class="productinfo text-center">
                          <img style={{ marginBottom: 20, borderRadius:20}} src={logo} alt="" width={200} className='mt-1'/>
                          <div>
                              <h2 className='d-sm-inline-block'>18:05-20:00</h2>&emsp;&emsp;&emsp; <h2 className='d-sm-inline-block'>100$</h2> 
                          </div>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i><b>Đặt vé</b></a>
                          </div>
                      </div>
                    </div>
                  </div>

                  
                  <div class="col-sm-4">
                    <div class="product-image-wrapper border border-primary bg-secondary text-white rounded-pill">
                      <div class="single-products">
                          <div class="productinfo text-center">
                          <img style={{ marginBottom: 20, borderRadius:20}} src={logo} alt="" width={200} className='mt-1'/>
                          <div>
                              <h2 className='d-sm-inline-block'>20:05-22:00</h2>&emsp;&emsp;&emsp; <h2 className='d-sm-inline-block'>100$</h2> 
                          </div>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i><b>Đặt vé</b></a>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="product-image-wrapper border border-primary bg-secondary text-white rounded-pill">
                      <div class="single-products">
                          <div class="productinfo text-center">
                          <img style={{ marginBottom: 20, borderRadius:20}} src={logo} alt="" width={200} className='mt-1'/>
                          <div>
                              <h2 className='d-sm-inline-block'>12:05</h2>&emsp;&emsp;&emsp; <h2 className='d-sm-inline-block'>100$</h2> 
                          </div>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i><b>Đặt vé</b></a>
                          </div>
                      </div>
                    </div>
                  </div>

                  
                  <div class="col-sm-4">
                    <div class="product-image-wrapper border border-primary bg-secondary text-white rounded-pill">
                      <div class="single-products">
                          <div class="productinfo text-center">
                          <img style={{ marginBottom: 20, borderRadius:20}} src={logo} alt="" width={200} className='mt-1'/>
                          <div>
                              <h2 className='d-sm-inline-block'>12:05</h2>&emsp;&emsp;&emsp; <h2 className='d-sm-inline-block'>100$</h2> 
                          </div>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i><b>Đặt vé</b></a>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="product-image-wrapper border border-primary mb-4 bg-secondary text-white rounded-pill">
                      <div class="single-products">
                          <div class="productinfo text-center">
                          <img className='mr-2' style={{ marginBottom: 20, borderRadius:20}} src={logo} alt="" width={200} />
                          <div>
                              <h2 className='d-sm-inline-block'>12:05</h2>&emsp;&emsp;&emsp; <h2 className='d-sm-inline-block'>100$</h2> 
                          </div>
                          <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i><b>Đặt vé</b></a>

                          </div>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
          </div>
        </main>
      </div>
  );
};

export default Flight;
