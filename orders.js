const ordersDiv = document.getElementById("orders");
const orders = JSON.parse(localStorage.getItem("orders")) || [];

if (orders.length === 0) {
  ordersDiv.innerHTML = "<p>No orders yet 📭</p>";
}

orders.forEach((order, i) => {
  let html = `
    <div class="card">
      <h3>Order #${i + 1}</h3>
      <p><strong>Date:</strong> ${order.date}</p>
  `;

  order.items.forEach(item => {
    html += `
      <div class="cart-row">
        <img src="images/${item.image}" style="width:50px;height:50px;">
        <span>${item.name} × ${item.qty}</span>
        <span>₹${item.price * item.qty}</span>
      </div>
    `;
  });

  html += `
      <p><strong>Total:</strong> ₹${order.total}</p>
    </div>
  `;

  ordersDiv.innerHTML += html;
});

function goHome() {
  window.location.href = "index.html";
}
