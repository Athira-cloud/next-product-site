"use client";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../../store/store";
import styles from "./page.module.css";
import { use } from "react";

export default function ProductPage({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = use(params);
  const products = useSelector((state: RootState) => state.products.items);
  const product = products.find((p) => p.id ===  productId);

  if (!product) return <p>Product not found</p>;

  return (
    <div className={styles.container}>
      <b className={styles.detailscontainer}>Product Details</b>
      <h1>Name: {product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>description: {product.description}</p>
      <p>Total Reviews: {product.numReviews}</p>
      <p>Rating: {product.rating}</p>
      <button className={styles.button}>ADD TO CART</button>
    </div>
  );
}
