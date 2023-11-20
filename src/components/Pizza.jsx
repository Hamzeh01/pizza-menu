function Pizza({ pizzaItem }) {
  return (
    <li className={`pizza ${pizzaItem.soldOut ? "sold-out" : ""}`}>
      <img
        src={pizzaItem.photoName}
        alt={pizzaItem.name}
        width="150px"
        height="150px"
      />
      {pizzaItem.soldOut && <span className="sold">Sold out</span>}
      <div className="menu-box">
        <h3>{pizzaItem.name}</h3>
        <p>
          {" "}
          <b>Ingredients:</b> {pizzaItem.ingredients}
        </p>
        <p>
          <b>Price:</b> {pizzaItem.price}$
        </p>
      </div>
    </li>
  );
}

export default Pizza;
