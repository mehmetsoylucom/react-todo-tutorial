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
    /**
     * Constructor ile React.Component propslarini cagirdikten sonra
     * class bazinda kullanilacak state veri deposunu olusturuyoruz.
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                {/* bu satirda state kullanimi ile date cagrilmis durumda*/}
                <h2>Saat şu anda {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}
export default Clock;
