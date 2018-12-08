import React, {Component} from 'react';
import './BackgroundDancer.css';

export class BackgroundDancer extends Component {
    constructor(props){
        super(props);
    };

    componentDidMount(){
        this.diffground();
    };

    picRando = (pathing, rando, inheriter, cb) =>{
        let esperPic = pathing + rando[Math.floor(Math.random() * rando.length)];
        if(inheriter === esperPic){
            return cb(pathing, rando, inheriter, cb);
        };
        return esperPic;
    };

    fadeGround = (fRun, fBack, runner, finisher, cb, middle) =>{
        const element = document.getElementById('diffground2');
        if(fRun){
            runner += 10;
        } else if(fBack){
            runner -= 10;
        };
        if(runner === finisher && middle !== undefined){
            Object.assign(element.style, {
                background: 'rgba(0, 0, 0, 1)'
            });
            middle();
            cb(false, true, 1000, 660, cb);
        } else if(runner === finisher && middle === undefined){
            Object.assign(element.style, {
                background: 'rgba(0, 0, 0, 1)'
            });
            return;
        };
        Object.assign(element.style, {
            background: `rgba(0, 0, 0, 0.${runner})`
        });
        setTimeout(function(){cb(fRun, fBack, runner, finisher, cb, middle)}, 25);
    };

    diffground = () =>{
        const picArr = ['bamazon.PNG', 'Book-MarkY!.PNG', 'burgers.png', 
            'Burgers2.PNG', 'chef-in-your-pantry.PNG', 'clicky.PNG', 
            'friend-finder.PNG', 'friend-finder2.PNG', 
            'hangman-game.PNG', 'intronerd.PNG', 'liriJS.PNG', 'nyt-scrubber.PNG', 
            'RPG-game.PNG', 'RPS-game.PNG', 'trivia-game.PNG', 'web-scraper.PNG', 
        'word-guess-pic.PNG'];
        const element = document.getElementById('diffground');
        const prePath = 'images/';
        const piPath = this.picRando(prePath, picArr);
        let scrollCount = 0;
        Object.assign(element.style, {
            background: `url(${piPath})`,
            position: 'fixed',
            backgroundSize: '100% 100vh',
            height: '100%',
            minHeight: '100%',
            width: '100%',
            zIndex: '-2'
        });
        window.onclick = function(){console.log('hi')};
        window.addEventListener('scroll', function(){console.log('hi')});
        // window.onscroll = function(){console.log('why')};
        // window.onscroll =  function(){
        //     scrollCount++;
        //     console.log('scrolled');
        //     if(scrollCount > 150){
        //         const piPath = this.picRando(prePath, picArr, passPi, this.picRando);
        //         const passPi = piPath;
        //         this.fadeGround(true, false, 660, 1000, this.fadeGround,
        //             function(){
        //                 Object.assign(element.style, {
        //                     background: `url(${piPath})`,
        //                     position: 'fixed',
        //                     backgroundSize: '100% 100vh',
        //                     height: '100%',
        //                     minHeight: '100%',
        //                     width: '100%',
        //                     zIndex: '-2'
        //                 });
        //             }
        //         );
        //         scrollCount = 0;
        //     }
        // };
    };

    render(){
        return(
            <div className='diffground' id='diffground'>
                <div className='diffground2' id='diffground2'><div>hello</div></div>
            </div>
        );
    };
};