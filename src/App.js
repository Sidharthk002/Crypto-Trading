import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Exchanges from './components/Exchanges';
import CoinDetails from './components/CoinDetails';
import Coin from './components/Coin';
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/coin" element={<Coin/>}></Route>
        <Route path="/coin/:id" element={<CoinDetails/>}></Route>
        <Route path="/exchange" element={<Exchanges/>}></Route>
        <Route path
        ="/coindetail" element={<CoinDetails/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
