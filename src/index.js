import React from 'react';

// web uygulamasi yapmak icin dom gerekiyor
import ReactDOM from 'react-dom';

// Component olarak kullanilacak App cagriliyor
import App from './App';

import * as serviceWorker from './serviceWorker';
import Clock from "./Clock";
import Eventer from "./Eventer";
import EventerParameter from "./EventParameter";
import RenderCondition from "./RenderCondition";
import RenderConditionClass from "./RenderConditionClass";
import PreventRender from "./PreventRender";
import ListAndKey1 from "./ListAndArray1";

// Bir element yani zamanda component de olabilir
// componentlere veri gonderilebilir.
// JSX attributelerini tek bir obje olarak bu componente aktarır. Bu objeye props diyoruz.
// Component adlarını daima büyük harfle başlatın! HTML elementleri ise kucuk harfle baslamali!
const appComponent = <App planet="Mars"/>;


// DOM render import edilen App'i root id sahibi div altinda render ediyor
// JSX formatinda gelen elementler React uzerinden bir JS nesnesine donusturulerek kullaniliyor
// Bunun anlami JSON olan veri kullanici tarafinda redux ile depolanabilir ve yonetilebilir
function tick() {
    ReactDOM.render(
        <div>
            <App planet="Pluton"/>
            <hr/>
            {appComponent}
            <hr/>
            <Clock/>
            <hr/>
            <Eventer/>
            <hr/>
            <EventerParameter/>
            <hr/>
            <RenderCondition username="aa"/>
            <hr/>
            <RenderConditionClass/>
            <hr/>
            <PreventRender renderMe={true}/>
            <hr/>
            <ListAndKey1 numbers={[1, 2, 3, 4]}/>
        </div>,
        // Root dugumu genellikle bir tanedir ve kapsayicidir
        // Dilenirse birden fazla olabilir, ayni uygulama birden cok render yapabiliyor
        // Tum react islemleri bunun icerisinde gerceklesiyor
        document.getElementById('root')
    );
}

setInterval(tick, 1000);

serviceWorker.unregister();
