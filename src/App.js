import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import FourOhFour from "./pages/404/FourOhFour";

function App() {
  return (
    <Router basename={"/uhi"}>
      <Switch>
        <Route exact path="/:hipId" component={Layout} />
        <Route component={FourOhFour} />
      </Switch>
    </Router>
  );
}

export default App;
