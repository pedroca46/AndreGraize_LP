import './global.css'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Example from './images/example.png'

// images
import ag1 from './images/ag.jpg'

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

        <div className='section-noLimitless'>
            <div className='section-noLimitless-mainContent'>
              <img src={ag1} alt='Foto'></img>
              <div className='section-noLimitless-textContainer'>
                <h1>Sem limites</h1>
                <p>Rompa seus limites de compra e venda, acabe com as fronteiras que separam seus negócios de clientes e fornecedores mundiais.
                Acompanhamos você e sua empresa nesse processo de evolução,
                com toda clareza fundamentada na reputação construída ao longo dos anos.</p>
                <a href="mailto:pedro.alves6491@gmail.com">Entre em contato pelo info@andregraize.com.br</a>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
