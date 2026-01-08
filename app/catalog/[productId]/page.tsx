"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { use } from "react";
import { RootState, AppDispatch } from "../../store/store";
import { addToCart } from "../../store/cartSlice";
import { addToWishlist } from "../../store/wishlistSlice";


export default function ProductPage({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = use(params);
  const products = useSelector((state: RootState) => state.products.items);
  const product = products.find((p) => p.id === productId);
  const wishlistItems = useSelector(
  (state: RootState) => state.wishlist.items
);
const isInWishlist = wishlistItems.some(i => i.id === productId);

  const dispatch = useDispatch<AppDispatch>();
  const [quantity, setQuantity] = useState(1);

  if (!product) return <p>Product not found</p>;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: Number(product.price),
        quantity,
      })
    );
    alert(`${product.name} added to cart!`);
  };


  return (
    <div className={styles.container}>
      <b className={styles.detailscontainer}>Product Details</b>
      <h1>Name: {product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>description: {product.description}</p>
      <p>Total Reviews: {product.numReviews}</p>
      <div>
        <label>
          Quantity:{" "}
          <input
            type="number"
            value={quantity}
            min={1}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </label>
      </div>
      <button className={styles.button} onClick={handleAddToCart}>ADD TO CART</button>
      <button className={styles.button}
        onClick={() =>
          dispatch(
            addToWishlist({
              id: product.id,
              name: product.name,
              price:  Number(product.price),
            })
          )
        }
        disabled={isInWishlist}
      >
        {isInWishlist ? "In Wishlist ❤️" : "Add to Wishlist 🤍"}
      </button>
    </div>
  );
}
