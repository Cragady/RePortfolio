import React from 'react';
import './DropAc.css';

const DropAc = props =>(
    <div className='dropdown'>
        <button className='btn btn-secondary dropdown-toggle py-0 drop-cust' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
            {props.login}
        </button>
        <div className='dropdown-menu dropdown-menu-right drop-menu-cust' aria-labelledby='dropdownMenuButton'>
            <a href='#' className='dropdown-item'>item</a>
            <a href='#' className='dropdown-item'>item</a>
            <a className='dropdown-item' onClick={props.placeholder}>action</a>
        </div>
    </div>
);

export default DropAc;