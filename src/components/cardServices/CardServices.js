import './CardServices.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function CardServices(props){
    return (
        <>
            <div className="cardServices-container">
                <FontAwesomeIcon icon={props.icon_src}  style={{color: "#ffffff"}} className={'cardServices-container-icon'} size='lg'/>
                <h1>{props.title}</h1>
            </div>
        </>

    )
}

export default CardServices