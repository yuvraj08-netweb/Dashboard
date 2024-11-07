import MiniDrawer from '../components/SideBar';
import { Bike, CircleDollarSign, CircleUser, Gift, Handshake, LayoutDashboard, Mail, Settings, ShoppingCart, Users } from 'lucide-react';

const Home = () => {  
  const upperLinks = [
    {
      linkText : "Dashboard",
      linkIcon : <LayoutDashboard />,
      linkPath:"/crm/dashboard",
    },
    {
      linkText : "Campaigns",
      linkIcon : <Handshake />,
    },
    {
      linkText : "Leads",
      linkIcon : <Users />,
      linkPath:"/crm/leads",
    },
    {
      linkText : "Customers",
      linkIcon : <i className='fa fa-hand-holding-dollar'></i>
    },
    {
      linkText : "Deals",
      linkIcon : <CircleDollarSign />,
    },
    {
      linkText : "Orders",
      linkIcon : <ShoppingCart />,
    },
    {
      linkText : "Products",
      linkIcon : <Gift />,
    },
    {
      linkText : "Activities",
      linkIcon : <Bike />,
    },
  ]

  const accordionData = [
    {
      title: "Messages",
      icon:  <Mail />,
      items: [
        { linkText: "Inbox", linkPath: "#", linkIcon:  <i className='fa fa-cart-shopping'></i> },
        { linkText: "Sent", linkPath: "#" },
      ],
    },
    {
      title: "Settings",
      icon:  <Settings />,
      items: [
        { linkText: "Account", linkPath: "#", linkIcon: <CircleUser />},
        { linkText: "Privacy", linkPath: "#" },
      ],
    },
  ];

  const userData = {
    name: "John Doe",
    email: "john@doe.com",
    avatar: "https://cdn.pixabay.com/photo/2021/03/27/19/25/alone-boy-6129399_1280.jpg",
  }
  
  return (
    <>
      <MiniDrawer upperLinks={upperLinks} accordionData={accordionData} user={userData} />
    </>
  )
}

export default Home;