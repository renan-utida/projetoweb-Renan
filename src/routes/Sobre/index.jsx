import { MainSobre } from "./sobre-styled"
import SobreImagem from "./../../assets/sobre-background.png"

import DesenvolvedorFoto from "./../../assets/desenvolvedor-foto.png"
const Sobre =()=>{

    return(
        <MainSobre>
            <h1>Sobre Nós</h1>
            <section className='bem-vindo'>
                <p>Bem-vindo à Eletric Life, onde a inovação em mobilidade sustentável se encontra com a excelência em atendimento ao cliente. Nossa missão é oferecer carros elétricos de alta qualidade a preços acessíveis, proporcionando uma experiência de compra satisfatória e segura para todos os nossos clientes. Estamos comprometidos em tornar a transição para veículos elétricos fácil e acessível, ajudando a construir um futuro mais verde e sustentável.</p>
                <p>A equipe da Eletric Life é composta por profissionais apaixonados por mobilidade elétrica e inovação. Trabalhamos juntos para garantir que cada veículo oferecido atenda aos mais altos padrões de qualidade e eficiência, e que nossos clientes recebam um atendimento personalizado e atencioso. Nosso objetivo é criar uma jornada de compra que seja tão emocionante quanto dirigir um dos nossos veículos elétricos.</p>
                <p>Além de oferecer veículos inovadores e ecologicamente responsáveis, estamos constantemente investindo em tecnologia e pesquisa para aprimorar nossa linha de produtos. A Eletric Life busca estar na vanguarda do mercado de carros elétricos, trazendo novidades e soluções que superem as expectativas dos nossos clientes. Cada modelo disponível em nossa loja foi selecionado cuidadosamente para garantir desempenho, segurança e a mais avançada tecnologia de mobilidade elétrica.</p>
                <p>Acreditamos que a sustentabilidade vai além de nossos produtos. É por isso que estamos engajados em projetos de responsabilidade social e ambiental, apoiando iniciativas que buscam reduzir a pegada de carbono e promover o uso de energia limpa. Na Eletric Life, não estamos apenas vendendo carros; estamos impulsionando um movimento em direção a um futuro mais ecológico e consciente.</p>
            </section>
            <section className='obrigado'>
                <p>Obrigado por escolher a Eletric Life. Estamos ansiosos para atendê-lo!</p>
                <img src={SobreImagem} alt="Imagem Carro Elétrico" />
            </section>
            <section>
                <div className="box-desenvolvedor">
                    <img src={DesenvolvedorFoto} alt="Foto Renan" />
                    <div className="box-info">
                        <h2>Desenvolvedor</h2>
                        <p className="nome">Renan Dias Utida</p>
                        <p>21 Anos</p>
                        <p>RM 558540</p>
                        <p>Sala: 1ESPG</p>
                    </div>                 
                </div>
            </section>
        </MainSobre>
    )
}

export default Sobre