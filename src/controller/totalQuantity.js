const totalQuantity = (array) => {
  let qty = 0;
  const total = array.map((item) => {
    qty += item.quantity;
  })
  return qty;
}
export default totalQuantity;