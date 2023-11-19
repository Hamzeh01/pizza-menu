function Order({ closeHour, openHour }) {
  return (
    <>
      <p className="order-text">
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online 🍕
      </p>
      <button>Order</button>
    </>
  );
}

export default Order;
