const products = [
  { id: 1, name: "Apple", price: 30, image: "apple.jpeg" },
  { id: 2, name: "Banana", price: 20, image: "banana.jpeg" },
  { id: 3, name: "Tomato", price: 15, image: "tomato.jpeg" },
  { id: 4, name: "Onion", price: 25, image: "onion.jpeg" },
  { id: 5, name: "Potato", price: 18, image: "potato.jpeg" },
  { id: 6, name: "Carrot", price: 22, image: "carrot.jpeg" },
  { id: 7, name: "Spinach", price: 12, image: "spinach.jpeg" },
  { id: 8, name: "Cucumber", price: 16, image: "cucumber.jpeg" },
  { id: 9, name: "Watermelon", price: 40, image: "watermelon.jpeg" },
  { id: 10, name: "Mango", price: 50, image: "mango.jpeg" },
  { id: 11, name: "Grapes", price: 35, image: "grapes.jpeg" },
  { id: 12, name: "Orange", price: 28, image: "orange.jpeg" },
  { id: 13, name: "Strawberry", price: 60, image: "strawberry.jpeg" },
  { id: 14, name: "Pineapple", price: 45, image: "pineapple.jpeg" },
  { id: 15, name: "Avocado", price: 55, image: "avocado.jpeg" }
];

const productList = document.getElementById("product-list");

products.forEach(p => {
  productList.innerHTML += `
    <div class="card">
      <img src="images/${p.image}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>

      <div class="qty-box">
        <button onclick="changeQty(${p.id}, -1)">−</button>
        <span id="qty-${p.id}">0</span>
        <button onclick="changeQty(${p.id}, 1)">+</button>
      </div>

      <button class="add-btn" onclick="addToCart(${p.id})">
        Add to Cart
      </button>
    </div>
  `;
});

let quantities = {};

function changeQty(id, change) {
  quantities[id] = Math.max(0, (quantities[id] || 0) + change);
  document.getElementById(`qty-${id}`).innerText = quantities[id];
}

function addToCart(id) {
  if (!quantities[id] || quantities[id] === 0) {
    alert("Please select quantity");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === id);
  cart.push({ ...product, qty: quantities[id] });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("🛒 Added to cart!");
}
