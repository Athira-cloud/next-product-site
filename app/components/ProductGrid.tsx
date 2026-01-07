"use client"
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductGrid.module.css";
import smallData from '@/src/mock/small/products.json';
import { useRouter } from "next/navigation";



/* General products for a beginner-friendly online store */

export default function ProductGrid() {
    console.log("smallData ", smallData);
    const [selectedCategory, setSelectedCategory] = useState("");
    const category = [...new Set(smallData.map(product => product.category))];
    console.log("categories", category);
    const router = useRouter();

  useEffect(() => {
  if (smallData.length > 0) {
    setSelectedCategory(smallData[0].category);
  }
}, [smallData]);

    const filteredProducts = selectedCategory
        ? smallData.filter(p => p.category === selectedCategory)
        : [];

    return (
        <section className={styles.gridSection}>
            <div className={styles.sectionone}>
                <h2 className={styles.heading}>Unlock Exclusive Savings!</h2>
                <p>Select your favorite category and enjoy shopping..</p>
            </div>
            <div className={styles.sectiontwo}>
                {category.map(cat => (
                    <button key={cat} className={`${styles.category} ${selectedCategory === cat ? styles.active : ''
                        }`} onClick={() => setSelectedCategory(cat)}>
                        {cat}
                    </button>
                ))}
            </div>
            <div className={styles.grid}>
                {selectedCategory && (
                    <div>
                        <b>Products in "{selectedCategory}"</b>
                        <div className={styles.gridone}>
                            {filteredProducts.length === 0 && <p>No products available.</p>}

                            <ul className={styles.ulstyle}>
                                {filteredProducts.map(product => (
                                    
                                    <li
                                        key={product.id}
                                       className={styles.listyle}
                                        onClick={() => router.push(`/catalog/${product.id}`)}
                                    >
                                        <h3>{product.name}</h3>
                                        <h4>Category - {product.category}</h4>
                                        <p>{product.description}</p>
                                        <p><strong>Price:</strong> ${product.price}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
