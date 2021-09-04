import React from "react";
import Link from "next/link";
import Homestyles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CardComp({ value }) {
  return (
    <>
      <div className={Homestyles.cardComponent}>
        <img
          className="card-img-top"
          src={"./" + value.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{value.title}</h5>
          <p className="card-text text-center">{`${value.price} PKR per piece`}</p>
          <p className="card-text">{value.description}</p>
        </div>
        <div className={Homestyles.cardComponentOverlay}>
          <Link href={"/products/" + value.cardID} title="User Profile">
            <div className={Homestyles.icon}>
              <i className="fa fa-search"></i>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CardComp;
