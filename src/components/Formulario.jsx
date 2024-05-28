import "./Formulario.css"
import { useState } from "react"

export function Formulario({setUser}) {
    const [usuario, setUsuario] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)
    
    const handleSubmit = (evento) => {
        evento.preventDefault()

        if (usuario == "" || contraseña == "") {
            setError(true)
            return
        }

        setError(false)
        setUser([usuario])
    }
    
    return (
        <section>
            
            <form
                
                className="formulario"
                onSubmit={handleSubmit}
            >
                {/* Agregar una imagen */}

                <img src="/logo.png" alt="Logo de la aplicación" className="logo" />

                <h1>Iniciar sesión</h1>

                <input
                    type="text"
                    value={usuario}
                    onChange={evento => setUsuario (evento.target.value)}
                />

                <input
                    type="password"
                    value={contraseña}
                    onChange={evento => setContraseña (evento.target.value)}
                />
                
                <button>Acceder</button>

                {error && <p>Advertencia: Todos los campos son obligatorios</p>}
                
            </form>

            
        </section>
    )
}