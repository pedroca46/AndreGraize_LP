import './global.css'
import './App.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import CardServices from './components/cardServices/CardServices';
import Navbar from './components/navbar/Navbar';
import Anim_noLimitless from './utils/animations/NoLimitless';

import Example from './images/example.png'
import ag1 from './images/ag.jpg'

import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faShip } from '@fortawesome/free-solid-svg-icons/faShip';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import OurServicesText from './components/ourServicesText/OurServicesText';
import Footer from './components/footer/Footer';


function App() {
  const noLimitless_p = useRef(null)
  const noLimitless_h1 = useRef(null)
  const noLimitless_mailto = useRef(null)
  const noLimitless = useRef(null)

  Anim_noLimitless(noLimitless, noLimitless_h1, noLimitless_p, noLimitless_mailto)
  const ourServices_p_ref = useRef(null)

  return (
    <>
      <div className='App'>
        <div className='Header'>
          <Navbar />
          <div className='header-textContainer'>
            <h1>Overseas trading & Business <br/>
            Development.</h1>
            <p>Há mais de 2 décadas nos mercados brasileiros e chineses. <br/>
            Conte com nossos serviços de ponta-a-ponta na cadeia <br/>
            de suprimentos global.</p>
            <a href="#" className='header-contactButton'>Contate-nos</a>
          </div>
          <div className='header-learnMore'>
            <FontAwesomeIcon icon={faArrowDown}  style={{color: "#ffffff",}} className='iconArrowDown' />
            <h1 className='header-text'>Quais são nossos serviços?</h1>
            <FontAwesomeIcon icon={faArrowDown}  style={{color: "#ffffff",}} className='iconArrowDown' /> {/* bounce */}
          </div>

        </div>

        <div className='section-ourServices'>
          <OurServicesText />
          <h1>Nossos serviços</h1>
          <div className='section-ourServices-hr'>
            <hr></hr><FontAwesomeIcon icon={faShip} className='section-ourServices-hr-icon'/><hr></hr>
          </div>


          <div className='section-ourServices-grid'>
            <CardServices title={(
              <>
                Preparação para <br /> importação/exportação
              </>
            )} icon_src={faHandshake}/>

            <CardServices title={(
              <>
                Preparação para <br /> importação/exportação
              </>
            )} icon_src={faHandshake}/>

            <CardServices title={(
              <>
                Preparação para <br /> importação/exportação
              </>
            )} icon_src={faHandshake}/>

            <CardServices title={(
              <>
                Preparação para <br /> importação/exportação
              </>
            )} icon_src={faHandshake}/>

            <CardServices title={(
              <>
                Preparação para <br /> importação/exportação
              </>
            )} icon_src={faHandshake}/>

            <CardServices title={(
              <>
                Preparação para <br /> importação/exportação
              </>
            )} icon_src={faHandshake}/>
          </div>
        </div>
        
        <div className='section-noLimitless' ref={noLimitless}>
            <div className='section-noLimitless-mainContent'>
              <img src={ag1} alt='Foto'></img>
              <div className='section-noLimitless-textContainer'>
                <h1 ref={noLimitless_h1}>Sem limites</h1>
                <p ref={noLimitless_p}>Rompa seus limites de compra e venda, acabe com as fronteiras que separam seus negócios de clientes e fornecedores mundiais.
                Acompanhamos você e sua empresa nesse processo de evolução,
                com toda clareza fundamentada na reputação construída ao longo dos anos.</p>
                <a href="mailto:pedro.alves6491@gmail.com" ref={noLimitless_mailto}>Entre em contato pelo info@andregraize.com.br</a>
              </div>
            </div>
        </div>

        
      </div>
      





      <Footer />
    </>
  );
}

export default App;