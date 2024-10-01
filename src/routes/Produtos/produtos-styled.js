import styled from "styled-components";

export const ListarProdutosContainer = styled.div`
    min-height: 100vh;
    background-color: #1c1c1c;
    color: #ffffff;
    padding: 20px 0 0 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        text-align: center;
        margin-bottom: 2rem;
        margin-top: 90px;
    }

    a{
        margin: 3rem 0;
        padding: 1rem 2rem;
        border-radius: 2rem;
        color: white;
        font-size: 1.1rem;
        font-weight: bold;
        text-decoration: none;
        border: 1px solid white;
        background-color: #3C3CFF;
        transition: background-color 0.4s ease;
    }
    
    a:hover{
        background-color:#030377;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const TableHeader = styled.th`
    padding: 16px;
    background-color: #2a2a2a;
    text-align: left;
    font-weight: bold;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #2a2a2a;
    }
    &:hover {
        background-color: #444444;
    }
`;

export const TableCell = styled.td`
    padding: 16px;
    border-bottom: 1px solid #333333;
    text-align: left;
`;

export const ProductImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
`;
