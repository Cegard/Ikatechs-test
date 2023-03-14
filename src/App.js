// import Home from './pages/home';
import Product from './pages/product';
import Main from './components/main';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Main page={<Product productId={1} />}/>
    </BrowserRouter>
  );
}

export default App;
