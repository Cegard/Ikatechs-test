import ProductCard from "./productCard";
import { getProductsByCategory } from "../lib/getProductsManager";
import styled from "styled-components";

const PrductsGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
  justify-content: space-between;
  margin: 2rem 3rem 0 3rem;
`

export default function Category({category}) {
  return(
    <PrductsGrid>
      {
        getProductsByCategory(category)
        .map((product) => <ProductCard key={product.id} product={product} />)
      }
    </PrductsGrid>
  );
}