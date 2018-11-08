import React from 'react';
import './Ports.css';

export const Ports = props =>{
    return(
        <div className="work col-12 col-sm-6 col-lg-4 text-center">
            <a href={props.href} target="_blank" className="card">
                <h3>{props.projName}</h3>
                <img src={props.imgPath} className="portimage" alt={props.imgDesc} />
            </a>
        </div>
    );
};

export default Ports;