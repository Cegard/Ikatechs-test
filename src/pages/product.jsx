import Header from "../components/header";
import Footer from "../components/footer";
import SingleProduct from "../components/singleProduct";
import { getProductById } from "../lib/getProductsManager";

export default function Product({productId}) {
  return(
    <>
      <Header/>
      <SingleProduct product={getProductById(productId) || {}} />
      <Footer />
    </>
  );
}