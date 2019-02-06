import React, { Component } from 'react';
import './ParaSkill.css';

export class ParaSkill extends Component{

    //bottom of parralax element at scroll position 0 === 349.20001220703125
    //position to reach with current layout 918.85498046875
    // 918.85498046875 - 349.20001220703125
    //569.6549682617188
    // actual bottom starting point 418.375

    componentDidMount(){
        const passThis = this.offset;
        const startScroll = window.pageYOffset || document.documentElement.scrollTop;

        window.addEventListener('scroll', this.paraskillScroll);

        setTimeout(function(){
            const movSel = document.getElementsByClassName('paraskill'),    
                movePic = document.querySelector('.paraskill');
            let picPos;

            if(startScroll === 0){
                picPos = passThis(movePic, 'bottom');
            } else {
                picPos = passThis(movePic, 'bottom') - (startScroll * 1.6);
                console.log(picPos);
            };
            movSel[0].dataset.origpos = picPos;
        });
    };

    componentWillUnmount(){
        window.removeEventListener('scroll', this.paraskillScroll);
    };

    offset = (el, pos) =>{
        const elRect = el.getBoundingClientRect(),
            bodRect = document.body.getBoundingClientRect(),
            dir = elRect[pos] - bodRect.top;
        return dir;
    };

    topInit = () =>{
        const sk = document.querySelector('.paraskill');
        const sb = this.offset(sk, 'bottom');
        console.log(sb, 'ssss bbbb');
    };

    calculateRScroll = (scrolled, reverser) =>{
        const sePlace = document.querySelector('.paraskill'),
            seClassPlace = document.getElementsByClassName('paraskill')[0],
            sTop = this.offset(sePlace, 'bottom'),
            pBottom = document.querySelector('.paraskill-container'),
            pottom = this.offset(pBottom, 'bottom');
        let oPos = seClassPlace.dataset.origpos;
        if(reverser !== undefined){
            console.log('reverse! reverse!');
        };
        if(oPos !== undefined){
            oPos = parseFloat(oPos);
            const right = (((scrolled * 1.6) + oPos) - pottom) * -1;
            return right;
        };
    };

    paraskillScroll = () =>{
        const paraskillElements = document.getElementsByClassName('paraskill'),
            sePlace = document.querySelector('.paraskill'),
            paraskillQuantity = paraskillElements.length,
            pElem = document.querySelector('.paraskill-container'),
            pBottom = this.offset(pElem, 'bottom'),
            cBottom = this.offset(sePlace, 'bottom'),
            pTop = this.offset(pElem, 'top'),
            sTop = this.offset(sePlace, 'bottom'),
            sCalc = this.calculateRScroll;

        window.requestAnimationFrame(function(){
            for(let i = 0; i < paraskillQuantity; i++){
                const currentElement = paraskillElements[i],
                    scrolled = window.pageYOffset || document.documentElement.scrollTop,
                    scrollSave = currentElement.dataset.scrollSave;
                let posInherit;

                
                // if (scrolled < scrollSave){
                if (sCalc(scrolled) > 0){
                    currentElement.style.transform = `translate3d(0, ${scrolled * 1.6}px, 0)`;
                    currentElement.style.bottom = 100 + '%';
                    // currentElement.dataset.scrollSave = undefined;
                // } else if (pBottom === cBottom || pBottom < cBottom){
                } else {//if (sCalc(scrolled) < 0){
                    currentElement.style.bottom = pBottom;
                    posInherit = currentElement.style.bottom;
                    console.log(sCalc(scrolled, 'true'));
                    
                    // if(scrollSave === undefined || scrollSave === 'undefined'){
                    //     currentElement.dataset.scrollSave = scrolled;
                    // };
                    // return;
                };// else {
                //     currentElement.style.transform = `translate3d(0, ${scrolled * 1.6}px, 0)`;
                // };
                console.log(sCalc(scrolled));
                console.log(posInherit, 'inheritor');
                if((sCalc(scrolled) < 0) && (currentElement.style.bottom !== pBottom)){
                    currentElement.style.bottom = pBottom;
                }
            };
        });
    };

    render(){
        return(
            <section className='paraskill-container rounded'>
                <div className='paraskill align-items-end'>
                    <p className='para-p'>Hello</p>
                </div>
            </section>
        );
    };
};