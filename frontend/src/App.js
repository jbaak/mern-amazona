
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import HomeScreen from "./screeens/HomeScreen";
import ProductScreen from './screeens/ProductScreen';


function App() {
  return (
    <BrowserRouter>
      <div >
        <header >
          <Link to="/">Amazona</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/product/:slug" element={<ProductScreen />}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
