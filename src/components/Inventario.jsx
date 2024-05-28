export function Inventario({setUser}) {
    const handleLogout = () => {
        setUser([])
    }
    return (
        <div>
            <h1>
              Bienvenido a Invenitas  
            </h1>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    )
}