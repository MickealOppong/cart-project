import { FaShoppingBag } from 'react-icons/fa';
import totalQuantity from '../controller/totalQuantity';
import { UseGlobalContext } from './AppProvider';

const Navbar = () => {
  const { state, dispatch } = UseGlobalContext()

  return <nav>
    <div className="nav-center">
      <h2 className='title'>seaHorse</h2>
      <div className='shopping-bag'>
        <button className='bag-btn'><FaShoppingBag /></button>
        <button className="count-btn">{totalQuantity(state.items)}</button>
      </div>
    </div>
  </nav>
}
export default Navbar;