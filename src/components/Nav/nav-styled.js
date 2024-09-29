import styled from "styled-components";

export const HeaderCabecalho = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 4rem;
    height: 90px;
    position: fixed;
    width: 100%;
    background-color: #000020;
    z-index: 1000; 
    overflow: hidden;

    .link-logo{
        font-size: 3rem;
        font-weight: bold;
        font-family: "PT Serif", serif;
        font-style: italic;
        color: #3C3CFF;
        text-decoration: none;
    }

    nav{
        display: flex;
        align-items: center;
    }

    nav ul{
        display: flex;
        column-gap: 3em;
        list-style: none;
    }

    nav ul a{
        position: relative;
        color: white;
        font-size: 1.3rem;
        font-weight: 600;
        text-decoration: none;
        padding-bottom: 2px;
        transition: ease 0.2s;
    }

    nav ul a:hover {
        color: #7F7FF3;
    }

    nav ul a::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: white;
        transition: width 0.3s ease;
    }

    nav ul a:hover::before {
        width: 100%;
    }

    .nav-login{
        padding: 0.5rem 1.2rem;
        margin-left: 5rem;
        font-size: 1.4rem;
        color: white;
        background-color: #3C3CFF;
        text-decoration: none;
        border: 1px solid white;
        border-radius: 1.2rem;
        transition: ease 0.5s;
    }

    .nav-login:hover{
        background-color: #282892;
    }
`