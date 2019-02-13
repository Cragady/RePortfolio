import React, { Component } from 'react';
import Skills from "./Skills";
import './ParaSkill.css';

const testArray = [
    'AJAX',
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
    'Sequelize'
];

//the starting top position will change, this is because of resizing. 
//reverse scrolling effects to find original starting posistion

export class ParaSkill extends Component{

    componentDidMount(){

        window.addEventListener('scroll', this.paraskillScroll);
        window.addEventListener('resize', this.bottomSetter);
        this.bottomSetter();
    };

    componentWillUnmount(){
        window.removeEventListener('scroll', this.paraskillScroll);
        window.removeEventListener('resize', this.bottomSetter);
    };

    bottomSetter = () =>{
        const thiss = this;
        
        if(window.outerWidth < 393){
            setTimeout(function(){
                const {paraskillElements, sePlace, paraskillQuantity,
                    pElem, pBottom, pTop, cBottom, sCalc,
                    scrolled, scrollSpeed, scrollPoint,
                    scrollComparator, offsetter} = thiss.paraskillScroll(true),
                    currentElement = paraskillElements[0];

                if(paraskillElements[0].dataset.origpos === undefined){
                    paraskillElements[0].dataset.origpos = cBottom;
                };
                thiss.positionListener(scrollComparator + 1, scrollComparator, cBottom, pBottom, currentElement, scrollSpeed, offsetter);
            });
        } else {
            setTimeout(function(){
                const {paraskillElements, sePlace, paraskillQuantity,
                    pElem, pBottom, pTop, cBottom, sCalc,
                    scrolled, scrollSpeed, scrollPoint,
                    scrollComparator, offsetter} = thiss.paraskillScroll(true),
                currentElement = paraskillElements[0];

                if(paraskillElements[0].dataset.origpos === undefined){
                    paraskillElements[0].dataset.origpos = cBottom;
                };
                thiss.positionListener(scrolled, scrollComparator, cBottom, pBottom, currentElement, scrollSpeed, offsetter);
                console.log(scrolled,"     ", scrollSpeed)
            });
        };
    };

    bottomSetter2 = () =>{
        if(window.outerWidth < 393){
            const {paraskillElements, sePlace, paraskillQuantity,
                pElem, pBottom, pTop, cBottom, sCalc,
                scrolled, scrollSpeed, scrollPoint,
                scrollComparator, offsetter} = this.paraskillScroll(true),
                currentElement = paraskillElements[0];

            if(paraskillElements[0].dataset.origpos === undefined){
                paraskillElements[0].dataset.origpos = cBottom;
            };
            this.positionListener(scrollComparator + 1, scrollComparator, cBottom, pBottom, currentElement, scrollSpeed, offsetter);
            this.positionListener(scrollComparator + 1, scrollComparator, cBottom, pBottom, currentElement, scrollSpeed, offsetter);
        } else{
            const {paraskillElements, sePlace, paraskillQuantity,
                pElem, pBottom, pTop, cBottom, sCalc,
                scrolled, scrollSpeed, scrollPoint,
                scrollComparator, offsetter} = this.paraskillScroll(true),
            currentElement = paraskillElements[0];

            if(paraskillElements[0].dataset.origpos === undefined){
                paraskillElements[0].dataset.origpos = cBottom;
            };
            this.positionListener(scrolled, scrollComparator, cBottom, pBottom, currentElement, scrollSpeed, offsetter);
            this.positionListener(scrolled, scrollComparator, cBottom, pBottom, currentElement, scrollSpeed, offsetter);
        };
    };

    positionListener = (s, sTar, cBot, pBot, cElem, sSpeed, ofS) =>{
        if(s >= sTar){
            // cElem.style.transform = `translate3d(0, ${Math.round(sTar * sSpeed * ofS)}px, 0)`;
            cElem.style.transform = `translate3d(0, 500px, 0)`;
            // cElem.style.bottom = pBot;
            // if(window.outerWidth > 393){
                // if(cBot < pBot || cBot > pBot){
                    
                // }
            // }
        };
    };


    offset = (el, pos, diffDir) =>{
        const elRect = el.getBoundingClientRect(),
            bodRect = document.body.getBoundingClientRect();
            let dir = elRect[pos] - bodRect.top;
            if(diffDir === 'bott'){
                return dir = bodRect.bottom - elRect[pos];
            };
        return dir;
    };

