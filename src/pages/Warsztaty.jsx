import react, { Component } from "react";
import "../styles/WarsztatyStyle.css";
import WarsztatyUp from "../assets/Warsztaty_up.svg";
import WarsztatyUpMobile from "../assets/Warsztaty_mobile_up.svg";
import WarsztatyDown from "../assets/Warsztaty_down.svg";
import logoWhite from "../assets/logo_medium_white.png";
import Elements from "../components/elements";
import profile from "../assets/dupa.png";

class Warsztaty extends Component {
  state = {
    width: window.innerWidth,
    videoState: "Warsztaty",
    elements: [
      {
        id: 1,
        photo: profile,
        kind: "Live",
        link: "https://www.youtube.com/embed/po5STMUQO-c",
        nick: "Kaczor Donald",
        color: "#F3E636",
        name: "Drzewa są fajne",
      },
      {
        id: 2,
        photo: profile,
        kind: "Warsztaty",
        link: "https://www.youtube.com/embed/po5STMUQO-c",
        nick: "Kaczor Donald",
        color: "#1EC51F",
        name: "Krzaki są fajne",
      },
      {
        id: 3,
        photo: profile,
        kind: "Warsztaty",
        link: "https://www.youtube.com/embed/po5STMUQO-c",
        nick: "Kaczor Donald",
        color: "#36B0D8",
        name: "Kwiaty i krzaki są fajne",
      },
      {
        id: 4,
        photo: profile,
        kind: "Wyklady",
        link: "https://www.youtube.com/embed/po5STMUQO-c",
        nick: "Kaczor Donald",
        color: "#F1544E",
        name: "EKO EKO EKO EKO EKO",
      },
      {
        id: 5,
        photo: profile,
        kind: "Wyklady",
        link: "https://www.youtube.com/embed/po5STMUQO-c",
        nick: "Kaczor Donald",
        color: "#F1F0F2",
        name: "EKO EKO EKO EKO EKO",
      },
      {
        id: 6,
        photo: profile,
        kind: "Live",
        link: "https://www.youtube.com/embed/po5STMUQO-c",
        nick: "Kaczor Donald",
        color: "#201c22",
        name: "EKO EKO EKO EKO EKO",
      },
      {
        id: 7,
        photo: profile,
        kind: "Live",
        link: "https://www.youtube.com/embed/po5STMUQO-c",
        nick: "Kaczor Donald",
        color: "#6B7B83",
        name: "EKO EKO EKO EKO EKO",
      },
      {
        id: 8,
        photo: profile,
        kind: "Live",
        link: "https://www.youtube.com/embed/po5STMUQO-c",
        nick: "Kaczor Donald",
        color: "#6C8D8D",
        name: "EKO EKO EKO EKO EKO",
      },
    ],
  };
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  changeVideoState = (name) => {
    let videoState = name;
    this.setState({ videoState });
    console.log(this.state);
  };
  render() {
    const { width } = this.state;
    const isMobile = width <= 950;
    return (
      <react.Fragment>
        <div className="main">
          <img src={logoWhite} className="logoWhite" alt="21" />
          <img
            src={isMobile ? WarsztatyUpMobile : WarsztatyUp}
            className="PhotoUp"
            alt="14"
          />
          <div className="cn">
            <div className="BigText">
              <span>
                Warsztaty, Live, Wykłady… czyli łatwodostępna pigułka z wiedzą!
              </span>
            </div>
            <div className="Conteiner">
              <div className="buttonConteiner">
                <button
                  className="button1"
                  onClick={() => this.changeVideoState("Warsztaty")}
                >
                  Warsztaty
                </button>
                <button
                  className="button1"
                  onClick={() => this.changeVideoState("Live")}
                >
                  Live
                </button>
                <button
                  className="button1"
                  onClick={() => this.changeVideoState("Wyklady")}
                >
                  Wykłady
                </button>
              </div>

              <div className="smallTextWarsztaty">
                <span>
                  W związku z naszym projektem, chcemy aby informacje były
                  przekazywane w jak najbardziej przystępny sposób oraz żeby
                  tematyka trafiała w Wasze potrzeby i zainteresowania. W ciągu
                  całego tygodnia odbędzie się ich multum, żeby faktycznie można
                  byłoby cały tydzień podsumować jako pigułka z wiedzą…
                </span>
              </div>
            </div>
          </div>
          <Elements state={this.state} />
          <img src={WarsztatyDown} className="PhotoDown" alt="15" />
        </div>
      </react.Fragment>
    );
  }
}

export default Warsztaty;
