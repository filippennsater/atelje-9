import React, { useState, useEffect, useRef } from 'react';
import '../../App.css';
import './IntroSection.scss';
import DisplacementEffect from './DisplacementEffect';

function IntroSection() {
  const [trigger, setTrigger] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTrigger(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && observer.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className='intr-container' ref={sectionRef}>
      <DisplacementEffect trigger={trigger} />
      <div className='intrc-container'>

        <div className='intr-circle-container'>
          <div className='intr-circle' style={{ mask: 'url(#circleMask)', WebkitMask: 'url(#circleMask)' }} />
        </div>
        
        <div className='intr-text-container'>
          <div className='intrctext'>
            Välkommen till min sida! Jag heter Lena Fors, och jag brinner för att hjälpa människor och företag att må bättre genom hälsofrämjande och förebyggande insatser. Oavsett om du söker stöd för att hantera stress, utveckla starkare team eller behöver samtalsstöd, så är du på rätt plats. Jag ser fram emot att få hjälpa dig på din resa mot en bättre hälsa och starkare relationer.
          </div>
        </div>

      </div>
    </div>
  );
}

export default IntroSection;