import React from "react";
import { products } from "../data";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <div style={styles.productListContainer}>
        {products.map((i) => (
          <div
            key={i.id}
            style={styles.productCard}
            onClick={() => navigate(`/product/${i.id}`)}
          >
            <img height={"50px"} width={"50px"} src={i.image} />
            <p>{i.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },

  productListContainer: {
    display: "grid",
    gap: "10px",
    gridTemplateColumns: "1fr 1fr 1fr",
    cursor: "pointer",
  },
  productCard: {
    display: "flex",
    marginBottom: "15px",
    gap: "10px",
    border: "1px solid black",
    padding: "10px",
    borderRadius: "4px",
  },
};
