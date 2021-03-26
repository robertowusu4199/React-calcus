import React from 'react';

const Button = (props) => {
    
    const {style, title, clickHandler, block=true} = props;

    return (
        <button style = {style} className={`btn ${block ? 'btn-block': ''}`} onClick={clickHandler} > {props.children} </button>
    )
}

export default Button;  