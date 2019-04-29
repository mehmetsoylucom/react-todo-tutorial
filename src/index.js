import React from 'react';

// web uygulamasi yapmak icin dom gerekiyor
import ReactDOM from 'react-dom';

// Component olarak kullanilacak App cagriliyor
import App from './App';

import * as serviceWorker from './serviceWorker';

// DOM render import edilen App'i root id sahibi div altinda render ediyor
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
