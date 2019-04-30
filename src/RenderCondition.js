import React from 'react';

/**
 * Bir sarta gore render edilecek ciktinin degistirilmesi.
 */
function RenderCondition(props) {
    const username = props.username;
    if (username) {
        return <h1>Merhaba; {username}</h1>;
    }
    return <h1>Siz ?</h1>;
}

export default RenderCondition;
