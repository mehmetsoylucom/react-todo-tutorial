import React from 'react';

/*
Bu component saati gosteriyor. index.js icinde render edilen fonksiyon
her saniyede bir kez calisip DOM'un degisen tek kismi olan saati guncelliyor.
 */
function Clock(props) {
    return (
        <div>
            <h1>Merhaba Dünya!</h1>
            <h2>Saat şu anda {props.date.toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;
