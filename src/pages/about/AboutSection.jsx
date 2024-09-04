import React from 'react';
import '../../App.css';
import './AboutSection.scss';

function AboutSection() {
    return (

        <div className='about-container'>

            <div className='cards-container'>

                <div className='info-card1'>
                    <div className='header-container'>
                        {/*<div className='about-header'>OM</div>*/}
                    </div>
                    <div className='about-text'>Efter många års erfarenhet och omfattande utbildning inom organisationspsykologi, ledarskap och stresshantering har jag specialiserat mig på att stödja individer och grupper i att nå sin fulla potential.<br/>Genom min bakgrund som stress- och ledarskapsterapeut har jag utvecklat en djup förståelse för hur neuroledarskap och personlighetsanalyser kan förbättra arbetsmiljön och effektiviteten inom organisationer. Jag är licensierad att använda flera psykologiska testverktyg, </div>
                </div>
                <div className='info-card2'>
                    <div className='about-text'>inklusive Myers-Briggs och Predictive Index, vilket gör det möjligt för mig att skräddarsy mina insatser för varje klient. Min erfarenhet som coach och yogalärare kompletterar min professionella kompetens och ger mig unika verktyg för att arbeta med både mental och fysisk hälsa. Jag brinner för att skapa hållbara förändringar och att hjälpa mina klienter att navigera genom arbetslivets utmaningar med ökad självinsikt och effektivitet.</div>
                </div>
                <div className='info-card3'>
                </div>
                <div className='info-card4'>
                    <div className='header-container'>
                        <div className='about-header'>CV</div>
                    </div>
                    <ul>
                        <li className='about-text2'>UL - Utvecklande ledare Handledarutbildning Försvarshögskolan</li>
                        <li className='about-text2'>UL-Utvecklande ledare grundkurs Försvarshögskolan</li>
                        <li className='about-text2'>IBCT Psykologpartners</li>
                        <li className='about-text2'>Yoga & Meditationslärare</li>
                        <li className='about-text2'>UL - Utvecklande ledarskap Försvarshögskolan</li>
                        <li className='about-text2'>Licensierad användare av psykologiskt test instrumentet, rekryteringsverktyg, Perspektiv, P A T Management AB Lund</li>
                        <li className='about-text2'>Licensierad att använda Myers-Briggs personlighets Indicator Assessio International AB</li>
                        <li className='about-text2'>Certifierad SMC-konsult Stress- och Arbetsmiljö-Profiler Profdoc Work AB</li>
                        <li className='about-text2'>Certifierad användare av Förändringens Fyra Rum</li>
                        <li className='about-text2'>PI Predictive Index testverktyg grupp/individ</li>
                        <li className='about-text2'>Coach individ/grupp CoachCompanion Malmö</li>
                    </ul>
                </div>

            </div>

        </div>

    )
}

export default AboutSection