import { h, Component } from "preact";
import FaTrophy from "preact-icons/lib/fa/trophy";
import "./index.css";

class Payouts extends Component {
  render() {
    const dues = 300;
    const infractions = 0;
    const totalPot = dues + infractions;

    return (
      <div className="row payouts">
        <div className="col-sm-10 col-sm-offset-1">
          <div className="row">
            <div className="col-sm-4 text-center second">
              <FaTrophy size={150} color="#E6E8FA" />
              <h1>2nd Place</h1>
              <h3>
                ${(0.3125 * totalPot).toFixed(2)}
              </h3>
            </div>

            <div className="col-sm-4 text-center first">
              <FaTrophy size={150} color="#CFB53B" />
              <h1>1st Place</h1>
              <h3>
                ${(0.625 * totalPot).toFixed(2)}
              </h3>
            </div>

            <div className="col-sm-4 text-center third">
              <FaTrophy size={150} color="#8C7853" />
              <h1>3rd Place</h1>
              <h3>
                ${(0.0625 * totalPot).toFixed(2)}
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4 col-sm-offset-2 text-left">
              <h3>
                Dues: ${dues}
              </h3>
            </div>
            <div className="col-sm-4 text-right">
              <h3>
                Infractions: ${infractions}
              </h3>
            </div>
          </div>
        </div>
        <div className="col-sm-1" />
      </div>
    );
  }
}

export default Payouts;
