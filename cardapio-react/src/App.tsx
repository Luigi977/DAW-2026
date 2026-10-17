import { Header } from "./components/layout/header"
import { Footer } from "./components/layout/footer"
import { NavigationBar } from "./components/layout/navigationBar"
import { Main } from "./components/layout/main"

function App() {
  return (
    <>
      <body>
        <Header />  
        <NavigationBar />
        <Main />
        <Footer />
        <script src="./assets/js/script.js"></script>
      </body>
    </>
  )
}

export default App
