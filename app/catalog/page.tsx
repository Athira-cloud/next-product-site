import Card from "../components/Card";
import ProductGrid from "../components/ProductGrid";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <Card />
      <ProductGrid />
    </main>
  );
}