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

function accordionBtn(){
    const element = document.getElementById('show-hide');

    if(element.style.maxHeight){
        element.style.maxHeight = null;
    } else {
        element.style.maxHeight = element.scrollHeight + 'px';
    }
};

export const PortNav = props =>{
    return(
        <section className='port-head rounded'>
            <h1 className='text-white'>Projects</h1>

            <div className='my-1 nav-cust-port'>
                {/* <ul className='nav mb-5'>
                    <li className='btn no-btn ml-auto mx-auto' >Project type:</li>
                    <li className='mr-auto mx-auto mb-2 input-parent' >
                        //<input className='btn-ports' placeholder={props.fType ? props.fType : 'All'}></input>
                        <input className='form-control btn-ports'></input>
                        <input className='form-control autocomplete btn-ports' disabled value='test' />
                    </li>
                </ul> */}
                <div>Filtered By: </div>
                <div className='btn-acc-holder mx-auto'>
                    <button className='btn dropdown-toggle btn-accordion' onClick={accordionBtn}>{props.fType ? props.fType : 'All'}</button>
                </div>
                <div className='types-holder'>
                    <div className='btn-in-hiding' id='show-hide'>
                        <button className='btn btn-port m-1' name='' defaultValue onClick={(event) => {props.onClick(event); accordionBtn(event)}} value='' >All</button>
                        {butArr.map(types =>{
                            return(<button className='btn btn-port m-1' name={types} key={types + '-skills'} onClick={(event) => {props.onClick(event); accordionBtn(event)}}>{types}</button>)
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};