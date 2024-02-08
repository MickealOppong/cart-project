import Cart from '../src/Cart';
import { UseGlobalContext } from "./components/AppProvider";
import Navbar from './components/Navbar';
const App = () => {
  const { state, dispatch } = UseGlobalContext()
  // console.log(state);
  return <main>
    <Navbar />
    <Cart />
  </main>
}
export default App;