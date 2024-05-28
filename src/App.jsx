import { Formulario } from './components/Formulario';
import { Inventario } from './components/Inventario';
import { useState } from 'react';

import './App.css'

function App() {

  const [user, setUser]=useState([])
  return (
    <div className="App">


      {
        !user.length > 0
          ? <Formulario setUser={setUser} />
          : <Inventario user={user} setUser={setUser } />
      }
      
    </div>
  )
}

export default App
