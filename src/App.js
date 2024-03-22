import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Compoments/Header/Header';
import Nav from './Compoments/Nav/Nav';
import HomePage from './Compoments/HomePage/HomePage';
import WebDevlopment from './Compoments/WebDevelopment/WebDevelopment';
import InternetIsp from './Compoments/InternetIsp/InternetIsp';
import InternetDsl from './Compoments/InternetDsl/InternetDsl';
import Footer from './Compoments/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/web-development' element={<WebDevlopment/>} />
        <Route path='/internet-isp' element={<InternetIsp/>} />
        <Route path='/internet-dsl' element={<InternetDsl/>} />
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
