import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data";

function Product() {
  const { id } = useParams();
  const product = products.find((i) => i.id === parseInt(id));

  if(!product){
    return(
        <h3>Not found!!!!!!</h3>
    )
  }

  return (
    <div style={styles.container}>
      <img src={product.image} height={"350px"} width={"350px"} />
      <h1>{product.name}</h1>
      <h3>$ {product.price}</h3>
      <p>{product.description}</p>
    </div>
  );
}

export default Product;

const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
};
