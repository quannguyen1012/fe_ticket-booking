
import { Breadcrumb, Layout} from 'antd';
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
const { Header} = Layout;

function Invoice(){
    return(
        <div>
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
                        <h1 class="title text-center mt-4" style={{background:'#00FFFF'}}> Danh Sách Orders</h1>

                        <div className="rounded-2 mb-3"
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 5 }}
                            layout="horizontal"
                            style={{width:'60%',height:'20%',
                                margin: 'auto',border:'1' ,background:'#B6E0E0'}}
                            >
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
                                </div>&emsp;&emsp;&emsp;&emsp;
                                <div className='d-sm-inline-block'>
                                    <b >Ghế</b> <br></br>
                                    <b>A5</b>
                                </div>
                                <hr></hr>   
                                <div >
                                    <h1 className='d-sm-inline-block' style={{}}>Total:</h1> &emsp;
                                    <h1 className='d-sm-inline-block'>100$</h1>
                                </div> 
                            </div>
                        </div>

                        <div className="rounded-2 "
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 5 }}
                            layout="horizontal"
                            style={{width:'60%',height:'20%',
                                margin: 'auto',border:'1' , background:'#b7ebeb' }}
                            >
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
                                </div>&emsp;&emsp;&emsp;&emsp;
                                <div className='d-sm-inline-block'>
                                    <b >Ghế</b> <br></br>
                                    <b>A5</b>
                                </div>
                                <hr></hr>   
                                <div >
                                    <h1 className='d-sm-inline-block' style={{}}>Total:</h1> &emsp;
                                    <h1 className='d-sm-inline-block'>100$</h1>
                                </div> 
                            </div>
                        </div>

                    </section>
                </div>

            </main>
        </div>
    );
}
export default Invoice;