    calculateRScroll = (scrolled, sSpeed, type) =>{
        const seClassPlace = document.getElementsByClassName('paraskill')[0],
            pBottom = document.querySelector('.paraskill-container'),
            pottom = this.offset(pBottom, 'bottom');
        let oPos = seClassPlace.dataset.origpos,
            returner;

        if(oPos !== undefined){
            oPos = parseFloat(oPos);
            switch(true){
                case type === 'true':
                    const reverse = (pottom - oPos) / sSpeed;
                    returner = reverse;
                    break;
                case type === undefined:
                    const right = (((scrolled * sSpeed) + oPos) - pottom) * -1;
                    returner = right;
                    
                    break;
                case type === 'pDivPos':
                    const bottomsUp = this.offset(pBottom, 'bottom', 'bott'),
                    scrollTar = (pottom - oPos) / sSpeed,
                    scrollLeft = (bottomsUp + scrolled) * -1,
                    right2 = (((scrolled * sSpeed) + oPos) - pottom) * -1,
                    countDown = scrollTar - scrolled,
                    scrollPoss = document.getElementsByTagName('body')[0].scrollHeight - window.innerHeight;
                    if(scrollTar / scrollPoss <= 1){
                        returner = 1;
                    } else {
                        returner = scrollTar / scrollPoss;
                    };
                    // if(returner != 0){
                    //     console.log(`
                    //     ----------------------
            
                    //     da scalcer says pos is
                    //     ${scrolled}
                    //     ${scrollTar}
                    //     ${scrollLeft}      ${right2}    ${countDown}
                    //     scrollPoss: ${scrollPoss}`);
                    // };
                    // console.log(`${bottomsUp}`);
                    break;
                default:
                    break;
            };
        };
        return returner;
    };

    window2Parent = () =>{

    };

    paraskillScroll = (grabber) =>{
        //maybe find out bottom of body to bottom of parent
        //and compare the need to scroll to that ratio
        //point where bottom of parent needs to be in
        //relation to the bottom of outer window to have a 
        //complete parallax effect

        const paraskillElements = document.getElementsByClassName('paraskill'),
            sePlace = document.querySelector('.paraskill'),
            paraskillQuantity = paraskillElements.length,
            pElem = document.querySelector('.paraskill-container'),
            pBottom = this.offset(pElem, 'bottom'),
            pTop = this.offset(pElem, 'top'),
            cBottom = this.offset(sePlace, 'bottom'),
            sCalc = this.calculateRScroll,
            scrolled = window.pageYOffset || document.documentElement.scrollTop,
            scrollSpeed = (1.6 * (418.375 / pTop)),
            scrollPoint = sCalc(scrolled, scrollSpeed),
            scrollComparator = sCalc(scrolled, scrollSpeed, 'true'),
            offsetter = sCalc(scrolled, scrollSpeed, 'pDivPos'),
            thisPass = this;

            //let scrollSpeed instead?
            // console.log(pTop);
            //maybe just get getboundingclientrect calculate how high that needs to be 
            //for your stuff to work
            if(grabber === true){
                return grabber = {
                    paraskillElements, 
                    sePlace,
                    paraskillQuantity,
                    pElem,
                    pBottom,
                    pTop,
                    cBottom,
                    sCalc,
                    scrolled,
                    scrollSpeed,
                    scrollPoint,
                    scrollComparator,
                    offsetter
                };
            };
            //maybe find out bottom of body to bottom of parent
        //and compare the need to scroll to that ratio
        //point where bottom of parent needs to be in
        //relation to the bottom of outer window to have a 
        //complete parallax effect


        if(window.outerWidth < 393){
            paraskillElements[0].style.bottom = pBottom;
            return;
        } else {
            window.requestAnimationFrame(function(){
                for(let i = 0; i < paraskillQuantity; i++){
                    const currentElement = paraskillElements[i];

                    if (scrollPoint > 0){
                        currentElement.style.transform = `translate3d(0, ${Math.round(scrolled * scrollSpeed * offsetter)}px, 0)`;
                        currentElement.style.bottom = 100 + '%';
                    } else {
                        currentElement.style.bottom = pBottom;
                        thisPass.positionListener(scrolled, scrollComparator, cBottom, pBottom, currentElement, scrollSpeed, offsetter);
                    };
                };
            });
        };
    };

    wordHandler = (e) =>{
        const {target} = e;
        const {dataset, alt, src} = target;
        const {skill} = dataset;
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