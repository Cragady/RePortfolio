import React, { Component } from 'react';
import './ParaSkill.css';

export class ParaSkill extends Component{

    componentDidMount(){
        
        window.addEventListener('scroll', this.paraPara);
    };

    componentWillUnmount(){
        window.removeEventListener('scroll', this.paraPara);
    };

    paraPara = () =>{
        const paraskillElements = document.getElementsByClassName('paraskill'),
            paraskillQuantity = paraskillElements.length;
        this.paraskillScroll(paraskillElements, paraskillQuantity);
    }

    paraskillScroll = (elem, quant) =>{
        // const paraskillElements = document.getElementsByClassName('paraskill'),
        //     paraskillQuantity = paraskillElements.length;


        // window.onscroll(function(){
            window.requestAnimationFrame(function(){
                for(let i = 0; i < quant; i++){
                    const currentElement = elem[i];
                    console.log(currentElement);
                    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
                    console.log(scrolled + " scrolled");
                    currentElement.style.transform = `translate3d(0, ${scrolled * 1.6}px, 0)`;
                    // currentElement.css({
                    //     'transform': `translate3d(0, ${scrolled * 1.6}px, 0)`
                    // });
                };
            });
        // });


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