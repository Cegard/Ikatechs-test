import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`

  .link {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20rem;
    border-bottom: 0.0625rem solid gray;
    text-decoration: none;

    .mainImg {
      width: 18rem;
      height: 16rem;
      objct-fit: contain;
      margin-bottom: 0.5rem;
    }

    span {
      text-align: center;
    }

    .name {
      font-size: 1.3rem;
      font-weight: bold;
      color: #333333;
      margin-bottom: 0.85rem;
    }

    .price {
      font-size: 1.5rem;
      font-weight: bold;
      color: #7a4a58;
      margin-bottom: 0.5rem;
    }

    .content {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default function ProductCard({product}) {
  return (
    <Card>
      <Link className="link" to={`/product/${product.id}`}>
        <div className="content">
          <img className="mainImg" src={`/static/images/${product.foto}`} alt={product.nombre} />
          <span className="name">{product.nombre}</span>
          <span className="price">${product.precio}</span>
        </div>
      </Link>
    </Card>
  )
}