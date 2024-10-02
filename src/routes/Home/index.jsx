import { MainHome, CardBox } from "./home-styled"
import ImageSlider from "./ImageSlider"
import Card from "./Card"

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Produtos fixos
import CarroBYD from '../../assets/carro-eletrico-byd1.png';
import CarroTesla from '../../assets/carro-eletrico-tesla1.png';
import CarroToyota from '../../assets/carro-eletrico-toyota1.png';
import CarroBMW from '../../assets/carro-eletrico-bmw1.png';

const produtosFixos = [
    {
      id: 1,
      modelo: 'Toyota bZ4X',
      descricao: 'Prata - 2022',
      tipo: 'SUV',
      preco: 120000,
      imagemUrl: CarroToyota,
    },
    {
      id: 2,
      modelo: 'BYD Seal',
      descricao: 'Cinza - 2023',
      tipo: 'Sedã',
      preco: 160000,
      imagemUrl: CarroBYD,
    },
    {
      id: 3,
      modelo: 'Tesla Model 3',
      descricao: 'Branco - 2024',
      tipo: 'Sedã',
      preco: 180000,
      imagemUrl: CarroTesla,
    },
    {
      id: 4,
      modelo: 'BMW i7',
      descricao: 'Prata - 2023',
      tipo: 'Sedã',
      preco: 150000,
      imagemUrl: CarroBMW,
    },
  ];

const Home =()=>{
    const [produtosDinamicos, setProdutosDinamicos] = useState([]);

    useEffect(() => {
        // Fetch para pegar os produtos cadastrados
        fetch('http://localhost:5003/produtos')
            .then((response) => response.json())
            .then((data) => {
                setProdutosDinamicos(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return(
        <MainHome>
            <ImageSlider/>
            <h2>Conheça nossos produtos!</h2>
            <CardBox>
                {produtosFixos.map((produto) => (
                    <Card key={produto.id} produto={produto} />
                ))}
                {produtosDinamicos.map((produto) => (
                    <Card key={produto.id} produto={produto} />
                ))}
            </CardBox>
            <div className="historia">
              <h2 className="tit-historia">Conheça um pouco mais sobre nós!</h2>
              <Link to='/sobre' className="historia-btn">Clique aqui!</Link>
              <p>Eletric Life, a Melhor Loja de Carros Elétricos do País</p>
            </div>
        </MainHome>
    )
}

export default Home