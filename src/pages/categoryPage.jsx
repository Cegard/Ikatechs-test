import Category from "../components/category";
import Header from "../components/header";
import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const {category} = useParams();

  return(
    <>
      <Header/>
      <Category category={category} />
    </>
  );
}