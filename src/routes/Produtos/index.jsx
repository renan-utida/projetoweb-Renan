import { ListarProdutosContainer, Table, TableRow, TableHeader, TableCell } from "./produtos-styled.js"

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Produtos =()=>{

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5003/produtos')
            .then((response) => response.json())
            .then((data) => setProdutos(data));
    }, []);

    return(
        <ListarProdutosContainer>
            <h1>Lista de Produtos</h1>
            <Table>
                <thead>
                    <TableRow>
                        <TableHeader>ID</TableHeader>
                        <TableHeader>Modelo</TableHeader>
                        <TableHeader>Descrição</TableHeader>
                        <TableHeader>Tipo</TableHeader>
                        <TableHeader>Preço</TableHeader>
                        <TableHeader>Imagem</TableHeader>
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
                        </TableRow>
                    ))}
                </tbody>
            </Table>
            <Link to='/cadastrarProduto'>Cadastrar Produto</Link>
        </ListarProdutosContainer>
    )
}

export default Produtos