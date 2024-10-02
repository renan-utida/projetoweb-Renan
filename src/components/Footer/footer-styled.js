import styled from "styled-components";

export const FooterRodape = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 480px;
    padding: 25px 0;
    background-color: #000020;

    .footer-direitos{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 0;
    }

    .footer-direitos p{
        color: #dcdcdc;
        line-height: 40px;
        font-size: 1.3em;
        font-weight: bold;
    }

    nav{
        margin: 15px 19%;
        display: flex;
        max-width: 1170px;
    }

    nav .footer-info{
        flex-grow: 2;
        display: flex;
        flex-direction: row;
    }

    .footer-info .integrante{
        padding: 0 15px;
        flex: 1 0;
    }

    .footer-info .integrante h2{
        color: #0404bf;
        font-size: 1.4em;
        margin-bottom: 0.4rem;
    }

    .footer-info .integrante p{
        display: list-item;
        color: #dcdcdc;
        font-size: 1rem;
        padding-bottom: 1rem;
        font-weight: 600;
        list-style: none;
    }

    .footer-info .integrante ul{
        display: flex;
        list-style: none;
        gap: 1rem;
    }

    .footer-info .integrante ul li a .icon-media{
        width: 35px;
        height: 35px;
        color: white;
        padding: 0.3rem;
        transition: color 0.4s ease;
    }

    .footer-info .integrante ul li a .icon-media:hover{
        color: #5a5aff;
    }

    .footer-info .integrante ul li .icon-media{
        width: 35px;
        height: 35px;
        color: white;
        padding: 0.3rem;
        transition: color 0.4s ease;
    }



    .footer-info .links-rapidos{
        margin: 0 15px 0 35px;
        flex: 1 0;
        display: list-item;
    }

    .footer-info .links-rapidos h2{
        color: #0404bf;
        font-size: 1.4em;
        margin-bottom: 0.5em;
    }

    .links-rapidos a{
        display: block;
        padding: 2px;
        color: #dcdcdc;
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 1.8rem;
        list-style: none;
        text-decoration: none;
    }
    
    .footer-info .links-rapidos a:hover{
        color: #5a5aff;
        transition: 0.3s;
    }

    nav .footer-logo{
        flex-grow: 1;
        margin: 40px 0px 0px 10px;
    }

    nav .footer-logo a{
        color: #3C3CFF;
        font-weight: 800;
        font-size: 2.3rem;
        font-style: italic;
        text-decoration: none;
    }

    .footer-local{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 26px 0;
    }

    .footer-local p{
        color: #dcdcdc;
        line-height: 38px;
        font-weight: 600;
        font-size: 1.0em;
    }

    .footer-local .phone {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .footer-local .phone h3{
        color: #0404bf;
        font-size: 1.1em;
        padding-right: 10px;
    }

    .footer-local .phone p{
        color: #dcdcdc;
        font-size: 1.0em;
    }
`