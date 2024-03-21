import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Compoments/Header/Header';
import Nav from './Compoments/Nav/Nav';
import HomePage from './Compoments/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
