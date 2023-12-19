import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="header">
            <div className="headerCont">
                <div className="headerLogo">
                    <img src="/imgs/logo.png" alt="logo" className="headerImg" /><h1 className="headerTitulo">Flor Morada</h1>
                </div>


                <nav className="navbar">
                    <Link to="/" className="navLink">Inicio</Link>
                    <Link to="/AcercaDeNosotros" className="navLink">Acerca de Nosotros</Link>
                    <Link to="/Productos" className="navLink">Productos</Link>
                    <Link to="/Contacto" className="navLink">Contacto</Link>
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}

export default Navbar