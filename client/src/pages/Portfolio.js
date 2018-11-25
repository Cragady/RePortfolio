import React, { Component } from 'react';
import API from '../utils/API';
import './Pages.css';

export class Portfolio extends Component{
    constructor(props){
        super(props);
        this.state={
            picData: []
        };
    };

    componentDidMount(){
        this.getPicInfo();
    };

    getPicInfo(){
        API.allPics().then(res =>{
            this.setState({
                picData: res.data
            });
        });
    };

    picMouse = (passer)=>{
        document.getElementById('cover-' + passer).style.visibility = 'visible';
    };

    picUnMouse = (passer)=>{
        document.getElementById('cover-' + passer).style.visibility = 'hidden';
    };

    render(){
        const picLinks = this.state.picData;
        // console.log(picLinks[0]);
        return(
            <section className='container'>
                {/* <div className='card mt-5'> */}
                    <div id='my-ports' className='row'>
                        {/* <div> */}
                            {picLinks !== undefined && 
                                picLinks.map(pics =>{
                                    return( 
                                        // <div key={pics._id}>
                                        //     {pics.title}<br/>
                                        //     <a href={pics.repo} target='_blank'>Repository</a>
                                        //     <a href={pics.link} target='_blank'><img className='portimage' src={pics.piPath} alt={pics.title + ' project'} /></a>
                                        // </div>
                                        <div className='col p-0 p-img-div my-1 mx-auto' key={pics._id} onMouseOver={() => {this.picMouse(pics.title)}} onMouseLeave={() => {this.picUnMouse(pics.title)}}>
                                            <img className='portimage' src={pics.piPath} alt={pics.title + ' project'}/>
                                            <div className='view-destroyer' id={'cover-' + pics.title}>
                                                <h1 className='col-12 destroyer-text'>{pics.title}</h1>
                                                <a className='col another-a' href={pics.link} target='_blank'>App</a>
                                                <a className='col another-a' href={pics.repo} target='_blank'>Repository</a>
                                            </div>
                                        </div>
                                    );
                                })    
                            }
                        {/* </div> */}
                    </div>
                {/* </div> */}
            </section>
        );
    };
};