import './App.css';
import { Categorias } from './components/Categorias';
import { Documents } from './components/Documents';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <div className='container' id="container-gral">
        <div className='row'>
          <div className='col'>
            <Categorias />
          </div>
          <div className='col'>
            <Documents />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
