import React, {Component} from 'react';
import './Pages.css';

export class Contact extends Component {
    render(){
        return(
            <div id="main-contact">
                {/* <Not functional, I may nix this page */}
                <section className="container card mt-5 form-cust">
                    <form>

                        <div className="form-group mt-3">
                            <label htmlFor="email-field">Email Address</label>
                            <input type="email" className="form-control form-cust" id="email-field" placeholder="name@example.com" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="user-message">Your Message</label>
                            <textarea className="form-control form-cust" id="user-message" rows="5"></textarea>
                        </div>

                        <button type="submit" id="user-message-send" className="btn btn-user-message mb-3 form-cust">Send Message</button>

                    </form>
                </section>
            
            </div> 
        );
    };
};