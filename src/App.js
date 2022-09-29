import './App.css';
import { Categorias } from './components/Categorias';
import { Documents } from './components/Documents';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <div className='container mt-5'>
       <h2 className="lin-prod fw-bold">Líneas personales</h2>
      </div>
      <div className='container' id="container-gral">
        <div className='row'>
          <div className='col-lg-4 me-0 pe-0'>
            <Categorias />
          </div>
          <div className='col-lg-8 me-0 pe-0'>
            <Documents />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
