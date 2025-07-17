window.onload = function () {
  const ticket = JSON.parse(localStorage.getItem("lastTicket"));
  const info = document.getElementById("ticketInfo");

  if (!ticket) {
    info.innerHTML = "❌ No ticket found.";
    return;
  }

  info.innerHTML = `
    <p><strong>Name:</strong> ${ticket.name}</p>
    <p><strong>Phone:</strong> ${ticket.phone}</p>
    <p><strong>Rides:</strong> ${ticket.rides.join(", ")}</p>
    <p><strong>Quantity:</strong> ${ticket.quantity}</p>
    <p><strong>Total:</strong> Rs.${ticket.total}</p>
    <p><strong>Date:</strong> ${ticket.time}</p>
  `;
};
