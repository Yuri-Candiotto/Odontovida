import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import TelaLogin from './pages/TelaLogin'
import TelaHome from './pages/TelaHome'
import TelaCadastro from './pages/TelaCadastro'
import TelaServicos from './pages/TelaServicos'
import './App.css'



function App() {

  return (
    <>
      
      <Router>
            <Routes>
                <Route path='/' element={<TelaLogin />} />

                <Route path='/TelaHome' element={<TelaHome />} />      

                <Route path='/TelaCadastro' element={<TelaCadastro/>} />
              
                <Route path='/TelaServicos' element={<TelaServicos/>} /> 

              
            </Routes>

        </Router>
    </>
  )
}

export default App
