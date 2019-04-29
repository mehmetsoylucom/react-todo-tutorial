import React from 'react';

/*
Bu component saati gosteriyor. index.js icinde render edilen fonksiyon
her saniyede bir kez calisip DOM'un degisen tek kismi olan saati guncelliyor.
 */

/*
Component artik bir class ve ES6 class yapisini kullaniyor.
Artik class kullandigimizdan state ve lifecycle da kullanabiliriz.
 */
class Clock extends React.Component {
    render() {
        return (
            <div>
                <h2>Saat şu anda {this.props.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;
