import './CardServices.css'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function CardServices(props){
    
    gsap.registerPlugin(ScrollTrigger)
    const cardContainer = useRef(null)
    useEffect(()=>{
        const el = cardContainer.current;
        gsap.fromTo(el, {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: .7, scrollTrigger: {
            trigger: el
        }})
    })

    return (
        <>
            <div className="cardServices-container" ref={cardContainer}>
                <FontAwesomeIcon icon={props.icon_src}  style={{color: "#ffffff"}} className={'cardServices-container-icon'} size='lg'/>
                <h1>{props.title}</h1>
            </div>
        </>

    )
}

export default CardServices