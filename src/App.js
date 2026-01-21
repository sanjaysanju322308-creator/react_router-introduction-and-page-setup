import logo from './logo.svg';
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/includes/Nav';
import NoMatch from './components/NoMatch';
import ProductsNav from "./components/includes/ProductsNav";
import Fashion from './components/Fashion';
import Electronics from './components/Electronics';
import Products from './components/Products';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element ={<Home />} />
          <Route path="About" element ={<About />} />
          <Route path="Contact" element ={<Contact />} />
          <Route path="products" element={<ProductsNav />}>
              <Route path='all' element={<Products />}/>
              <Route path='Fashion' element={<Fashion />}/>
              <Route path='Electronics' element={<Electronics />}/>
          </Route>
          <Route path="*" element ={<NoMatch />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
