import styled from "styled-components";
import LoginBackground from "../../assets/login-background.png";

export const MainCriarUsuario = styled.main`
	margin-top: 90px;
    text-shadow: #000 1px 1px;
    background-color: rgb(220, 220, 230);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)), url(${LoginBackground}) no-repeat center / cover;
`

export const SectionNovoUsuario = styled.section`
    width: 450px;
    background-color: rgba(60, 60, 255, 0.15);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(60, 60, 255, 0.2);
    padding: 30px 40px;
    border-radius: 10px;
    margin: 45px 0 180px 0;
    
    h1{
        font-size: 35px;
        text-align: center;
        text-shadow: none;
        color: white;
    }
    
    .input-field{
        position: relative;
        width: 100%;
        height: 50px;
        margin: 28px auto;
    }
    
    .input-field input{
        width: 100%;
        height: 100%;
        background: transparent;
        outline: none;
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 40px;
        font-size: 16px;
        color: white;
        padding: 20px 25px;
    }
    
    .input-field input::placeholder{
        color: white;
    }
    
    .input-field img{
        position: absolute;
        right: 25px;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
    }

    .recall-forget{
        display: flex;
        justify-content: space-between;
        font-size: 14.5px;
        margin: -15px 0 15px 0;
    }
    
    .recall-forget label{
        color: white;
    }
    
    .recall-forget input{
        margin-right: 5px;
    }
    
    .recall-forget a, .signup-link a{
        color: lightblue;
        text-decoration: none;
    }
    
    .recall-forget a:hover, .signup-link a:hover{
        text-decoration: underline;
    }
    
    button{
        width: 100%;
        height: 56px;
        background-color: blue;
        border: 1px solid white;
        outline: none;
        border-radius: 40px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        color: white;
        font-size: 1.4rem;
        font-weight: bold;
        text-shadow: none;
        transition: background-color 0.7s ease;
    }
    
    button:hover{
        background-color: rgba(0, 0, 255, 0.7);
    }
    
    .signup-link{
        display: flex;
        justify-content: center;
        gap: 7px;
        font-size: 15px;
        margin: 20px 0 5px 0;
        text-shadow: none;
        color: white;
        font-weight: 600;
    }     

`