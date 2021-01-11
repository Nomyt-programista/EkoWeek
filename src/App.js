import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Konkurs from "./pages/Konkurs";
import Pytania from "./pages/Pytania";
import Warsztaty from "./pages/Warsztaty";
import Video from "./pages/Video";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="App">
        <Switch>
          <Route path="/video" component={Video} />
          <Route path="/Konkurs" component={Konkurs} />
          <Route path="/Pytania" component={Pytania} />
          <Route path="/Warsztaty" component={Warsztaty} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </>
  );
}

export default App;
