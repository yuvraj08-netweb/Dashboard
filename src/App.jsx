import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import "./App.css"
import Dashboard from './pages/Dashboard'

function App() {  
 
  return (
    <>
       <Routes>
        <Route path="/" element={<Home />}>
          <Route path='/crm/dashboard' element={<Dashboard/>}/> 
        </Route>
      </Routes>
    </>
  )
}

export default App
