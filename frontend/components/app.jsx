import React from 'react';
import NavBar from './navbar/navbar'
import About from './About/About'
import WelcomeContainer from './Welcome/welcome_container'

// import NavBar from './navbar/navbar';
// import About from './navbar/about';
// import Welcome from './navbar/welcome';
// import Champions from './champs/champions';
// import Items from './items/items';
// import Spells from './spells/spells';
// import Stats from './stats/stats';
// import Forced from './stats/forced/forced_graph';
// import FunPart from './stats/fun_graph';
// import BarGraphs from './stats/bars/bar_graph';
// import Summoners from './summoner/summoners';
import { Route } from 'react-router-dom';

class App extends React.Component {

  render(){
    return(
      <div>
        <Route path="/" component={ NavBar } />
        <Route exact path="/" component={ WelcomeContainer } />
        <Route path="/about" component={ About } />
      </div>
    );
  }
}

export default App;
