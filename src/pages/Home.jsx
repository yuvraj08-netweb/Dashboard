
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import MiniDrawer from '../components/SideBar';

const Home = () => {  
  const upperLinks = [
    {
      linkText : "Dashboard",
      linkIcon : <DashboardIcon/>,
      linkPath:"/crm/dashboard",
    },
    {
      linkText : "Campaigns",
      linkIcon : <i className='fa-regular fa-handshake'></i>
    },
    {
      linkText : "Leads",
      linkIcon : <PeopleOutlinedIcon/>
    },
    {
      linkText : "Customers",
      linkIcon : <i className='fa fa-hand-holding-dollar'></i>
    },
    {
      linkText : "Deals",
      linkIcon : <i className='fa fa-dollar-sign'></i>
    },
    {
      linkText : "Orders",
      linkIcon : <i className='fa fa-cart-shopping'></i>
    },
    {
      linkText : "Products",
      linkIcon : <i className='fa fa-gift'></i>
    },
    {
      linkText : "Activities",
      linkIcon : <i className='fa fa-person-biking'></i>
    },
  ]

  const accordionData = [
    {
      title: "Messages",
      icon:  <i className='fa fa-cart-shopping'></i>,
      items: [
        { linkText: "Inbox", linkPath: "#", linkIcon:  <i className='fa fa-cart-shopping'></i> },
        { linkText: "Sent", linkPath: "#" },
      ],
    },
    {
      title: "Settings",
      icon:  <i className='fa fa-cart-shopping'></i>,
      items: [
        { linkText: "Account", linkPath: "#" },
        { linkText: "Privacy", linkPath: "#" },
      ],
    },
  ];
  
  return (
    <>
      <MiniDrawer upperLinks={upperLinks} accordionData={accordionData} />
    </>
  )
}

export default Home;