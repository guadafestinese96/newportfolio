import './App.css'
import Layout from './Components/Layout/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Skills from './Components/Skills/Skills'
import Inicio from './Components/Inicio/Inicio'
import Proyectos from './Components/Proyectos/Proyectos'
import Estudios from './Components/Estudios/Estudios'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/proyectos' element={<Proyectos/>}/>
          <Route path='/estudios' element={<Estudios/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>

  )
}

export default App
