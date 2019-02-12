import React, { Component } from 'react';
import Skills from "./Skills";
import './ParaSkill.css';

const testArray = ['ajax_logo',
    'API',
    'Bootstrap',
    'CSS3',
    'Express',
    'Firebase',
    'git',
    'Handlebars',
    'Heroku',
    'HTML5',
    'JavaScript',
    'jQuery',
    'MERN',
    'MongoDB',
    'Mongoose',
    'MySQL',
    'Node',
    'React',
    'REST',
    'Sequelize'];

export class ParaSkill extends Component{

    componentDidMount(){
        const passThis = this.offset;

        window.addEventListener('scroll', this.paraskillScroll);

        setTimeout(function(){
            const movSel = document.getElementsByClassName('paraskill'),    
                movePic = document.querySelector('.paraskill'),
                parDiv = document.querySelector('.paraskill-container');
            let picPos;

            picPos = passThis(movePic, 'bottom');
            movSel[0].dataset.origpos = picPos;
        });
    };

    componentWillUnmount(){
        window.removeEventListener('scroll', this.paraskillScroll);
    };

    positionListener = (s, sTar, cBot, pBot, cElem, sSpeed) =>{
        if((s > sTar) && ((cBot < pBot) || (cBot > pBot))){
            cElem.style.transform = `translate3d(0, ${sTar * sSpeed}px, 0)`;
        };
    }


    offset = (el, pos) =>{
        const elRect = el.getBoundingClientRect(),
            bodRect = document.body.getBoundingClientRect(),
            dir = elRect[pos] - bodRect.top;
        return dir;
    };

    calculateRScroll = (scrolled, sSpeed, reverser) =>{
        const seClassPlace = document.getElementsByClassName('paraskill')[0],
            pBottom = document.querySelector('.paraskill-container'),
            pottom = this.offset(pBottom, 'bottom');
        let oPos = seClassPlace.dataset.origpos,
        returner;

        if((reverser === 'true') && (oPos !== undefined)){
            oPos = parseFloat(oPos);
            const reverse = (pottom - oPos) / sSpeed;
            returner = reverse;
        };
        if((oPos !== undefined) && (reverser !== 'true')){
            oPos = parseFloat(oPos);
            
            const right = (((scrolled * sSpeed) + oPos) - pottom) * -1;
            returner = right;
        };
        return returner;
    };

    paraskillScroll = () =>{
        const paraskillElements = document.getElementsByClassName('paraskill'),
            sePlace = document.querySelector('.paraskill'),
            paraskillQuantity = paraskillElements.length,
            pElem = document.querySelector('.paraskill-container'),
            pBottom = this.offset(pElem, 'bottom'),
            pTop = this.offset(pElem, 'top'),
            cBottom = this.offset(sePlace, 'bottom'),
            sCalc = this.calculateRScroll,
            thisPass = this;

        window.requestAnimationFrame(function(){
            for(let i = 0; i < paraskillQuantity; i++){
                const currentElement = paraskillElements[i],
                    scrolled = window.pageYOffset || document.documentElement.scrollTop,
                    scrollSpeed = 1.6 * (418.375 / pTop),
                    scrollPoint = sCalc(scrolled, scrollSpeed),
                    scrollComparator = sCalc(scrolled, scrollSpeed, 'true');

                if (scrollPoint > 0){
                    currentElement.style.transform = `translate3d(0, ${scrolled * scrollSpeed}px, 0)`;
                    currentElement.style.bottom = 100 + '%';
                } else {
                    currentElement.style.bottom = pBottom;
                    thisPass.positionListener(scrolled, scrollComparator, cBottom, pBottom, currentElement, scrollSpeed);
                };
            };
        });
    };

    wordHandler = (e) =>{
        const {target} = e;
        const {dataset, alt, src} = target;
        const {skill} = dataset;
        console.log(target, skill, alt, src);
        document.querySelector('.skill-word').textContent = skill;
    }

    render(){
        return(
            <section className='paraskill-container rounded'>
                <section className='para-sibling'>
                    <div className='ps-child d-flex justify-content-center'>
                        <h1 className='skill-word col-12'>Skills</h1>
                    </div>
                </section>
                <div className='paraskill align-items-end'>
                    <section className='para-elem'>

                        {testArray.map(skill =>{
                            return (
                                <Skills key={skill} 
                                    img={`/images/skills/${skill}.png`} skill={skill} 
                                    funkPass={this.wordHandler}
                                />
                            );
                        })}
                    </section>
                </div>
            </section>
        );
    };
};