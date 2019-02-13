import React, { Component } from 'react';
import { ParaSkill } from '../components/ParaSkill';
import './Pages.css';
import API from '../utils/API';

export class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            picData: []
        }
    };

    getPicInfo = () =>{
        API.skillPics().then(res =>{
            this.setState({
                picData: res.data
            });
        });
    };

    render(){
        return(
            <section className="container cont-cust">

                <div className="card-header">
                    <h3 className="text-center border-top border-secondary text-white pt-3">Welcome! I'm Craig Wright, a certified Full Stack Developer</h3>
                </div>

                <div className='row'>
                    <div className='col'>
                        <img className='rounded img-fluid img-me mb-1' src='/images/propic2.jpg' alt='Craig Wright' />
                    </div>

                    <div className='col quick-intro text-white align-self-center'>
                        <p>As a developer, my goal is to ever expand my skill set, enabling me to be versatile in any work environment.</p>
                    </div>
                </div>
                
                <ParaSkill />

            </section>
        );
    };
};