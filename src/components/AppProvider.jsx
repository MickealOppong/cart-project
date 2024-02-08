import { createContext, useContext, useReducer } from "react";
import { product } from '../Data/product';
import reducer from '../controller/reducer';

const defaultState = {
  items: product

}
const AppContext = createContext();
export const UseGlobalContext = () => useContext(AppContext)


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  /*
  useEffect(() => {
    totalAmount(state.items)
  }, [state.items])
*/
  return <AppContext.Provider value={{ state, dispatch }}>
    {children}
  </AppContext.Provider>
}
export default AppProvider;