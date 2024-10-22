import './App.css'
import MiniDrawer from './components/SideBar'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';

function App() {  
  const upperLinks = [
    {
      linkText : "Dashboard",
      linkIcon : <DashboardIcon/>
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
  return (
    <>
      <MiniDrawer upperLinks={upperLinks} />
    </>
  )
}

export default App
