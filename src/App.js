import './global.css'
import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <div className='App'>
        <div className='Header'>
          <Navbar />
          <div className='header-textContainer'>
            <h1>Overseas trading & Business <br/>
            Development.</h1>
            <p>Há mais de 2 décadas nos mercados brasileiro e chinês. <br/>
            Conte com nossos serviços de ponta-a-ponta na cadeia <br/>
            de suprimentos global.</p>
            <a href="#" className='header-contactButton'>Contate-nos</a>
          </div>


        </div>
      </div>
    </>
  );
}

export default App;
