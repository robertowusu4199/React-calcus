import React from 'react';

const Displayscreen = () => {
    
    return (
        <input type="text" className= 'text-right' value="0" style={Display.screen} />
    )
}

const Display = {
    screen: {
        width: 1140,
        marginLeft: -15,
        backgroundColor: "grey",
        borderRadius: 0,
    }
}

export default Displayscreen;