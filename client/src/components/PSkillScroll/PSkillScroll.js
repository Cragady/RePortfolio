import React, { Component } from 'react';
import Skills from "../Skills/Skills";
import './PSkillScroll.css';

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

export class PSkillScroll extends Component{
    constructor(props){
        super(props);
        this.skillTimer = null;
        this.skillResetterSet = null;
        this.skillShowerSet = null;
        this.state = {
            skillShower: [],
            skillWord: ''
        }
    }

    componentDidMount(){
        this.skillTimer = this.skillTimerSet();
    };

    componentWillUnmount(){
        clearInterval(this.skillTimer);
    };

    skillTimerSet = () => {
        return setTimeout(() => {
            this.skillChanger();
        }, 10000)
    };

    skillChanger = () => {
        function randSetter(){
            return Math.floor(Math.random() * testArray.length);
        };
        const oldWord = document.querySelector('.pskill-word').textContent;
        let hotSwap = randSetter();
        while(oldWord === testArray[hotSwap]){
            hotSwap = randSetter();
        };
        this.wordHandler(testArray[hotSwap]);
    };

    skillShower = () => {
        return setTimeout(() => {
            document.querySelector('.pskill-word').style.opacity = 1;
            document.querySelector('.pskill-show').style.opacity = 1;
            this.skillTimer = this.skillTimerSet();
        }, 1000);
    };

    skillResetter = (skill) => {
        clearInterval(this.skillShowerSet);
        return setTimeout(() => {
            this.setState({
                skillWord: skill,
                skillShower: [
                    <Skills 
                        key={skill + 'shower'}
                        img={`/images/skills/${skill}.png`} skill={skill} 
                        funkPass={() => {return}}
                        extraClassName='pskill-pic psk-pic-shower' />
                ]
            });
            this.skillShowerSet = this.skillShower();
        }, 1500);
    };

    wordHandler = (e) => {
        clearInterval(this.skillTimer);
        clearInterval(this.skillResetterSet);
        let skill;
        if(typeof e === 'string'){
            skill = e;
        } else if (typeof e === 'object'){
            skill = e.target.dataset.skill;
        };
        document.querySelector('.pskill-word').style.opacity = 0;
        document.querySelector('.pskill-show').style.opacity = 0;
        this.skillResetterSet = this.skillResetter(skill);
    };

    render(){
        return(
            <section className='pskillscroll-container rounded'>
                <section className='pskill-sibling'>

                    <div className='psk-child d-flex justify-content-center'>
                        <h1 className='pskill-word col-12'>{this.state.skillWord ? this.state.skillWord : 'Skills'}</h1>
                    </div>

                </section>

                <div className='pskillscroll'>
                    <section className='pskill-elem'>

                        <div className='pskill-show col-12'>{this.state.skillShower}</div>

                        {testArray.map(skill =>{
                            return (
                                <Skills key={skill} 
                                    img={`/images/skills/${skill}.png`} skill={skill} 
                                    funkPass={this.wordHandler}
                                    extraClassName='pskill-pic'
                                />
                            );
                        })}

                    </section>
                </div>
            </section>
        );
    };
};