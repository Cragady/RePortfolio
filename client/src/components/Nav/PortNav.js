import React from 'react';
import { Link } from 'react-router-dom';
import DropAc from '../Button/DropAc';
import SignModal from '../SignModal/SignModal';
import A from '../AnchorTag/AnchorTag';
import './Nav.css';

export const PortNav = props =>{
    return(
        <section>
            <h1>Projects</h1>

            <div className='my-1'>
                <ul className='nav nav-cust-port'>
                    <li className='btn no-btn ml-auto mr-3' >Project type:</li>
                    <li className='mr-auto' >
                    <div class="dropdown">
                        <button class="btn btn-cust-prof dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {props.buttontext ? props.buttontext : "Filter"}
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button class="dropdown-item">Action</button>
                            <button class="dropdown-item">Another action</button>
                            <button class="dropdown-item">Something else here</button>
                        </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};