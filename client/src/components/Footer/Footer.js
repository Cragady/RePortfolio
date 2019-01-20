import React from 'react';
import './Footer.css';

export const Footer = props =>{
    return(
        <footer className='footer text-center'>
            <section className='container-fluid row no-gutters text-center'>
                <div className='col row'>
                    <p className='col-12'>My Profiles:</p>
                    <a href='https://github.com/Cragady' className='col-6 text-right' target='_blank'><img className='aref-img img-fluid rounded' alt='' src='/images/GitHub-Mark.png' /></a>
                    <a href='https://www.linkedin.com/in/craigwrightcm/' className='col-6 text-left' target='_blank'><img className='aref-img img-fluid' alt='' src='/images/Linkedin-ico.png' /></a>
                </div>
                <div className='col row'>
                    <p className='col-12'>Resume:</p>
                    <a href='/downloads/Craig-Wright-Resume.docx' className='col-12 download-text'>Word Document</a>
                    <a href='/downloads/Craig-Wright-Resume.pdf' className='col-12 download-text'>PDF</a>
                </div>
                <p className='mb-0 col-12'>Email me at: <span className='text-diff'>craigwright2048@gmail.com</span></p>
                <p className='mb-0 col-12'>Call/Text: <span className='text-diff'>(801) 808-0280</span></p>
            </section>
        </footer>
    );
};