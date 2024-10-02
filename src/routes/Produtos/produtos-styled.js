import styled from "styled-components";

export const ListarProdutosContainer = styled.div`
    min-height: 100vh;
    background-color: #1c1c1c;
    color: #ffffff;
    padding: 20px 0 70px 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const HeaderRow = styled.div`
    width: 100%;
    padding: 0 20px;
    margin-bottom: 2rem;
    margin-top: 90px;
    position: relative;

    h1 {
        position: absolute;
        margin: 0 0 0 1rem;
        left: 50%;
        text-align: center;
        transform: translateX(-50%);
    }

    a {
        float: left;
        margin: 8px 0 0 2rem;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        font-weight: bold;
        text-decoration: none;
        border: 2px solid white;
        border-radius: 1rem;
        color:  white;
        background-color: #484848;
        transition: 0.6s ease;
    }

    a:hover {
        background-color: #676767;
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
