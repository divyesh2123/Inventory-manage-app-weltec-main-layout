import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Registration from './Registration'
import Login from './Login'
import Dashbord from './Dashbord'
import MyFormt from './MyFormt'
import withTitle from './MyLayout'


function App() {

  const ProductForm = withTitle(MyFormt)

  return (
    <>
    
      <Routes>
        <Route path='/registration' element={<Registration />}/>
        <Route path='/' element={<Login />}/>
        <Route path='/dashboard' element={<Dashbord />}/>
        <Route path='/myproduct' element={<ProductForm/>}/>
      </Routes>
    </>
  )
}

export default App
