import { Header } from "./components/layout/header"
import { Footer } from "./components/layout/footer"
import { NavigationBar } from "./components/layout/navigationBar"
import { Main } from "./components/layout/main"
import { categories } from "./data/categories"

function App() {

  function handleSelectCategory(alias: string) {
    alert('Categoria: ' + alias)
  }

  return (
    <>
      <body>
        <Header />
        <NavigationBar 
        categories={categories} 
        activeCategory="todos" 
        onSelectCategory={handleSelectCategory} 
        />
        
        <Main />
        <Footer />
        <script src="./assets/js/script.js"></script>
      </body>
    </>
  )
}

export default App
