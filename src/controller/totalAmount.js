const totalAmount = (array) => {
  let amount = 0;
  array.map((item) => {
    amount += (item.price * item.quantity);
  })
  return amount.toFixed(2);
}
export default totalAmount;