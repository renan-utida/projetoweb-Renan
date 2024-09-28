import styled from "styled-components";
import ErrorBackground from "../../assets/error-background.png";

export const MainError = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)), url(${ErrorBackground}) no-repeat center / cover;

    a{
        font-size: 3rem;
        font-weight: bold;
        font-style: italic;
        color: #3C3CFF;
        text-decoration: none;
        margin-bottom: 90px;
    }


    h1{
        color: white;
        font-weight: 800;
        font-size: 2.6em;
    }

    img{
        width: 200px;
        height: auto;
        margin-top: 20px;
    }
`