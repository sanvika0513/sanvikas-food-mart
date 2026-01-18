// ===== LOAD CART =====
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartDiv = document.getElementById("cart-items");
let subtotalEl = document.getElementById("subtotal");
let totalEl = document.getElementById("total");

let subtotal = 0;
let discountAmount = 0;

// ===== RENDER CART =====
function renderCart() {
  cartDiv.innerHTML = "";
  subtotal = 0;

  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>Your cart is empty 🛒</p>";
    subtotalEl.innerText = "0";
    totalEl.innerText = "0";
    return;
  }

  cart.forEach((item, index) => {
    let itemTotal = item.price * item.qty;
    subtotal += itemTotal;

    cartDiv.innerHTML += `
      <div class="cart-row">
        <img src="images/${item.image}" width="50">
        <span>${item.name} × ${item.qty} = ₹${itemTotal}</span>
        <button class="delete-btn" onclick="removeItem(${index})">❌</button>
      </div>
    `;
  });

  subtotalEl.innerText = subtotal;
  totalEl.innerText = subtotal - discountAmount;
}

// ===== REMOVE ITEM =====
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// ===== APPLY DISCOUNT =====
function applyDiscount() {
  let code = document.getElementById("discount").value.trim();

  if (code === "sanvika50") {
    discountAmount = 50;
    alert("🎉 You got ₹50 discount!");
  } else {
    discountAmount = 0;
    alert("❌ Invalid discount code");
  }

  totalEl.innerText = subtotal - discountAmount;
}

// ===== PLACE ORDER =====
function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders.push({
    date: new Date().toLocaleString(),
    items: cart,
    total: subtotal - discountAmount
  });

  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.removeItem("cart");

  alert("🎉 Order placed successfully!");
  window.location.href = "orders.html";
}

// ===== GO BACK TO HOME =====
function goBack() {
  window.location.href = "index.html";
}

// INITIAL LOAD
renderCart();
