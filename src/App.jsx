import { Categories } from "./components/Categories/Categories"
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <Categories />
    </div>
  )
}

export default App