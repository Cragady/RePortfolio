import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export const Nav = props =>{
    return(
        <div className='da-navs'>
            <ul className='nav nav-cust'>
                <li className='nav-item li-item-cust'>
                    <Link
                        to='/'
                        className={
                            window.location.pathname === '/' ? 'nav-link active' : 'nav-link inactive'
                        }
                        id={
                            window.location.pathname === '/' ? 'active-cust' : ''
                        }
                    >
                        Home
                    </Link>
                </li>
                <li className='nav-item li-item-cust'>
                    <Link
                        to='/portfolio'
                        className={window.location.pathname === '/portfolio' ? 'nav-link active' : 'nav-link inactive'}
                        id={window.location.pathname === '/portfolio' ? 'active-cust' : ''}
                    >
                        Portfolio
                    </Link>
                </li>
                <li className='nav-item li-item-cust'>
                    <Link 
                        to='/about'
                        className={window.location.pathname === '/about' ? 'nav-link active' : 'nav-link inactive'}
                        id={window.location.pathname === '/about' ? 'active-cust' : ''}
                    >
                        About Me
                    </Link>
                </li>
                {/* <li className='ml-auto mr-1 d-flex align-items-center'>
                    {props.login !== '' ? <DropAc logout={props.logout} login={props.login} /> : (
                        <div>
                            <A hrefless='true'
                                data-toggle='modal'
                                data-target='#modalLogIn'
                            classext='d-inline'>
                                Login
                            </A> <span className='or'>or</span> <A 
                                hrefless='true'
                                data-toggle='modal'
                                data-target='#modalSignUp'
                            classext='d-inline'>
                                Sign Up
                            </A>
                            <div className='mod-dump'>
                                <SignModal modId='modalLogIn' onChange={props.onChange} onClick={props.submitLo} />
                                <SignModal modId='modalSignUp' onChange={props.onChange} onClick={props.submitSi} />
                            </div>
                        </div>
                    )}
                </li> */}
            </ul>
        </div>
    );
};