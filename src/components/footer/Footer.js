import './Footer.css'
import '../../global.css'

function Footer(){
    return (
        <>
            <div className="Footer" id='footer'>
                <div className='container'>
                    <div className='navbar'>
                        <div>
                            <a href='#'>Inicio</a>
                            <a href='#'>Inicio</a>
                            <a href='#'>Inicio</a>
                            <a href='#'>Inicio</a>
                        </div>
                        <h1>André Graize</h1>
                    </div>
                    <hr></hr>
                    <div className='mainContent'>
                        <div>
                            <h1>Endereço</h1>
                            <p>Rua das Orquídeas, S/N, Condomínio Morada do Campo <br/>
                            Manhuaçu 36906500, BR</p>
                        </div>
                        <div>
                            <h1>Começando!</h1>
                            <p>Entre em contato para agendarmos uma primeira consultoria on-line. <br/>
                            <a href="mailto:pedro.alves6491@gmail.com">info@andregraize.com.br</a></p>
                        </div>
                    </div>
                    <footer></footer>
                </div>
            </div>
        </>
    )
}

export default Footer