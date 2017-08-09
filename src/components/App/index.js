import { h, Component } from "preact";
import Header from "../Header/";
import Payouts from "../Payouts/";
import Infractions from "../Infractions/";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="App">
          <Payouts />
          <Infractions />
        </div>
      </div>
    );
  }
}

export default App;
