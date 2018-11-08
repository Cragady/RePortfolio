import React from 'react';
import './AnchorTag.css';

export const A = props =>{
    let classes = props.anchclass;
    let classext = props.classext;
    return(
        <div className={classext ? classext: ''} {...props}>
            {props.hrefless === 'true' ? (
                <a className={classes ? 'self-align-center logging-logger ' + classes : 'logging-logger'}>
                    {props.children ? props.children : 'Link'}
                </a>
            ) : (
                <a href={props.href} className={classes ? 'self-align-center ' + classes : ''} target={props.noTar ? '_blank' : ''}>
                    {props.children ? props.children : 'Link'}
                </a>
            )}
        </div>
    );
};

export default A;