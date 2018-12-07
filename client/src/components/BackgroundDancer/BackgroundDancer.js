import React, {Component} from 'react';

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

    diffground = () =>{
        const picArr = ['bamazon.PNG', 'Book-MarkY!.PNG', 'burgers.png', 
            'Burgers2.PNG', 'chef-in-your-pantry.PNG', 'clicky.PNG', 
            'friend-finder.PNG', 'friend-finder2.PNG', 
            'hangman-game.PNG', 'intronerd.PNG', 'liriJS.PNG', 'nyt-scrubber.PNG', 
            'RPG-game.PNG', 'RPS-game.PNG', 'trivia-game.PNG', 'web-scraper.PNG', 
        'word-guess-pic.PNG'];
        const element = document.getElementById('diffground');
        // element.style = {
        //     'background': 'black', 
        //     'position': 'fixed',
        //     'background-size': '100% 100vh',
        //     'height': '100%',
        //     'min-height': '100%',
        //     'width': '100%'
        // };
        Object.assign(element.style, {
            // background: 'black',
            position: 'fixed',
            backgroundSize: '100% 100vh',
            height: '100%',
            minHeight: '100%',
            width: '100%',
            zIndex: '-1'
        }) 
        // Object.assign(element.style, {background: 'blue'})
        // element.style.background = 'black';
        // element.style.position = 'fixed';
        // element.style.backgroundSize = '100% 100vh';
        // element.style.height = '100%';
        // element.style.width = '100%';
        // element.style.zIndex = '1000';
    };

    render(){
        return(
            <div className='diffground' id='diffground'>
                <div className='diffground2' id='diffground2'></div>
            </div>
        );
    };
};