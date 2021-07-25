import {HashRouter, Route, Switch} from 'react-router-dom'
import Game from "./components/Game";
import Home from "./components/Home";

import './styles/App.scss'
import Step1 from "./components/tutorial/Step1";
import Step2 from "./components/tutorial/Step2";
import Step3 from "./components/tutorial/Step3";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path={'/'}>
            <Home/>
          </Route>
          <Route exact path={'/step1'}>
            <Step1/>
          </Route>
          <Route exact path={'/step2'}>
            <Step2/>
          </Route>
          <Route exact path={'/step3'}>
            <Step3/>
          </Route>
          <Route exact path={'/game'}>
            <Game/>
          </Route>
          <Route path={'/'}>
            <h1>404 Error</h1>
            <h2>Kat gya TERA!! Kuch ni hai idhar</h2>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
