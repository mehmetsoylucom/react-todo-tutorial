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
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    /**
     * Mount ve Unmount fonksiyonlari lifecycle hooks olarak gecer
     */
    componentDidMount() {
        // Component oluşturulduğunda çalışacak fonksiyon
        this.timerID = setInterval(
            // () => this.tick() kullanımı ES6 ile gelen kısa fonksiyon kullanımıdır.
            () => this.tick(), // Class icinde cagrilan bir function
            1000
        );
    }

    componentWillUnmount() {
        // Component kaldırıldığında çalışacak fonksiyon
        clearInterval(this.timerID);
    }

    /**
     * Fonksiyon tanımlarken başına "function" yazmadığımıza dikkat edin.
     * React componentleri içerisinde fonksiyon tanımlamak istediğimizde direkt isim vererek yazıyoruz.
     */
    tick() {
        // setState() çağrısı sayesinde React, statin değiştiğini bilir ve ekranda
        // ne olması gerektiğini öğrenmek için tekrar render() eder
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>Saat şu anda {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;
