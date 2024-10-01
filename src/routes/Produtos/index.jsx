import { ListarProdutosContainer, Table, TableRow, TableHeader, TableCell, ProductImage } from "./produtos-styled.js";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const Produtos = () => {

    //Hook - useState - Manipula o estado da variavel
    const [produtos, setProdutos] = useState([]);

    const navigate = useNavigate();

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
        if (!isLoggedIn) {
            alert("Você precisa estar logado para deletar um produto.");
            navigate("/login");
            return;
        }

        // Se o usuário estiver logado, faça a requisição para deletar o produto
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
            <h1>Produtos Eletric Life</h1>
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
            <Link to={isLoggedIn ? '/cadastrarProduto' : '/login'}>Cadastrar Produto</Link>
        </ListarProdutosContainer>
    )
}

export default Produtos;
