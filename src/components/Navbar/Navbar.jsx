import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <header className="header">
            <div className="headerCont">
                <div className="headerLogo">
                    <img src="/imgs/logo.png" alt="logo" className="headerImg" /><h1 className="headerTitulo">Flor Morada</h1>
                </div>


                <nav className="navbar">
                    <a href="#" className="navLink">Enlace 1</a>
                    <a href="#" className="navLink">Enlace 2</a>
                    <a href="#" className="navLink">Enlace 3</a>
                    <a href="#" className="navLink">Enlace 4</a>
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}

export default Navbar