import React, { Component } from 'react';
import './Footer.css';

// function copyText(event){
//     const {name} = event.target;
//     console.log(event.target);
    // const copyText = document.getElementById(name);
    // console.log(copyText.innerHTML);
    // copyText.select();
    // document.execCommand('copy');
// };

export class Footer extends Component{

    copyText = (event) =>{
        const name = event.target.getAttribute('name');
        const copyText = document.getElementById(name);
        copyText.select();
        document.execCommand('copy');
    };

    render(){
        return(
            <footer className='footer text-center'>
                <section className='container-fluid row no-gutters text-center'>
                    <div className='col row'>
                        <p className='col-12'>My Profiles:</p>
                        <div className='col-6 text-right'><a href='https://github.com/Cragady' target='_blank' rel="noopener noreferrer"><img className='aref-img img-fluid rounded' alt='' src='/images/GitHub-Mark.png' /></a></div>
                        <div className='col-6 text-left'><a href='https://www.linkedin.com/in/craigwrightcm/' target='_blank' rel="noopener noreferrer"><img className='aref-img img-fluid' alt='' src='/images/Linkedin-ico.png' /></a></div>
                    </div>
                    <div className='col row'>
                        <p className='col-12'>Resume:</p>
                        <div className='col-12'><a href='/downloads/Craig-Wright-Resume.docx' className='download-text'>Word Document</a></div>
                        <div className='col-12'><a href='/downloads/Craig-Wright-Resume.pdf' className='download-text'>PDF</a></div>
                    </div>
                    <p className='mb-0 col-12'> <span className='email' name='email' onClick={this.copyText}>Email me at: &nbsp;
                        <input id='email' name='email' className='text-diff' value='craigwright2048@gmail.com' readOnly />
                        <span className='email-hover' name='email'>Click to Copy</span>
                    </span></p>
                    <p className='mb-0 col-12'> <span className='phone' name='phone' onClick={this.copyText}>Call/Text: &nbsp;
                        <input id='phone' name='phone' className='text-diff' value='(801) 808-0280' readOnly />
                        <span className='phone-hover' name='phone'>Click to Copy</span>
                    </span></p>
                </section>
            </footer>
        );
    }
};