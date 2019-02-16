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

export class ParaSkill extends Component{

    componentDidMount(){

        window.addEventListener('scroll', this.paraskillScroll);
        window.addEventListener('resize', this.bottomSetter);
        this.bottomSetter();
        this.paraskillScroll();
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
            });
        } else {
            setTimeout(function(){
                thiss.bottomHandler('50px');
            });
        };
    };

    bottomWrapper = () =>{
        if(window.outerWidth < 393){
            this.bottomHandler('38px');
        } else {
            this.bottomHandler('50px');
        };
    };

    bottomHandler = (heightSize) =>{
        // const pE = document.getElementsByClassName('paraskill')[0],
        // sP = document.querySelector('.paraskill'),
        // cB = this.offset(sP, 'bottom');
        
        // this.setState({parallaxPos: cB});
        // pE.dataset.origpos = cB;


        const {paraskillElements, sePlace, paraskillQuantity,
            pElem, pBottom, pTop, cBottom, sCalc,
            scrolled, scrollSpeed, scrollPoint,
            scrollComparator, offsetter} = this.paraskillScroll(true),
        currentElement = paraskillElements[0],
        elemOrig = paraskillElements[0].dataset.origpos,
        bodyScroll = paraskillElements[0].dataset.scroller,
        scrollSize = document.body.scrollHeight,
        cssGrab = document.getElementsByClassName('skill-pic'),
        pointPass = ['true', scrollPoint];
        
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
        console.log(`--------------------
        scrollPoint: ${scrollPoint}
        cBottom: ${cBottom}
        pBottom: ${pBottom}
        scrollSize :D : ${scrollSize}
        oPos: ${this.calculateRScroll(scrolled, scrollSpeed, 'oPos')}
        ---------------------------------`);
        this.positionListener(scrolled, scrollComparator, cBottom, pBottom, currentElement, scrollSpeed, offsetter, pointPass);
    }

    positionListener = (s, sTar, cBot, pBot, cElem, sSpeed, ofS, sP) =>{
        // console.log(sTar);
        if(sP !== undefined && sP[1] === undefined){
            cElem.style.bottom = pBot;
            cElem.style.transform = `translate3d(0, 500px, 0)`;
        } else if(s >= sTar || cBot > pBot){
        // } else if(s >= sTar){
            cElem.style.bottom = pBot;
            cElem.style.transform = `translate3d(0, 500px, 0)`;
        } else {
            cElem.style.bottom = 100 + '%';
            cElem.style.transform = `translate3d(0, ${Math.round(s * sSpeed * ofS)}px, 0)`;
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
            seQuery = document.querySelector('.paraskill'),
            cBottom = this.offset(seQuery, 'bottom'),
            pottom = this.offset(pBottom, 'bottom'),
            scrollPoss = document.getElementsByTagName('body')[0].scrollHeight - window.innerHeight;
        let oPos = seClassPlace.dataset.origpos,
            returner;

        // function cbTry(arg1, arg2, arg3){
        //     try {
        //         return cb(arg1, arg2, arg3);
        //     } catch(err) {
        //         return;
        //     };
        // };original positioning? scrollHeight? oPos? Make another oPos? reverse engineer oPos?

        if(oPos !== undefined){
            oPos = parseFloat(oPos);
            // if(oPos < 0){
            //     oPos = 
            // }
            switch(true){
                case type === 'true':
                    const reverse = (pottom - oPos) / sSpeed;
                    console.log('reverse', reverse);
                    returner = reverse;
                    break;
                case type === undefined:
                    const right = (((scrolled * sSpeed) + oPos) - pottom) * -1;
                    //oPos = (scrolled * sSpeed) - pottom - right 
                    returner = right;
                    
                    break;
                case type === 'pDivPos':
                    const bottomsUp = this.offset(pBottom, 'bottom', 'bott'),
                        scrollTar = (pottom - oPos) / sSpeed;
                    if(scrollTar / scrollPoss <= 1){
                        returner = 1;
                    } else {
                        // returner = 1;
                        returner = scrollTar / scrollPoss;
                    };
                    break;
                case type === 'oPos':
                    const recon = ((sSpeed * 0) - pottom + 500) * -1;
                    console.log(right,' right and recon ', recon);
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
            // console.log(pTop);

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

        // if(window.outerWidth < 393){
            // thisPass.positionListener(scrolled, scrollComparator, cBottom, pBottom, paraskillElements[0], scrollSpeed, offsetter);
            // return;
        // } else {
            window.requestAnimationFrame(function(){
                for(let i = 0; i < paraskillQuantity; i++){
                    const currentElement = paraskillElements[i];
                    let scrollPass = [undefined, 'break']; 
                    if(scrollPass === undefined){
                        scrollPass = ['true', scrollPoint];
                    };
                    thisPass.positionListener(scrolled, scrollComparator, cBottom, pBottom, currentElement, scrollSpeed, offsetter, scrollPass);
                    // if(scrollPoint === undefined){
                    //     thisPass.positionListener(scrolled, scrollComparator, cBottom, pBottom, currentElement, scrollSpeed, offsetter, scrollPass);
                    // } else if (scrollPoint > 0){
                    //     // currentElement.style.transform = `translate3d(0, ${Math.round(scrolled * scrollSpeed * offsetter)}px, 0)`;
                    //     thisPass.positionListener(scrolled, scrollComparator, cBottom, pBottom, currentElement, scrollSpeed, offsetter);
                    //     // currentElement.style.bottom = 100 + '%';
                    //     currentElement.style.bottom = 100 + '%';
                    // } else {
                    //     currentElement.style.bottom = pBottom;
                    //     thisPass.positionListener(scrolled, scrollComparator, cBottom, pBottom, currentElement, scrollSpeed, offsetter);
                    // };
                };
            });
        // };
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