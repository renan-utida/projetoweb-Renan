import { MainCadastro } from "./cadastro-styled"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import BoxCadastro from "./BoxCadastro";

const CadastrarProduto =()=>{

    //Hook- useNavigate - ele redireciona para outro componente
    const navigate = useNavigate();

    useEffect(() => {
        const usuario = sessionStorage.getItem('usuario');
        if (!usuario) {
            alert("Você precisa estar logado para acessar esta página.");
            navigate("/login");
        }
    }, [navigate]);


    return(
        <MainCadastro>
            <BoxCadastro/>
        </MainCadastro>
    )
}

export default CadastrarProduto