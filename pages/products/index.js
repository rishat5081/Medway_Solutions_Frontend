import React, { Component } from "react";
import { getCard } from "../../assests/cardInfo";
import Homestyles from "../../styles/Home.module.css";
import CardComp from "../../Components/CardComp";
import TextOnImage from "../../Components/textOnImage";

class index extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    this.setState({
      products: getCard(),
    });
  }
  render() {
    return (
      <div className="">
        <TextOnImage
          mainHeading="We Have"
          para="Check out the Products"
          link="lonk"
          backgroundImage="./3.jpg"
        />

        <div className="p-5 m-5">
          <div className={Homestyles.mainHeading}>
            <h1>Products</h1>
          </div>
          <div className={Homestyles.grid}>
            {this.state.products.map((card) => (
              <CardComp key={card.cardID} value={card} widthOfCard={20} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default index;
