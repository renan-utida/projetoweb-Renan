import { Link } from "react-router-dom"
import { FooterRodape } from "./footer-styled"

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
                        <h2>Turma</h2>
                        <p>1ESPG</p>

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
