import "./App.css";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";
import Error from "./Pages/Error";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import { RoomProvider } from "./context";

function App() {
  return (
    <RoomProvider>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </Router>
    </RoomProvider>
  );
}

export default App;
