import styles from  "./Card.module.css";

export default function Card() {
  return (
     <section className={styles.hero}>
      <p className={styles.subtitle}>ONLINE STORE</p>
      <h1 className={styles.title}>Discover Products You’ll Love</h1>
      <p className={styles.description}>
        Quality items, great prices, delivered to your door.
      </p>
      <button className={styles.button}>Shop Now</button>
    </section>
  );
}
