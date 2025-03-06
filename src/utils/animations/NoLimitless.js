import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

var Anim_noLimitless = (noLimitless, noLimitless_h1, noLimitless_p, noLimitless_mailto) =>{
    gsap.registerPlugin(ScrollTrigger)

    useEffect(()=>{
      var elements = gsap.utils.toArray([noLimitless_h1.current, noLimitless_p.current, noLimitless_mailto.current]);
      let animDel = 0

      elements.forEach(el => {
        console.log(el)
        animDel += .1
        gsap.fromTo(el, {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: .7, delay: animDel,scrollTrigger: {
          trigger: noLimitless.current,
          start: "top 80%"
        }})
      }) 
    })
  }

  export default Anim_noLimitless