// components/ProductCard.js
import React from 'react';
import styles from '../public/styles/ProductCard.module.css'; // 假设您使用 CSS Modules

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <h2>{product.title}</h2>
      <div className={styles.rating}>
        <span>{'⭐'.repeat(product.rating)}</span> {product.ratingScore} out of 10
      </div>
      <img src={product.imageUrl} alt={product.title} className={styles.image} />
      <div className={styles.details}>
        <div className={styles.detailItem}>
          <h3>Ease To Draw</h3>
          <span>{'⭐'.repeat(product.easeToDraw)}</span> {product.easeToDrawScore} out of 10
        </div>
        <div className={styles.detailItem}>
          <h3>Look & Feel</h3>
          <span>{'⭐'.repeat(product.lookFeel)}</span> {product.lookFeelScore} out of 10
        </div>
        <div className={styles.detailItem}>
          <h3>Price</h3>
          <span>{'⭐'.repeat(product.priceRating)}</span> {product.priceRatingScore} out of 10
        </div>
      </div>
      <div className={styles.prosCons}>
        <div>
          <h3>Pros</h3>
          <ul>
            {product.pros.map((pro) => (
              <li key={pro}>{pro}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Cons</h3>
          <ul>
            {product.cons.map((con) => (
              <li key={con}>{con}</li>
            ))}
          </ul>
        </div>
      </div>
      <button className={styles.button}><a href='https://www.bing.com/images/create'>Visit Bing Image Creator To Create</a></button>
    </div>
  );
};

export default ProductCard;
