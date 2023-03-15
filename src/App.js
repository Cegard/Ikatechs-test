import HomePage from './pages/homePage';
import CategoryPage from './pages/categoryPage';
import ProductPage from './pages/productPage';
import NotFoundPage from './pages/notFoundPage';
import Footer from './components/footer';
import styled from 'styled-components';
import CartPage from './pages/cartPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const Main = styled.div`
  max-width: 1360px;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`;

function App() {
  return (
    <Main>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFoundPage/>} />
          <Route path="/" element={<HomePage/>} />
          <Route path="/category/:category" element={<CategoryPage/>} />
          <Route path="/product/:id" element={<ProductPage/>} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Main>
  );
}

export default App;
