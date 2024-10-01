import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  SlideshowContainer, 
  Slide, 
  PrevButton, 
  NextButton, 
  DotsContainer, 
  Dot, 
} from './home-styled';
// Import das imagens do SlideshowContainer
import CarroBYD from '../../assets/carro-eletrico-byd1.png';
import CarroTesla from '../../assets/carro-eletrico-tesla1.png';
import CarroToyota from '../../assets/carro-eletrico-toyota1.png';
import CarroBMW from '../../assets/carro-eletrico-bmw1.png';

const ImageSlider=()=>{

    const [slideIndex, setSlideIndex] = useState(1);
    const totalSlides = 4; // Você pode alterar para mais ou menos slides conforme necessário
    let slideInterval;
  
    // Função para iniciar o autoplay
    const startAutoSlide = () => {
      slideInterval = setInterval(() => {
        nextSlide();
      }, 5000); // Troca a imagem a cada 5 segundos
    };
  
    // Função para o próximo slide
    const nextSlide = () => {
      setSlideIndex(slideIndex === totalSlides ? 1 : slideIndex + 1);
    };
  
    // Função para o slide anterior
    const prevSlide = () => {
      setSlideIndex(slideIndex === 1 ? totalSlides : slideIndex - 1);
    };
  
    // Função para ir diretamente para um slide específico
    const currentSlide = (n) => {
      setSlideIndex(n);
    };
  
    useEffect(() => {
      startAutoSlide(); // Inicia o autoplay
      return () => clearInterval(slideInterval); // Limpa o intervalo ao desmontar o componente
    }, [slideIndex]);
  
    // Lista de imagens e títulos (Você pode substituir pelas imagens reais)
    const slides = [
      {
        image: CarroToyota,
        title: 'Toyota bZ4X - 2022',
        type: 'SUV',
        call: 'Ver Produtos'
      },
      {
        image: CarroBYD,
        title: 'BYD Seal - 2023',
        type: 'Sedã',
        call: 'Ver Produtos'
      },
      {
        image: CarroTesla,
        title: 'Tesla Model 3 - 2024',
        type: 'Sedã',
        call: 'Ver Produtos'
      },
      {
        image: CarroBMW,
        title: 'BMW i7 - 2023',
        type: 'Sedã',
        call: 'Ver Produtos'
      }
    ];

    return(
        <SlideshowContainer className='slideshow'>
            {slides.map((slide, index) => ( // Para cada slide da lista "slides", renderiza um componente de Slide com os dados da imagem, título e subtítulo.
                <Slide key={index} style={{ display: slideIndex === index + 1 ? 'block' : 'none' }}>
                    <Link to='/produtos'>
                        {/* Renderiza a imagem do slide em um link */}
                        <img src={slide.image} alt={`Slide ${index + 1}`} />
                        {/* Aplica um gradiente sobre a imagem para dar contraste */}
                        <div className='gradient-overlay'></div>
                        {/* Exibe o título do slide */}
                        <h1>{slide.title}</h1>
                        {/* Exibe o tipo e a chamada para ver produtos */}
                        <h2>{slide.type}</h2>
                        <p>{slide.call}</p>
                        {/* Mostra a numeração do slide, exemplo: "1 / 4" */}
                        <div className='numeracao-slide'>{`${index + 1} / ${totalSlides}`}</div>
                    </Link>
                </Slide>
            ))}

            <PrevButton onClick={prevSlide}>&#10094;</PrevButton>
            <NextButton onClick={nextSlide}>&#10095;</NextButton>

            <DotsContainer>

                {slides.map((_, index) => ( // Para cada slide da lista "slides", renderiza um componente Dot (os pontos de navegação). O primeiro argumento (slide) é ignorado com o uso de "_" porque não é necessário neste caso.
                    <Dot
                        key={index} 
                        /* Ao clicar em um dot, muda para o slide correspondente */
                        onClick={() => currentSlide(index + 1)} 
                        /* Ativa o estilo especial para o dot do slide atual */
                        $active={slideIndex === index + 1}
                    />
                ))}
            </DotsContainer>
        </SlideshowContainer>
    )
}

export default ImageSlider