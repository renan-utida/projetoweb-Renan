import { ListarProdutosContainer, Table, TableRow, TableHeader, TableCell, ProductImage, HeaderRow } from "./produtos-styled.js";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import CarroBYD from '../../assets/carro-eletrico-byd1.png';
import CarroTesla from '../../assets/carro-eletrico-tesla1.png';
import CarroToyota from '../../assets/carro-eletrico-toyota1.png';
import CarroBMW from '../../assets/carro-eletrico-bmw1.png';

const Produtos = () => {

    //Hook - useState - Manipula o estado da variavel
    const [produtos, setProdutos] = useState([]);

    const navigate = useNavigate();

    // Produtos fixos
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

    // Aqui assumo que você possui um método para checar se o usuário está logado.
    const isLoggedIn = true; 

    //Hook- useEffect - carrega todo os usuarios cadastrados com uma promisse assincrona
    useEffect(() => {
        fetch('http://localhost:5003/produtos')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProdutos(data);
            })
            .catch((error) => {
                console.log(error);
              });
    }, []); //callback retorna uma vez

    // função deletar
    const handleDelete = (id) => {
        fetch(`http://localhost:5003/produtos/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                // Atualizando a lista de produtos ao remover um item
                setProdutos((prevProdutos) => prevProdutos.filter((produto) => produto.id !== id));
            })
            .catch((error) => {
                console.error("Erro ao deletar o produto:", error);
            });
    };


    // função editar
    const handleEdit = (id) => {
        if (!isLoggedIn) {
            navigate("/login");
            return;
        }

        // Navegar para a página de edição (substitua com sua rota de edição)
        navigate(`/editarProduto/${id}`);
    };

    return (
        <ListarProdutosContainer>
            <HeaderRow>
                <Link to={isLoggedIn ? '/cadastrarProduto' : '/login'}>Cadastrar Produto</Link>
                <h1>Produtos Eletric Life</h1>
            </HeaderRow>
            <Table>
                <thead>
                    <TableRow>
                        <TableHeader>ID</TableHeader>
                        <TableHeader>Modelo</TableHeader>
                        <TableHeader>Descrição</TableHeader>
                        <TableHeader>Tipo</TableHeader>
                        <TableHeader>Preço</TableHeader>
                        <TableHeader>Imagem</TableHeader>
                        <TableHeader></TableHeader>
                    </TableRow>
                </thead>
                <tbody>
                    {/* Renderizando produtos fixos */}
                    {produtosFixos.map((produto) => (
                        <TableRow key={produto.id}>
                            <TableCell>{produto.id}</TableCell>
                            <TableCell>{produto.modelo}</TableCell>
                            <TableCell>{produto.descricao}</TableCell>
                            <TableCell>{produto.tipo}</TableCell>
                            <TableCell>{parseFloat(produto.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
                            <TableCell><ProductImage src={produto.imagemUrl} alt={produto.modelo} /></TableCell>
                            <TableCell></TableCell> {/* Sem ícones para produtos fixos */}
                        </TableRow>
                    ))}
                    {/* Renderizando produtos do usuário */}
                    {produtos.map((produto) => (
                        <TableRow key={produto.id}>
                            <TableCell>{produto.id}</TableCell>
                            <TableCell>{produto.modelo}</TableCell>
                            <TableCell>{produto.descricao}</TableCell>
                            <TableCell>{produto.tipo}</TableCell>
                            <TableCell>{parseFloat(produto.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
                            <TableCell><ProductImage src={produto.imagemUrl} alt={produto.modelo} /></TableCell>
                            <TableCell>
                                <FaEdit onClick={() => handleEdit(produto.id)} style={{ cursor: 'pointer', marginRight: '10px' }} />
                                <FaTrashAlt onClick={() => handleDelete(produto.id)} style={{ cursor: 'pointer' }} />
                            </TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </ListarProdutosContainer>
    )
}

export default Produtos;
