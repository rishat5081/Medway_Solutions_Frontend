const cardInfo = [
  {
    cardID: 1,
    title: "Tube",
    image: "s1.jpg",
    detailImages: [
      {
        imageID: 1,
        url: "s1.jpg",
      },
    ],
    description: "Tube Used for different surgiries",
    price: 12,
  },
  {
    cardID: 2,
    title: "Masks",
    image: "s2.jpg",
    detailImages: [
      {
        imageID: 1,
        url: "s2.jpg",
      },
      {
        imageID: 2,
        url: "s3.jpg",
      },
      {
        imageID: 3,
        url: "s4.jpg",
      },
      {
        imageID: 4,
        url: "s5.jpg",
      },
      {
        imageID: 5,
        url: "s6.jpg",
      },
    ],
    description: "Masks are used for Corona Virus",
    price: 12,
  },
  {
    cardID: 3,
    title: "Therapy Products",
    image: "s3.jpg",
    detailImages: [
      {
        imageID: 1,
        url: "s3.jpg",
      },
    ],
    description: "Products used in the Physical Physical",
    price: 12,
  },
  {
    cardID: 4,
    title: "Cap and Complete Face Glass",
    image: "s4.jpg",
    detailImages: [
      {
        imageID: 1,
        url: "s4.jpg",
      },
    ],
    description: "This product is used in the Hospitals during the COVID19",
    price: 12,
  },
  {
    cardID: 5,
    title: "IV Set",
    image: "s5.jpg",
    detailImages: [
      {
        imageID: 1,
        url: "s5.jpg",
      },
    ],
    description:
      "IV Set is used for the drip that is injected into the human being.",
    price: 12,
  },
  {
    cardID: 6,
    title: "Gown",
    image: "s6.jpg",
    detailImages: [
      {
        imageID: 1,
        url: "s6.jpg",
      },
    ],
    description: "Gowns are used during Covid-19 emergency",
    price: 12,
  },
];

export function getCard() {
  return cardInfo;
}

export function getMainPageCards(count) {
  return cardInfo.slice(0, count);
}
export function getCardByid(id) {
  return cardInfo.find((card) => card.cardID === id);
}
