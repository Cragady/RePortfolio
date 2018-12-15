import React, { Component } from 'react';
import {PortNav} from '../components/Nav';
import Ports from '../components/Ports/Ports';
import API from '../utils/API';
import './Pages.css';

export class Portfolio extends Component{
    constructor(props){
        super(props);
        this.state={
            picData: [],
            filterType: ''
        };
    };

    componentDidMount(){
        this.getPicInfo();
    };

    getPicInfo = () =>{
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
        console.log(this.state.picData);
        let picLay;
        return(
            <section className='container'>
                <PortNav />
                <div id='my-ports' className='row'>
                    {picLinks !== undefined && 
                        picLinks.map(pics =>{
                            const {_id, piPath, title, link, repo} = pics;
                            this.state.filterType === '' ? 
                                picLay = (
                                    <Ports _id={_id} key={_id} piPath={piPath} 
                                    title={title} link={link} repo={repo} 
                                onMouseOver={() => this.picMouse(title)} onMouseLeave={() => {this.picUnMouse(title)}} />
                                )
                            : !pics.tags.includes(this.state.filterType) ? 
                                picLay = null 
                            : picLay = (
                                <Ports _id={_id} key={_id} piPath={piPath} 
                                    title={title} link={link} repo={repo} 
                                onMouseOver={() => this.picMouse(title)} onMouseLeave={() => {this.picUnMouse(title)}} />
                            );
                            return(picLay);
                        })    
                    }
                </div>
            </section>
        );
    };
};