import React from 'react';
import './Nav.css';

//temporary array for laying the buttons,
//I will probably find a smarter way to do this later

const butArr = ['Portfolio', 'No-Script', 'Basic', 
    'HTML', 'CSS', 'JavaScript', 'Vanilla-JS', 
    'Bootstrap', 'jQuery', 'Firebase', 'API', 'Hardware-Interface',
    'Node', 'CLI', 'NPM', 'MySQL', 'Express', 'Handlebars',
    'Sequelize', 'ORM', 'MongoDB', 'Passport', 'User-Login',
    'Mongoose', 'ES6', 'React', 'Yarn', 'MERN', 'Axios',
];

function btnShower(event){
    const name = event.target.name,
        target = event.target,
        element = document.getElementById('show-hide');

    if(name === 'hidden'){
        element.style.display = 'block';
        target.setAttribute('name', 'shown');
    } else if (name === 'shown'){
        element.style.display = 'none';
        target.setAttribute('name', 'hidden');
    };
};

export const PortNav = props =>{
    return(
        <section className='port-head rounded'>
            <h1 className='text-white'>Projects</h1>

            <div className='my-1'>
                <ul className='nav nav-cust-port'>
                    <li className='btn no-btn ml-auto mr-3' >Project type:</li>
                    <li className='mr-auto mb-2' >
                        <input className='form-control' placeholder={props.fType ? props.fType : 'All'}></input>
                    </li>
                    <li>
                        <button className='btn' name='hidden' onClick={btnShower}>Click Me!</button>
                    </li>
                    <div className='types-holder'>
                        <div className='btn-in-hiding' id='show-hide'>
                            <button className='btn btn-port m-1' name='' defaultValue onClick={props.onClick} value='' >All</button>
                            {butArr.map(types =>{
                                return(<button className='btn btn-port m-1' name={types} key={types + '-skills'} onClick={props.onClick}>{types}</button>)
                            })}
                        </div>
                    </div>
                </ul>
            </div>
        </section>
    );
};