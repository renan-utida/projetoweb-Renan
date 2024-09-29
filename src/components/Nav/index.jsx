import { Link, useNavigate, useLocation } from "react-router-dom";
import { HeaderCabecalho } from "./nav-styled";
import { useEffect, useState } from "react";

const Nav = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); // Hook para monitorar a rota atual

    // Função para verificar a autenticação
    const checkAuthentication = () => {
        const usuario = sessionStorage.getItem("usuario");
        if (usuario) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    };

    // Atualiza o estado da autenticação ao carregar o componente, ao mudar de rota ou ao alterar o sessionStorage
    useEffect(() => {
        checkAuthentication();

        // Adiciona um evento para verificar as mudanças no sessionStorage
        window.addEventListener("storage", checkAuthentication);

        // Limpa o evento ao desmontar o componente
        return () => {
            window.removeEventListener("storage", checkAuthentication);
        };
    }, [location]); // O hook useEffect agora monitora mudanças de rota

    // Função de logout
    const handleLogout = () => {
        sessionStorage.removeItem("usuario");
        sessionStorage.removeItem("senha");
        setIsAuthenticated(false);
        alert("Saindo da Sessão");
        navigate("/");
    };


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
            {isAuthenticated ? (
                <button onClick={handleLogout} className="nav-login">Logout</button>
            ) : (
                <Link to="/login" className="nav-login">Login</Link>
            )}
        </HeaderCabecalho>
    )
}

export default Nav