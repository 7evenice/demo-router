import '../css/App.css';
import Nav from './Nav';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Product from './Product';
import Contact from './Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Product/> */}
      {/* <Contact/> */}
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/product' element= {<Product/>} />
        <Route path='/contact' element= {<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
