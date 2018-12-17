import React from 'react';
import './Nav.css';

//temporary array for laying the buttons,
//I will probably find a smarter way to do this later

const butArr = ['portfolio', 'no-script', 'basic', 
    'html', 'css', 'JavaScript', 'vanilla-js', 
    'bootstrap', 'jQuery', 'firebase', 'api', 'hardware-interface',
    'node', 'cli', 'npm', 'MySQL', 'express', 'handlebars',
    'sequelize', 'orm', 'MongoDB', 'passport', 'user-login',
    'mongoose', 'es6', 'react', 'yarn', 'mern', 'axios',
];

export const PortNav = props =>{
    return(
        <section className='port-head rounded'>
            <h1 className='text-white'>Projects</h1>

            <div className='my-1'>
                <ul className='nav nav-cust-port'>
                    <li className='btn no-btn ml-auto mr-3' >Project type:</li>
                    <li className='mr-auto' >
                        <div className="form-group">
                            <select className='form-control' onChange={props.onClick}>
                                <option defaultValue onClick={props.onClick} value='' >All</option>
                                {butArr.map(types =>{
                                    return(<option key={types + '-skills'} onClick={props.onClick}>{types}</option>)
                                })}
                            </select>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};