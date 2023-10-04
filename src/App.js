import React from 'react';
import {Router} from './components/router/Router';
import { UserProvider } from './components/providers/UserProvider';
import luffy from './images/onepiece01_luffy.png'
import Favicon from 'react-favicon';


function App() {
  return (
    <div className="App">
      <Favicon url={luffy}/>
      <UserProvider>
        <Router/>
      </UserProvider>
    </div>
  );
}

export default App;
