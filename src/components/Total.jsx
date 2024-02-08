import { CLEAR_LIST } from "../controller/actions";
import totalAmount from '../controller/totalAmount';
import { UseGlobalContext } from "./AppProvider";


const Total = () => {
  const { state, dispatch } = UseGlobalContext()

  const clearItems = () => {
    dispatch({ type: CLEAR_LIST })
  }

  return <div className="bottom">
    <div className="total-container">
      <span >total</span>
      <span >&#36;{totalAmount(state.items)}</span>
    </div>
    <button className="clear-btn" onClick={clearItems}>clear</button>
  </div>
}
export default Total;