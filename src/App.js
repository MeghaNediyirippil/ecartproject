import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import LoginPage from './Components/LoginPage';
import Products from './Components/Products';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='' element={<LoginPage/>}/>
        <Route path='products/:id' element={<Products/>}/>
      </Routes>
      
    {/* <LoginPage/> */}
    {/* <Products/> */}
    <Footer/>
    </div>
  );
}

export default App;
