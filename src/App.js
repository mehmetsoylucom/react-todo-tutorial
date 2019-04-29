import React from 'react';

// Burada HTML ya da string degil, JSX olusturulmus
// JSX react dom icin render edilen bir format ve html ile ayni degil
// React, olayların nasıl işlendiğini, durumun zaman içinde nasıl
// değiştiğini kontrol eder ve bunları arayüze aktarır.
const title = {
    first: 'To Do App',
    second: 'with React'
};
const header = <h1> {title.first} {title.second} : Ders {2 - 1}</h1>;

// App bu haliyle sadece bir HTML blok return ediyor
function App() {
    return (
        <div>
            <header>{header}</header>
        </div>
    );
}

export default App;
