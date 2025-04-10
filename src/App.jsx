import { Route, Routes } from 'react-router'
import './App.css'
import Home from './component/Home'
import AddUser from './component/AddUser'
import EditUser from './component/EditUser'



function App() {

  return (
    <>

     <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddUser/>} />
        <Route path='/edit/:id' element={<EditUser/>}/>
     </Routes>

    </>
  )
}

export default App
