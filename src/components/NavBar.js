import { Layout, Menu, theme } from 'antd';
import { LogoutOutlined, UsergroupAddOutlined, UserSwitchOutlined } from '@ant-design/icons';
const { Header} = Layout;

const items = [
  {
      text:'About us',
      icon:<UsergroupAddOutlined/>,
      children:[
          {
              text: 'Orders',
              icon:<UserSwitchOutlined/>,
              link:'/invoice'
          }
      ]
  }
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


      <div  style={{float:"right", zIndex: 1, position:'relative', display: "block"}}>
         <Menu style={{display:'inline-block'}} theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {items.map((item, index) => (
              <Menu.SubMenu key={`${index}`} icon={item.icon} title={item.text}>
                {item.children.map((child, childIndex) => (
                  <Menu.Item 
                    key={`${index}-${childIndex}`} 
                    icon={child.icon}
                    onClick={() => {
                      window.location.href=(`${child.link}`)
                    }}  
                  >
                    {child.text}
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ))}
        </Menu>
        </div>
      </div>
  );
};
export default NavBar;

