import React from 'react';

// web uygulamasi yapmak icin dom gerekiyor
import ReactDOM from 'react-dom';

// Component olarak kullanilacak App cagriliyor
import App from './App';

import * as serviceWorker from './serviceWorker';

// DOM render import edilen App'i root id sahibi div altinda render ediyor
// JSX formatinda gelen elementler React uzerinden bir JS nesnesine donusturulerek kullaniliyor
// Bunun anlami JSON olan veri kullanici tarafinda redux ile depolanabilir ve yonetilebilir
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
