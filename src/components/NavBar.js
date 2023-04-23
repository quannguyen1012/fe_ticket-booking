import { Layout, Menu, theme, Breadcrumb } from 'antd';
import { LogoutOutlined, UsergroupAddOutlined, UserSwitchOutlined } from '@ant-design/icons';
const { Header} = Layout;


const items = [
  {
      text: 'Home',
      link: '/home'
  },
  {
      text: 'Accomdation',
      link: '/accomdation'
  },
  {
      text: 'Gallery',
      link: '/gallery'
  },
]

const NavBar = () => {

  return (
      <div >
      <div style={{float:'left'}}>
        <a href='/'>
           <img src='https://www.vietjetair.com/static/media/vj-logo.0f71c68b.svg'/>
        </a>
      </div>

      

      <div style={{float:'right' }}>
        <Menu style={{display:'inline-block'}} theme='dark' mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item
          icon= {<LogoutOutlined/>}
          onClick = {() =>{
            localStorage.removeItem('accessToken');
            window.location.href = '/';
          }} >
              Logout
          </Menu.Item>
          
        </Menu>
      </div>

     
          <div style={{ textAlign: 'center' }}>
                <Breadcrumb style={{
                    display: 'inline-block',
                }}
                    theme='dark'
                    mode="inline"
                    defaultSelectedKeys={'1'}
                >
                  <Breadcrumb.Item style={{ color: 'white' }} text={'Home'}><a onClick={() => { window.location.href = "/"; }} ><h5>Home</h5></a></Breadcrumb.Item>&emsp; 
                    <Breadcrumb.Item style={{ color: 'white' }} text={'Accomdation'} onClick={() => { window.location.href = "/invoice"; }}><h5>Invoice</h5></Breadcrumb.Item>
                    {/* <Breadcrumb.Item style={{ color: 'white' }} text={'Gallery'} onClick={() => { window.location.href = "/gallery"; }}>Gallery</Breadcrumb.Item> */}
                </Breadcrumb>
                  
        </div>
      </div>         
  );
};
export default NavBar;

