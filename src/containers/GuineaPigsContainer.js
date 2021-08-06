import React from "react";
//import ReactDOM from "react-dom";
import GuineaPigs from "../components/GuineaPigs";

const GUINEAPATHS = [
  "https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg",
];

export default class GuineaPigsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentGP: 0 };

    this.interval = null;

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length; // % quiere decir el resto de la divisiòn entre
    // ++current y GUINEAPATHS.length. (la formula es: dividendo - (divisor x cociente), como
    // la división va a dar 0(cociente), el resto será el dividendo (++current))
    this.setState({ currentGP: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const src = GUINEAPATHS[this.state.currentGP];
    return <GuineaPigs src={src} />;
  }
}
