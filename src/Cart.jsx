import { UseGlobalContext } from "./components/AppProvider";
import Header from "./components/Header";
import Item from "./components/Item";
import Total from "./components/Total";


const Cart = () => {
  const { state } = UseGlobalContext()
  if (state.items.length === 0) {
    return <section className="cart-empty">
      <Header />
      <h2>is empty</h2>
    </section>
  }
  return <section className="cart">
    <Header />
    <Item />
    <Total />
  </section>
}
export default Cart;