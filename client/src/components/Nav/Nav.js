import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export class Nav extends Component{
    constructor(props){
        super(props);
        this.location = this.props.location;
    };

    componentWillReceiveProps(nextProps){
        if (nextProps.location !== this.props.location) {
            this.location = nextProps.location;
        };
    };

    render(){
        return(
            <div className='da-navs'>
                <ul className='nav nav-cust'>
                    <li className='nav-item li-item-cust'>
                        <Link
                            to='/'
                            className={
                                this.location.pathname === '/' ? 'nav-link active' : 'nav-link inactive'
                            }
                            id={
                                this.location.pathname === '/' ? 'active-cust' : ''
                            }
                        >
                            Home
                        </Link>
                    </li>
                    <li className='nav-item li-item-cust'>
                        <Link
                            to='/portfolio'
                            className={this.location.pathname === '/portfolio' ? 'nav-link active' : 'nav-link inactive'}
                            id={this.location.pathname === '/portfolio' ? 'active-cust' : ''}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className='nav-item li-item-cust'>
                        <Link 
                            to='/about'
                            className={this.location.pathname === '/about' ? 'nav-link active' : 'nav-link inactive'}
                            id={this.location.pathname === '/about' ? 'active-cust' : ''}
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
    }