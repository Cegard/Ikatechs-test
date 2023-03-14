import SingleProduct from "../components/singleProduct";
import Header from "../components/header";
import { getProductById } from "../lib/getProductsManager";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const {id} = useParams();
  
  return(
    <>
      <Header/>
      <SingleProduct product={getProductById(Number(id)) || {}} />
    </>
  );
}