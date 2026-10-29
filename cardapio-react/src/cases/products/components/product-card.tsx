import type { Product } from "../dtos/product";

type ProductCardProps = {
  product: Product;
}

export function ProductCard({product}: ProductCardProps) {
  return (
    <article>
      <figure>
        <img src={product.imageUrl} alt={product.name} />
        <figcaption>{product.name}</figcaption>
      </figure>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>R$ {product.price.toFixed(2)}</p>
      <button className="add-to-cart">Adicionar ao carrinho</button>
    </article>
  )
}