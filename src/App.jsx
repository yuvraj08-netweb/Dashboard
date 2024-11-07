import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import "./App.css"
import Dashboard from './pages/Dashboard'
import Leads from './pages/Leads'
import Login from './pages/Login'
import SettingsModal from './components/modals/SettingsModal'

function App() {  
 
  return (
    <>
       <Routes>
        <Route path="/" element={<Home />}>
        <Route index element={<Navigate to="/crm/dashboard" replace />} />
          <Route path='/crm/dashboard' element={<Dashboard/>}/> 
          <Route path='/crm/leads' element={<Leads/>}/> 
          <Route path='/settings' element={<SettingsModal/>}/> 
        </Route>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
