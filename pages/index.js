import React, { Component } from "react";
import { getData } from "../assests/mainPagePics";
import styles from "../styles/Component.module.css";
import Link from "next/link";
import Homestyles from "../styles/Home.module.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselComp from "../Components/CarouselComp";
import { getMainPageCards } from "../assests/cardInfo";
import CardComp from "../Components/CardComp";
import "font-awesome/css/font-awesome.min.css";
import Image from "next/image";
import Head from "next/head";
import image1 from "../public/1.jpg";
import TextOnImage from "../Components/textOnImage";

class Home extends Component {
  state = {
    numberofServices: 3,
    CarouselData: getData(),
    Cards: [],
  };

  componentDidMount() {
    this.setState({
      Cards: getMainPageCards(this.state.numberofServices),
    });
  }

  render() {
    return (
      <>
        <Head>
          <title>Medway Solutions</title>
        </Head>
        <TextOnImage
          mainHeading="Heading"
          para="Para"
          link="lonk"
          backgroundImage="./1.jpg"
        />

        <div className={styles.productsDiv}>
          <h3>Products</h3>
          <div className={styles.productGrid}>
            {this.state.Cards.map((card) => (
              <CardComp key={card.cardID} value={card} />
            ))}
            <div className={Homestyles.productButton}>
              <Link href="/products">
                <a>Show All Products</a>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
