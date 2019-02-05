import React, { Component } from 'react';
import './ParaSkill.css';

export class ParaSkill extends Component{

    componentDidMount(){
        window.addEventListener('scroll', this.paraskillScroll);
    };

    componentWillUnmount(){
        window.removeEventListener('scroll', this.paraskillScroll);
    };

    offset = (el) =>{
        const elRect = el.getBoundingClientRect(),
            bodRect = document.body.getBoundingClientRect(),
            top = elRect.bottom - bodRect.top;
            
        return top;
    };

    paraskillScroll = () =>{
        const paraskillElements = document.getElementsByClassName('paraskill'),
            sePlace = document.querySelector('.paraskill'),
            paraskillQuantity = paraskillElements.length,
            pElem = document.querySelector('.paraskill-container'),
            pBottom = this.offset(pElem),
            cBottom = this.offset(sePlace);
            
        window.requestAnimationFrame(function(){
            for(let i = 0; i < paraskillQuantity; i++){
                const currentElement = paraskillElements[i],
                    scrolled = window.pageYOffset || document.documentElement.scrollTop,
                    scrollSave = currentElement.dataset.scrollSave;

                if (scrolled < scrollSave){
                    currentElement.style.transform = `translate3d(0, ${scrolled * 1.6}px, 0)`;
                } else if (pBottom === cBottom || pBottom < cBottom){
                    if(scrollSave === undefined){
                        currentElement.dataset.scrollSave = scrolled;
                    };
                    return;
                } else {
                    currentElement.style.transform = `translate3d(0, ${scrolled * 1.6}px, 0)`;
                };
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