import { Header } from "./components/layout/header"
import { Footer } from "./components/layout/footer"
import { NavigationBar } from "./components/layout/navigationBar"
import { categories } from "./data/categories"
import { useState } from "react"
import { ProductCard } from "./cases/products/components/product-card"
import { useProducts } from "./cases/products/hooks/use-product"

function App() {

  const [activeCategory, setActiveCategory] = useState<string>("todos");

  const products = useProducts();

  function handleSelectCategory(alias: string) {
    setActiveCategory(alias);
  }

  return (
    <>
      <body>
        <Header />
        <NavigationBar
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />

        <main>
          <section>
            <header>
              <h2>Produtos</h2>
              <div>
                <p>Categoria <span id="selected-category">{activeCategory}</span>: 10 itens</p>
              </div>
            </header>

            {products.map((product) => (
              <ProductCard product={product} />
            ))}

            
          </section>

          <aside>
            <h2>Seu pedido</h2>

            <div className="cart-empty">
              <img src="./assets/img/cart.svg" />
              <p>Seu carrinho está vazio</p>
              <p>Escolha um item do cardápio para começar</p>
            </div>
          </aside>
        </main>

        <Footer />
        <script src="./assets/js/script.js"></script>
      </body>
    </>
  )
}

export default App
