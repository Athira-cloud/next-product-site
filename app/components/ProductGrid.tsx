"use client"
import { useState } from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductGrid.module.css";
import smallData from '@/src/mock/small/products.json';

/* General products for a beginner-friendly online store */

export default function ProductGrid() {
    console.log("smallData ", smallData);
    const [selectedCategory, setSelectedCategory] = useState("");
    const category = [...new Set(smallData.map(product => product.category))];
    console.log("categories", category);

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
                    <button key={cat} className={styles.category} onClick={() => setSelectedCategory(cat)}>
                        {cat}
                    </button>
                ))}
            </div>
            <div className={styles.grid}>
                     {selectedCategory && (
        <div>
          <h2>Products in "{selectedCategory}"</h2>
          {filteredProducts.length === 0 && <p>No products available.</p>}
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {filteredProducts.map(product => (
              <li key={product.id} style={{ marginBottom: '15px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
                <h3>{product.name}</h3>
                <h4>category - {product.category}</h4>
                <p>{product.description}</p>
                <p><strong>Price:</strong> ${product.price}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
            </div>
        </section>
    );
}
