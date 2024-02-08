import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { DECREASE_QTY, INCREASE_QTY, REMOVE_ITEM } from '../controller/actions';
import { UseGlobalContext } from './AppProvider';

const Item = () => {
  const { state, dispatch } = UseGlobalContext()


  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } })
  }

  const increaseQuantity = (id) => {
    dispatch({ type: INCREASE_QTY, payload: { id } })
  }

  const decreaseQuantity = (id) => {
    dispatch({ type: DECREASE_QTY, payload: { id } })
  }


  return <section className="item-container">
    <div className='items'>
      {
        state.items.map((product) => {
          const { id, img, title, price, quantity } = product;
          return <article className='single-item' key={id}>
            <img src={img} alt={title} className='product-img' />
            <div className="item-details">
              <div children="item-data">
                <p className="item-desc">{title}</p>
                <p className="item-price">&#36;{price}</p>
              </div>
              <button className="remove-btn" onClick={() => removeItem(id)}>remove</button>
            </div>
            <div className='qty-container'>
              <button className="increase-btn btn" onClick={() => increaseQuantity(id)}><FaChevronUp /></button>
              <span className='qty'>{quantity}</span>
              <button className="increase-btn btn" onClick={() => decreaseQuantity(id)}><FaChevronDown /></button>
            </div>
          </article>
        })
      }

    </div>
  </section>
}
export default Item;