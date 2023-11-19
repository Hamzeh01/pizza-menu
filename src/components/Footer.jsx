import Order from "./Order.jsx";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  const remainingTime = hour < openHour ? openHour - hour : closeHour - hour;

  return (
    <footer>
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p className="order-text">
          We are happy to welcome you between {openHour}:00 and {closeHour}:00.
          We open after {remainingTime} hour⌛
        </p>
      )}
    </footer>
  );
}

export default Footer;
