import React from 'react';

const Skills = props =>{
    return (
        <img className={`${props.extraClassName} rounded img-fluid p-1`} src={props.img} alt={props.skill} data-skill={props.skill} onClick={props.funkPass} />
    );
};

export default Skills;