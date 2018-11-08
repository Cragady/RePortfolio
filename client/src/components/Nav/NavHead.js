import React from 'react';
import TextIn from '../SearchForm/TextIn';
import './Nav.css';

export const NavHead = props =>{
    return (
        <div className='da-head-navs top-nav my-1'>
            <ul className='nav'>
                <li className='text-in'>
                    <TextIn name={props.sName} value={props.sValue} onChange={props.sChange} className='search-input' />
                </li>
            </ul>
        </div>
    );
};