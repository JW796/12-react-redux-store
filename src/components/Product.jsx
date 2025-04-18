const Product = ({ name, price, image, amount }) => {
  return (
    <div>
        <img src={image} alt={name + "glasses"} />
        <div>
            <p>{name}</p>
            <p>{price.toFixed(2)}</p>
        </div>
        <div>
            <p>Amount</p>
            <p>{amount}</p>
        </div>
    </div>
  )
}

export default Product
