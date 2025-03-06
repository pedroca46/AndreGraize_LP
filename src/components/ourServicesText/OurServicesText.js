import './OurServicesText.css'
import '../../global.css'

import { useEffect, useRef } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const text =
  "O que move essa engrenagem global são as pessoas, os melhores profissionais ligados em uma rede global, unidas pelo mesmo propósito, trabalhando em cooperação visando os melhores resultados.";

const words = text.split(" ").map((word) => word + " ");

function OurServicesText() {
  const main = useRef(null);

  useEffect(() => {
    if (main.current) {
      main.current.innerHTML = "";

      words.forEach((word) => {
        let el = document.createElement("span");
        el.className = "ourServicesText-AnimatedText"
        el.innerText = word;
        main.current.appendChild(el);
        console.log(main.current)
      });
      
      gsap.registerPlugin(ScrollTrigger)
      gsap.fromTo(".ourServicesText-AnimatedText", {
        opacity: 0,
        position: 'absolute'
      }, {
        opacity: 1,
        duration: 1,
        stagger: 0.08,
        position: 'relative',
        scrollTrigger: {
            trigger: main.current,
            start: 'top 90%',
        }
      })


      gsap.to(".ourServicesText-Main", {
        height: '30vh',
        scrollTrigger: {
            trigger: main.current,
            start: 'top 95%',
            scrub: true
        }
      })
    }
  }, [])

  return <div ref={main} className='ourServicesText-Main'></div>;
}

export default OurServicesText;
