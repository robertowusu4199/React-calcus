import React from 'react';

const Col = (props) => {
    const {size} = props;
    return (
        <div className={`col${size ? `-${size}`: ''}`} style={Styles.col}>
            {props.children}
        </div>
    )
}


const Styles = {
    col: {
        margin: 0,
        padding:0,
    }
}

export default Col;