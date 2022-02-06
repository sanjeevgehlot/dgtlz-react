import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Presale from "./components/Presale/Presale";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Home from './components/Home/Home';
import Account from './components/Account/Account';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presale" element={<Presale />} />
            <Route path="/account" element={<Account />} />
        </Routes>
        <Footer />
        <Popup />
    </div>
  );
}

export default App;
