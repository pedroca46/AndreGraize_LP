import './CardServices.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


function CardServices(props){
    const card = useRef(null)
    useEffect(() => {
        if (!card.current) return;
        gsap.registerPlugin(ScrollTrigger); 
        gsap.fromTo(card.current, 
            { opacity: 0, y: 50 }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 1.2, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card.current,
                    start: "top 80%", 
                    toggleActions: 'play none none none',
                }
            }
        );
    }, []);

    return (
        <>
            <div className="cardServices-container" ref={card}>
                <FontAwesomeIcon icon={props.icon_src}  style={{color: "#ffffff"}} className={'cardServices-container-icon'} size='lg'/>
                <h1>{props.title}</h1>
            </div>
        </>

    )
}

export default CardServices