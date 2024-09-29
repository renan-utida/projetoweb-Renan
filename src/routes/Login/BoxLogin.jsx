import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import IconUsuario from "../../assets/icons8-usuario.png";
import IconSenha from "../../assets/icons8-trancar.png";

import { SectionLogin } from "./login-styled";

const BoxLogin = () => {

    // Hook - useRef - Pega a referência de um elemento ou componente e guarda
    const usuario = useRef();
    const senha = useRef();

    // Hook - useState - Manipila o estado da variavel
    const [usuarios, setUsuarios] = useState([]);

    // Hook - useNavigate - Ele redireciona para outro componente
    const navigate = useNavigate();

    // Criando a função de validação
    function validate(){
        for(let i=0; i < setUsuarios.length; i++){
            if(
                usuarios[i].usuario == usuario.current.value &&
                usuarios[i].senha == senha.current.value
            )
            return true;
        }
    };

    // Criando a função handleSubmit
    const handleSubmit = (e) => {
        // Previne qualquer alteração no navegador
        e.preventDefault();  
        
        if(validate()){
            // Criando a autenticação
            let token =
                Math.random().toString(16).substring(2)+
                Math.random().toString(16).substring(2)
                sessionStorage.setItem("usuario", usuario.current.value);
                sessionStorage.setItem("senha", token);
                navigate("/quiz"); // Redireciona para o quiz
        }else{
            alert("Usuário ou senha inválidos!");
        }
    };

    // Hook - useEffect - Realiza um efeito colateral , no exemplo ele vai
    // até api e tras os dados
    useEffect(() => {
        //Pega a url da api
        fetch("http://localhost:5000/usuarios")

        // Promise
        .then((res) => {
            // Converte os dados em json
            return res.json();
        })

        // Realiza as alterações das variaveis
        .then((res) => {
            setUsuarios(res);
        })
        // Retorna um array vazio
    }, []);

    return(
        <SectionLogin className="container">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-field">
                    <input 
                        type="text" 
                        placeholder="Usuário"
                        required 
                        id="usuario"
                        ref={usuario}
                    />
                    <img src={IconUsuario} alt="Icone Usuario" />
                </div>
                <div className="input-field">
                    <input 
                        type="password" 
                        placeholder="Senha"
                        id="senha"
                        ref={senha}
                    />
                    <img src={IconSenha} alt="Icone Senha" />
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueceu sua senha?</a>
                </div>

                <button type="submit">Entrar</button>

                <div className="signup-link">
                    <p>Não possui uma conta?</p>
                    <a href="#">Criar</a>
                </div>
            </form>

        </SectionLogin>
    )
}

export default BoxLogin