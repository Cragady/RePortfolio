import React, {Component} from 'react';
import './Pages.css';

export class Contact extends Component {
    render(){
        return(
            <div id="main-contact">
                {/* <Not functional, I may nix this page */}
                <section className="container card mt-5 form-cust">

                    <p>Email: craigwright2048@gmail.com</p>
                    <p>Phone: (801) 808-0280</p> 
                    <a className='btn btn-user-message mb-3 form-cust' href='mailto:craigwright2048@gmail.com?subject=Contact From Portfolio'>Send Email</a>

                    {/* <form action='mailto:craigwright2048@gmail.com' method='post'
                    enctype='text/plain'>

                        <button type="submit" id="user-message-send" className="btn btn-user-message mb-3 form-cust">Send Email</button>

                    </form> */}
                </section>
            
            </div> 
        );
    };
};