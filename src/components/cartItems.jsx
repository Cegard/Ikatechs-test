import styled from "styled-components";
import ProductCard from "./productCard";
import { removeFromCart } from "../reducers/cart/cartSlice";
import { useSelector, useDispatch } from 'react-redux'

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const NoItems = styled.span`
  margin: 2rem auto 0rem auto;
  color: #626060;
  font-size: 2rem;
  font-weight: bold;
`;

const Total = styled.span`
  margin: 2rem auto 0rem auto;
  color: #626060;
  font-size: 2rem;
  font-weight: bold;
`;

const CartCard = styled.div`
  display: flex;
  align-self: center;

  .removeButton {
    display: flex;
    align-self: center;
    align-items: center;
    height: 3rem;
    font-size: 1rem;
  }
`;

export default function CartItems() {

  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((acum, item) => (acum + item.precio), 0);
  const dispatch = useDispatch();

  return (
    <Grid>
      {
        items.length? items.map((item) => (
          <CartCard key={item.id}>
            <ProductCard product={item}/>
            <button className="removeButton" onClick={() => dispatch(removeFromCart(item.id))}>Quitar del carrito</button>
          </CartCard>
        )) : <NoItems> No hay productos en tu carrito </NoItems>
      }
      {
        total>0? (<Total>Total {total}</Total>) : ''
      }
    </Grid>
  );
}