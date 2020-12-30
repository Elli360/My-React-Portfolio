import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './pages/Homepage';


class App extends Component {

  render(){
    return (
      <Router>
        <Switch>
          {/* if i want to add more pages i can simply repeat line 13 */}
          <Route exact path="/" component={Homepage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
