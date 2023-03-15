import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from "../reducers/cart/cartSlice";

const ProductHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
`;

const ProductImages = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 680px;

  .mainImg {
    max-width: 600px;
    object-fit: contain;
    border-bottom: 0.0625rem solid gray;
  }
  
  .subImage {
    width: 100px;
    object-fit: contain;
  }

  div {
    display: flex;
    flex-direction: row;
  }
`;

const ProductActions = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 680px;

  .name {
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: bold;
    color: #666666;
  }

  .price {
    font-size: 1.8rem;
    font-weight: bold;
    color: #7a4a58;
    margin-top: 0;
  }

  .sizeLabel {
    padding-top: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #666666;
  }

  .sizes {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 0.75rem 0.75rem;
    align-content: center;
    max-width: 23rem;
    padding-top: 1.5rem;

    .size {
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 4rem;
      height: 4rem;
      background-color: #c8c6ca;
      color: #333333;
    }
  }

  .addToCart {
    display: flex;
    justify-content: flex-start;
    padding-top: 1rem;

    button {
      text-transform: uppercase;
      font-weight: bold;
      width: 15rem;
      background-color: #7a4a58;
      color: white;
      font-size: 1rem;
      padding: 0.75rem 1.5rem;
      border: none;
      cursor: pointer;
    }

    button:disabled {
      background-color: #c8c6ca;
    }
  }
`;

const ProductTexts = styled.div`
  color: #666666;
  padding-left: 3rem;
  font-size: 1.2rem;

  .subtitle {
    padding-top: 2rem;
    text-transform: uppercase;
    border-bottom: 0.0625rem solid gray;
  }

  .content {
    padding-bottom: 1rem;
  }
`;

export default function SingleProduct({product}) {

  const [selectedSize, updateSize] = useState(0);
  
  const dispatch = useDispatch();

  return(
    <>
      <ProductHeader>
        <ProductImages>
          <img className="mainImg" src={`/static/images/${product.foto}`} alt={product.nombre} />
          <div>
            {
              [...Array(6).keys()]
              .map(
                (key) => <img
                  key={key}
                  src={`/static/images/${product.foto}`}
                  className="subImage"
                  alt={product.nombre}
                />
              )
            }
          </div>
        </ProductImages>
        <ProductActions>
          <span className="name">{product.nombre}</span>
          <span className="price">${product.precio}</span>
          <span className="sizeLabel"> Tallas </span>
          <div className="sizes">
            {
              [...Array(10).keys()]
              .map((size) => {
                const newSize = 5 + 0.5 * size;
                
                return <span className="size" key={size} onClick={() => { updateSize(newSize) }}>
                  {newSize}
                </span>
              })
            }
          </div>
          <div className="addToCart">
            <button disabled={selectedSize === 0} onClick={() => {
                dispatch(addToCart({...product, talla: selectedSize}));

                alert("Producto añadido al carrito exitosamente");
              }
            }>
              Añadir al carrito
            </button>
          </div>
        </ProductActions>
      </ProductHeader>
      <ProductTexts>
        <h3 className="subtitle"> Detalles del producto </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim blandit. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Sit amet porttitor eget dolor morbi non arcu risus quis. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Posuere sollicitudin aliquam ultrices sagittis orci. Nisi porta lorem mollis aliquam ut porttitor leo. Lorem ipsum dolor sit amet. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Est ultricies integer quis auctor elit. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Bibendum enim facilisis gravida neque convallis a. Vitae congue eu consequat ac. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit.
        </p>
        <h3 className="subtitle"> tecnologías </h3>
        <p>
          Lectus vestibulum mattis ullamcorper velit. Sed felis eget velit aliquet sagittis id consectetur purus ut. Quam viverra orci sagittis eu volutpat odio facilisis. Lorem mollis aliquam ut porttitor leo a. Non sodales neque sodales ut etiam. Purus semper eget duis at tellus at urna condimentum mattis. Sed risus pretium quam vulputate.
        </p>
      </ProductTexts>
    </>
  );
};
