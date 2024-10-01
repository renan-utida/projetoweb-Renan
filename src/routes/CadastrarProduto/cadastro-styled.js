import styled from "styled-components";
import CadastrarProdutoBackground from "../../assets/cadastrar-produto-background1.png"

export const MainCadastro = styled.main`
    margin-top: 90px;
    text-shadow: #000 1px 1px;
    background-color: rgb(220, 220, 230);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)), url(${CadastrarProdutoBackground}) no-repeat center / cover;
`

export const SectionCadastrarProduto = styled.section`
    background-color: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(5px);
    border: 2px solid rgba(60, 60, 255, 0.4);
    padding: 1rem 1.8rem 1.5rem 1.8rem;
    border-radius: 1.5rem;
    margin: 15px 0 15px 0;
    width: 500px;

    h1{
        color:  #3C3CFF;
        text-shadow: none;
        font-size: 2rem;
        text-align: center;
        border-bottom: 1px solid white;
        padding-bottom: 0.2rem;
    }

    form{
        display: flex;
        flex-direction: column;
    }

    form span{
        color: white;
        margin: 12px 0 3px 0;
        font-weight: bold;
        font-size: 1.3rem;
    }

    form input{
        width: 100%;
        height: 100%;
        outline: none;
        border: 2px solid rgba(60, 60, 255, 1);
        border-radius: 40px;
        font-size: 15px;
        color: white;
        padding: 7px 15px;
        background-color: transparent;
    }

    form input::placeholder{
        font-size: 15px;
        color: #e2e2e2;
    }

    form select{
        width: 100%;
        height: 100%;
        background: white;
        outline: none;
        border: 2px solid rgba(60, 60, 255, 1);
        border-radius: 40px;
        font-size: 15px;
        color: #e2e2e2;
        padding: 7px 10px;
        background-color: transparent;
    }

    form select option{
        width: 100%;
        height: 100%;
        background: white;
        font-size: 15px;
        color: black;
    }

    form button{
        margin-top: 1.5rem;
        padding: 1rem;
        border-radius: 2rem;
        border: 1px solid white;
        cursor: pointer;
        color: white;
        font-size: 1.2rem;
        font-weight: bold;
        background-color: #3C3CFF;
        transition: background-color 0.5s ease;
    }

    form button:hover{
        background-color: #04049c;
    }
`