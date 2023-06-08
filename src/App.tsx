
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Router from './router/Router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <footer>© Vermouth. All Rights Reserved.</footer>
    </div>
  );
};

export default App;
