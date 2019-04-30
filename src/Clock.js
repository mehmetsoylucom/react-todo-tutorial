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

/**
 State Hakkinda

 => State'i Doğrudan Değiştirmeyin

 this.state.comment = x kullanimi sadece constructor icindir.
 diger methodlarda this.setState({comment: 'Merhaba'}); seklinde yazilmalidir.

 => State Güncellemeleri Asenkron Olabilir

 this.props ve this.state eşzamansız olarak güncellenebilir.

 this.setState({
  counter: this.state.counter + this.props.increment,
 });

 yerine asagidaki gibi prevState eski state, props guncel propslar olarak cagrilip kullanilir

 // Doğru Kullanım
 this.setState((prevState, props) => ({
        counter: prevState.counter + props.increment
 }));

 => State'leri Toplu Güncelleştirmek

 Birden fazla state aynı anda güncellenebilir.

 constructor(props) {
    super(props);
    this.state = {
       posts: [],
       comments: []
    };
 }

 Ayrıca bunları ayrı setState() çağrılarıyla bağımsız olarakta güncelleyebilirsiniz:

 componentDidMount() {
      fetchPosts().then(response => {
        this.setState({
          posts: response.posts
        });
      });

      fetchComments().then(response => {
        this.setState({
          comments: response.comments
        });
      });
 }

 this.setState({comments}) sadece this.state.comments guncelller, this.state.posts kismini güncellenmez.
*/

export default Clock;
