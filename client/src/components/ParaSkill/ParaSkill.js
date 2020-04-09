/* 
    This file is for reference only, for legacy's sake. OR if I manage to find 
    a much cleaner way to implement the scrolling. A lot of hair being pulled 
    over this fild. There's probably a much better way to get the results I 
    wanted. My friend, a CSS master says it could all be done in CSS. I looked
    around, but it didn't do *exactly* what I wanted. But at this point, it 
    doesn't matter, I took it a different direction.
*/

import React, { Component } from 'react';
import Skills from "../Skills/Skills";
import './ParaSkill.css';

//Throw this into the database later
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
                thiss.bottomHandler('38px');
            }, 10);
        } else if(window.outerWidth > 991){
            setTimeout(function(){
                thiss.bottomHandler('75px');
            }, 10);
        } else {
            setTimeout(function(){
                thiss.bottomHandler('50px');
            }, 10);
        };
    };

    bottomHandler = (heightSize) =>{

        const {paraskillElements,  pBottom, cBottom,
            scrolled, scrollSpeed, scrollPoint,
            scrollComparator, offsetter} = this.paraskillScroll(true),
            currentElement = paraskillElements[0],
            elemOrig = paraskillElements[0].dataset.origpos,
            bodyScroll = paraskillElements[0].dataset.scroller,
            scrollSize = document.body.scrollHeight,
            cssGrab = document.getElementsByClassName('skill-pic'),
            pointPass = ['true', scrollPoint],
            thiss = this;
        
        for(let i = 0; i < cssGrab.length; i++){
            Object.assign(cssGrab[i].style, {maxHeight: heightSize});
        };
        if(elemOrig === undefined && bodyScroll === undefined){
            currentElement.dataset.origpos = cBottom;
            currentElement.dataset.scroller = scrollSize;
        } else if(bodyScroll !== scrollSize){
            currentElement.dataset.origpos = this.calculateRScroll(scrolled, scrollSpeed, 'oPos');
            currentElement.dataset.scroller = scrollSize;
        };
        
        this.positionListener(scrolled, scrollComparator, cBottom, pBottom, currentElement, scrollSpeed, offsetter, pointPass);
        setTimeout(function() {
            thiss.positionListener(scrolled, scrollComparator, cBottom, pBottom, currentElement, scrollSpeed, offsetter, pointPass);
        });
    }

    positionListener = (s, sTar, cBot, pBot, cElem, sSpeed, ofS, sP) =>{
        const scrollWin = document.body.scrollHeight - window.innerHeight;
        if(sP !== undefined && sP[1] === undefined){
            cElem.style.bottom = pBot;
            cElem.style.transform = `translate3d(0, 500px, 0)`;
        } else if(s >= sTar || cBot >= pBot){
            cElem.style.bottom = pBot;
            cElem.style.transform = `translate3d(0, 500px, 0)`;
        } else if (scrollWin <= 1){
            cElem.style.bottom = pBot;
            cElem.style.transform = `translate3d(0, 500px, 0)`;
        } else if(cBot >= pBot){
            return; 
        } else {
            cElem.style.bottom = 100 + '%';
            cElem.style.transform = `translate3d(0, ${Math.round(s * sSpeed * ofS)}px, 0)`;
        };
    };


    offset = (el, pos, diffDir) =>{
        const elRect = el.getBoundingClientRect(),
            bodRect = document.body.getBoundingClientRect();
            let dir = elRect[pos] - bodRect.top;
        return dir;
    };

    calculateRScroll = (scrolled, sSpeed, type) =>{
        const seClassPlace = document.getElementsByClassName('paraskill')[0],
            pBottom = document.querySelector('.paraskill-container'),
            pottom = this.offset(pBottom, 'bottom'),
            scrollPoss = document.body.scrollHeight - window.innerHeight;
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
                    const scrollTar = (pottom - oPos) / sSpeed;
                    if(scrollTar / scrollPoss <= 1){
                        returner = 1;
                    } else {
                        returner = scrollTar / scrollPoss;
                    };
                    break;
                case type === 'oPos':
                    const recon = ((sSpeed * 0) - pottom + 500) * -1;
                    returner = recon;
                    break;
                default:
                    break;
            };
        };
        return returner;
    };

    paraskillScroll = (grabber) =>{
        const paraskillElements = document.getElementsByClassName('paraskill'),
            sePlace = document.querySelector('.paraskill'),
            paraskillQuantity = paraskillElements.length,
            pElem = document.querySelector('.paraskill-container'),
            pBottom = this.offset(pElem, 'bottom'),
            pTop = this.offset(pElem, 'top'),
            cBottom = this.offset(sePlace, 'bottom'),
            sCalc = this.calculateRScroll,
            scrolled = window.pageYOffset || document.documentElement.scrollTop,
            scrollSpeed = (1.6 * 418.375/pTop),
            scrollPoint = sCalc(scrolled, scrollSpeed),
            scrollComparator = sCalc(scrolled, scrollSpeed, 'true'),
            offsetter = sCalc(scrolled, scrollSpeed, 'pDivPos'),
            thisPass = this;

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

        window.requestAnimationFrame(function(){
            for(let i = 0; i < paraskillQuantity; i++){
                const currentElement = paraskillElements[i];
                let scrollPass = [undefined, 'break']; 
                if(scrollPass === undefined){
                    scrollPass = ['true', scrollPoint];
                };
                thisPass.positionListener(scrolled, scrollComparator, cBottom, pBottom, currentElement, scrollSpeed, offsetter, scrollPass);
            };
        });
    };

    wordHandler = (e) =>{
        const {skill} = e.target.dataset;
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
                <div className='paraskill d-flex align-items-end'>
                    <section className='para-elem'>

                        {testArray.map(skill =>{
                            return (
                                <Skills key={skill} 
                                    img={`/images/skills/${skill}.png`} skill={skill} 
                                    funkPass={this.wordHandler}
                                    extraClassName='skill-pic'
                                />
                            );
                        })}
                    </section>
                </div>
            </section>
        );
    };
};