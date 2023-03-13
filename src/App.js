import Home from './pages/home';
import Main from './components/main';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Main page={<Home/>}/>
    </BrowserRouter>
  );
}

export default App;
