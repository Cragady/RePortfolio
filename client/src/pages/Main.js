import React, {Component} from 'react';
import './Pages.css';

export class Main extends Component{
    render(){
        return(
            <section className="container">
                <div className="card mt-5">

                    <div className="card-header">
                        {/* <img className="rounded-circle img-fluid img-custom m-5" src="assets/images/20180210_175508v2.png" alt="Craig Wright" /> */}
                        <h1 className="text-center border-top">About Me</h1>
                    </div>
                    
                    <p className="p-2 mt-4 p-indent">My name is Craig, I'm hoping to get myself into a job field that is more 
                        tech oriented than my current job. I usually like to go longboarding when the 
                        weather is nice, or if that seems a bit too quick paced for me at the time I'll
                        just go on a walk. I like gaming, and as of writing this, I am making my way through
                        Dark Souls 3 after taking a bit of a break from Kingdom Hearts.
                    </p>

                    <p className="p-2 p-indent">My interest in web development began as I was taking a class through SLCC,
                        Living in a Digital World, there was an assignment that had us build a 
                        working wiki page about a mock event we were to set up. To style the page, 
                        I went into the pages source and started changing things to suit the style of the 
                        project. Since then it's been a fascination, and now I've decided to take steps towards
                        becoming a web developer.
                    </p>
                </div>
            </section>
        );
    };
};