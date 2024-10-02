import { CardContainer, ProductImage, ProductInfo, ProductButton } from './home-styled';
import { Link } from 'react-router-dom';

const Card = ({ produto }) => {
  return (
    <CardContainer>
      <ProductImage src={produto.imagemUrl} alt={produto.modelo} />
      <ProductInfo>
        <h3>{produto.modelo}</h3>
        <p>{produto.descricao}</p>
        <p>{produto.tipo}</p>
        <p>{parseFloat(produto.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        <Link to="/produtos">
          <ProductButton>Comprar</ProductButton>
        </Link>
      </ProductInfo>
    </CardContainer>
  );
};
  
export default Card;