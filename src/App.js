import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Science from './components/Science';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Products />
      <div className="page4">
        <Science />
        <News />
      </div>
    </div>
  );
}

export default App;
