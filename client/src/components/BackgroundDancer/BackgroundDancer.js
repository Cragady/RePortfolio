import React, {Component} from 'react';
import './BackgroundDancer.css';

export class BackgroundDancer extends Component {
    // constructor(props){
    //     super(props);
    // };

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
            setTimeout(function(){cb(false, true, 1000, 440, cb)}, 160);
            return;
        } else if(runner === finisher && middle === undefined){
            Object.assign(element.style, {
                background: 'rgba(0, 0, 0, 0.440)'
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
        const thisPass = this;
        let passPi = piPath;
        Object.assign(element.style, {
            background: `url(${piPath})`,
            position: 'fixed',
            backgroundSize: '100% 100vh',
            height: '100%',
            minHeight: '100%',
            width: '100%',
            zIndex: '-2'
        });
        setInterval(function(){
            const piPath = thisPass.picRando(prePath, picArr, passPi, thisPass.picRando);
            passPi = piPath;
            thisPass.fadeGround(true, false, 440, 1000, thisPass.fadeGround,
                function(){
                    Object.assign(element.style, {
                        background: `url(${piPath})`,
                        position: 'fixed',
                        backgroundSize: '100% 100vh',
                        height: '100%',
                        minHeight: '100%',
                        width: '100%',
                        zIndex: '-2'
                    });
                }
            );
        }, 90000);
    };

    render(){
        return(
            <div className='diffground' id='diffground'>
                <div className='diffground2' id='diffground2'></div>
            </div>
        );
    };
};