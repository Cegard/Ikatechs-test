import Header from "../components/header";
import Footer from "../components/footer";
import Category from "../components/category";

export default function CategoryPage({category}) {
  return(
    <>
      <Header/>
      <Category category={category} />
      <Footer />
    </>
  );
}