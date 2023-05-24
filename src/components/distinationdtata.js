import { Component } from "react";
import Des1 from "../img/1.jpeg";
import Des2 from "../img/2.jpeg";
import Des3 from "../img/2.jpeg";
import Des4 from "../img/2.jpeg";
import "./destinatiion.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2> {this.props.heading} </h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}
export default DestinationData;
