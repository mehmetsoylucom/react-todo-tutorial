import React from 'react';

// Burada HTML ya da string degil, JSX olusturulmus
// JSX react dom icin render edilen bir format ve html ile ayni degil
// React, olayların nasıl işlendiğini, durumun zaman içinde nasıl
// değiştiğini kontrol eder ve bunları arayüze aktarır.
const title = {
    first: 'To Do App',
    second: 'with React',
    id: "titleId"
};
// JSX icin attr degerleri degisken ise "" arasinda yazilMIyor!
const header = <h1 id={title.id} className="colored"> {title.first} {title.second} : Ders {2 - 1}</h1>;

// Elementler ekranda gorunmesi istenen en kucuk yapitasidir
// React DOM ise bu elementleri guncelleyerek isleri yurutur
// Bir kez render edilmis element bir daha degismez, yeni bir render olusturmak zorundasiniz
// React Virtual Dom uzerinde islem yapar ve gercek dom ile farkli olan kismi tekrar render eder
const element = <p>Merhaba dunya!</p>;

// App bu haliyle sadece bir HTML blok return ediyor
// Bu fonksiyon bir componenttir ve site bir puzzle ise bu da bir parcadir diyebiliriz
function App(props) {
    // Her component, render islemi icin bir JSX return eder
    return (
        <div>
            <header>{header}</header>
            {element} ( yada {props.planet} )
        </div>
    );
}

/*
Componentler ES6 icin class olarak da tanimlanabilirler, fakat fonksiyon olabiliyorsa class yapilmamalidir
constructor, props, state gibi ozellikler classlar ile kullanilir.
class App extends React.Component {
    render() {
        return <h1>Merhaba {this.props.name}</h1>;
    }
}
 */

export default App;
