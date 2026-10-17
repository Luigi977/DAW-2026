export function Main() {
  return (
    <main>
          <section>
            <header>
              <h2>Produtos</h2>
              <div>
                <p>Categoria <span id="selected-category">Todos</span>: 10 itens</p>
              </div>
            </header>

            <article>
              <figure>
                <img src="./assets/img/burger.png" alt="Burger" />
                <figcaption>Burger</figcaption>
              </figure>
              <h3>Burger</h3>
              <p>Pão, Hambúrger 160 g, queijo prato e molho da casa</p>
              <p>R$ 22,00</p>
              <button className="add-to-cart">Adicionar ao carrinho</button>
            </article>

            <article>
              <figure>
                <img src="./assets/img/burger-bacon.png" alt="Bacon Burger" />
                <figcaption>Bacon Burger</figcaption>
              </figure>
              <h3>Bacon Burger</h3>
              <p>Pão, Hambúrger 160 g, bacon, queijo prato e molho da casa</p>
              <p>R$ 25,00</p>
              <button className="add-to-cart">Adicionar ao carrinho</button>
            </article>

            <article>
              <figure>
                <img src="./assets/img/burger-double.png" alt="Duplo Burger" />
                <figcaption>Duplo Burger</figcaption>
              </figure>
              <h3>Duplo Burger</h3>
              <p>Pão, 2 x Hambúrger 160 g, queijo prato e molho da casa</p>
              <p>R$ 29,00</p>
              <button className="add-to-cart">Adicionar ao carrinho</button>
            </article>

            <article>
              <figure>
                <img src="./assets/img/batata-rustica.png" alt="Batata Rustica" />
                <figcaption>Batata Rustica</figcaption>
              </figure>
              <h3>Batata Rustica</h3>
              <p>Porção de batatas fritas rusticas 300g</p>
              <p>R$ 18,00</p>
              <button className="add-to-cart">Adicionar ao carrinho</button>
            </article>

            <article>
              <figure>
                <img
                  src="./assets/img/batata-tradicional.png"
                  alt="Batata Tradicional"
                />
                <figcaption>Batata Tradicional</figcaption>
              </figure>
              <h3>Batata Tradicional</h3>
              <p>Porção de batatas fritas tradicionais 300g</p>
              <p>R$ 15,00</p>
              <button className="add-to-cart">Adicionar ao carrinho</button>
            </article>

            <article>
              <figure>
                <img src="./assets/img/refrigerante.png" alt="Refrigerante" />
                <figcaption>Refrigerante</figcaption>
              </figure>
              <h3>Refrigerante</h3>
              <p>Copo de refrigerante 300ml</p>
              <p>R$ 10,00</p>
              <button className="add-to-cart">Adicionar ao carrinho</button>
            </article>

            <article>
              <figure>
                <img src="./assets/img/agua.png" alt="Água" />
                <figcaption>Água</figcaption>
              </figure>
              <h3>Água</h3>
              <p>Garrafa de água 300ml</p>
              <p>R$ 8,00</p>
              <button className="add-to-cart">Adicionar ao carrinho</button>
            </article>

            <article>
              <figure>
                <img src="./assets/img/chopp.png" alt="Chopp" />
                <figcaption>Chopp</figcaption>
              </figure>
              <h3>Chopp</h3>
              <p>Copo de chopp 300ml</p>
              <p>R$ 12,00</p>
              <button className="add-to-cart">Adicionar ao carrinho</button>
            </article>

            <article>
              <figure>
                <img src="./assets/img/petit-gateau.png" alt="Petit Gâteau" />
                <figcaption>Petit Gâteau</figcaption>
              </figure>
              <h3>Petit Gâteau</h3>
              <p>Petit Gâteau de Chocolate 80g</p>
              <p>R$ 22,00</p>
              <button className="add-to-cart">Adicionar ao carrinho</button>
            </article>

            <article>
              <figure>
                <img
                  src="./assets/img/mousse-maracuja.png"
                  alt="Mousse de Maracujá"
                />
                <figcaption>Mousse de Maracujá</figcaption>
              </figure>
              <h3>Mousse de Maracujá</h3>
              <p>Mousse de Maracujá 100g</p>
              <p>R$ 15,00</p>
              <button className="add-to-cart">Adicionar ao carrinho</button>
            </article>
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
  );
}
