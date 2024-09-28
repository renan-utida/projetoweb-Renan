import { Link } from "react-router-dom"
import { HeaderCabecalho } from "./nav-styled"

const Nav =()=>{

    return(
        <HeaderCabecalho>
            <Link to='/' className='link-logo'>Eletric Life</Link>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/produtos">Produtos</Link>
                    <Link to="/sobre">Sobre</Link>
                </ul>
            </nav>
            <Link to="/login" className="nav-login">Login</Link>
        </HeaderCabecalho>
    )
}

export default Nav