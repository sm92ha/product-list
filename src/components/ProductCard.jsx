import React from "react";
import {
  CardMain,
  ProductName,
  ProductDesc,
  ProductPrice,
  Image,
  Availability
} from "./styles";

export default function ProductCard({ name, desc, img, price, availability }) {
  return (
    <CardMain>
      <Image src={img} />
      <ProductName>{name}</ProductName>
      <ProductDesc>{desc}</ProductDesc>
      <ProductPrice>Price: {price} $</ProductPrice>
      <Availability availability={availability}>
        {availability
          ? "This product is available"
          : "This product is not available right now"}
      </Availability>
    </CardMain>
  );
}
