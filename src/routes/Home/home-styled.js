import styled from "styled-components";

export const MainHome = styled.main`
    margin-top: 90px;
    width: 100%;
    background-color: #f4f4f4;

    h2{
        font-size: 2.8rem;
        font-weight: bold;
        font-style: italic;
        text-align: center;
        color: #3C3CFF;
        margin: 3rem 0 1rem;
    }
`

/*----------------------------------------------------------*/
/*Estilização para o Slideshow Container*/
export const SlideshowContainer = styled.section`
    width: 100%;
    height: 600px;
    position: relative;
    overflow: hidden;
`

export const Slide = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: none;
    text-align: justify;
    overflow: hidden;

    a img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 1.7s ease; /* Transição suave do zoom */
        pointer-events: none;
    }        

    a:hover img{
        transform: scale(1.09); /* Aplica o leve zoom na imagem */
    }

    .gradient-overlay{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0) 100%);
    }

    h1{
        position: absolute;
        bottom: 120px;
        left: 30px;
        color: #fff;
        font-size: 3.5rem;
        font-weight: bold;
        margin: 40px 20px;
    }

    h2{
        position: absolute;
        bottom: 90px;
        left: 30px;
        color: #E6E6E6;
        font-size: 24px;
        font-weight: 300;
        margin: 40px 20px;;
    }

    p{
        position: absolute;
        bottom: 30px;
        left: 30px;
        color: #838383;
        font-size: 18px;
        margin: 30px 20px;
    }

    .numeracao-slide{
        position: absolute;
        top: 10px;
        left: 10px;
        color: #fff;
        font-size: 14px;
    }
`

/*----------------------------------------------------------*/
/*Estilização para as setas e botões do slideshow */
export const PrevButton = styled.a`
    cursor: pointer;
    position: absolute;
    top: 45%;
    left: 0;
    font-size: 24px;
    color: white;
    padding: 16px;
    user-select: none;
    transition: 0.6s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
`

export const NextButton = styled.a`
    cursor: pointer;
    position: absolute;
    top: 45%;
    right: 15px;
    font-size: 24px;
    color: white;
    padding: 16px;
    user-select: none;
    transition: 0.6s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
`

export const DotsContainer = styled.div`
    text-align: center;
    position: relative;
    bottom: 30px;
`

export const Dot = styled.span`
    height: 15px;
    width: 15px;
    margin: 0 3px;
    background-color: ${props => (props.$active ? '#515151' : '#999999')};
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
    cursor: pointer;
`

//---------------------------------------------------//
// Estilizacao para os cards relacionados a Card.jsx
export const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0 0 1.3rem 0;
  margin: 8px;
  width: calc(30% - 16px); // 3 cards por linha, com margem incluída
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
`;

export const ProductImage = styled.img`
  height: 225px;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 0.4rem;
`;

export const ProductInfo = styled.div`
  text-align: center;
  margin-top: 12px;

  h3{
    font-size: 1.5rem;
    margin-bottom: 12px;
  }

  p{
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  
`;

export const ProductButton = styled.button`
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 1.2rem;
  background-color: #3C3CFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.4s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

// -------------------------------------------------------------//
// Estilizacao dos cards na pagina principal
export const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-evenly;
  padding: 16px;
`;