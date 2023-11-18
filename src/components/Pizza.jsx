function Pizza({ pizzaItem }) {
  return (
    <li className={`pizza ${pizzaItem.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaItem.photoName} alt={pizzaItem.name} />
      <div>
        <h3>{pizzaItem.name}</h3>
        <p>{pizzaItem.ingredients}</p>
        <span> {pizzaItem.soldOut ? "sold out" : pizzaItem.price} </span>
      </div>
    </li>
  );
}

export default Pizza;
