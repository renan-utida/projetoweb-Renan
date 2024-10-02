import { Link } from "react-router-dom"
import { FooterRodape } from "./footer-styled"

import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer =()=>{

    return(
        <FooterRodape>
            <div className="footer-direitos">
                <p>Eletric Life - Checkpoint 5</p>
                <p>@2024-Todos os direitos reservados</p>
            </div>
            <nav>
                <div className="footer-info">
                    <div className="integrante">
                        <h2>Integrante</h2>
                        <p>Renan Dias Utida - 558540</p>                     
                        <h2>Follow Me</h2>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/renan-dias-utida-1b1228225/" target="_blank"><FaLinkedin className='icon-media'/></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/renan.diasutida" target="_blank"><FaFacebook className="icon-media"/></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/_r_d_u/" target="_blank"><FaInstagram className="icon-media"/></a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@ENGENHARIASOFTWARE-bn7vp" target="_blank"><FaYoutube className="icon-media"/></a>
                            </li>
                            <li>
                                <a href="renandiutida@gmail.com" target="_blank"><MdEmail className="icon-media"/></a>
                            </li>
                        </ul>

                    </div>
                    <div className='links-rapidos'>
                        <h2>Links Rápidos</h2>
                        <Link to="/">Home</Link>
                        <Link to="/produtos">Produtos</Link>
                        <Link to="/sobre">Sobre</Link>
                    </div>
                </div>
                <div className="footer-logo">
                    <Link to='/'>Eletric Life</Link>
                </div>
            </nav>
            <div className="footer-local">
                <p>Av. Paulista, 1234 - 3º andar - Bela Vista, São Paulo - SP, 00000-000</p>
                <div className='phone'>
                    <h3>Telefone: </h3>
                    <p>(11) 91234-5678</p>
                </div>
            </div>
        </FooterRodape>
    )
}

export default Footer
