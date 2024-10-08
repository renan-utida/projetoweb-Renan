import styled from "styled-components";

export const MainSobre = styled.main`
    margin-top: 90px;
    padding: 40px 60px;
    background-color: #f4f4f4;

    h1{
        font-size: 2.8em;
        font-weight: bold;
        font-style: italic;
        text-align: center;
        margin-bottom: 30px;
        color: #3C3CFF;
    }

    .bem-vindo{
        display: flex;
        flex-direction: column;
        margin-top: 35px;
    }

    .bem-vindo p{
        font-size: 1.3em;
        text-indent: 65px;
        text-align: justify;
        margin-bottom: 10px;
    }

    .obrigado{
        display: flex;
        flex-direction: column;
        align-items: center; /* Centraliza a imagem horizontalmente */
        margin: 50px 0 30px 0;
        text-align: center; /* Para centralizar o texto também */
    }

    .obrigado p{
        font-size: 2em;
        font-weight: bold;
        font-style: italic;
        color: #2424D4;
        text-align: center;
        margin-bottom: 40px;
    }

    .obrigado img{
        max-width: 1000px;
        width: 100%; /* Faz com que a imagem ocupe 100% da largura disponível */
        height: auto; /* Mantém a proporção da imagem */
        object-fit: contain; /* Garante que a imagem se ajuste bem ao espaço */
    }

    .box-desenvolvedor{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        min-height: 200px;
        width: fit-content;
        margin: 20px auto;
        padding: 20px;
        gap: 20px;
        border: 1px solid black;
    }

    .box-desenvolvedor img{
        max-width: 200px;
        max-height: 200px;
    }
    
    .box-info{
        display: flex;
        flex-direction: column; 
    }

    .box-info h2{
        font-size: 1.3rem;
        margin-bottom: 20px;
    }

    .box-info p{
        font-size: 1.1rem;
        font-style: italic;
    }

    .box-info .nome{
        font-size: 1.4rem;
        font-weight: 800;
        font-style: italic;
    }
`;
