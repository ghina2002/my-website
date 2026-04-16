let cart = JSON.parse(localStorage.getItem("cart")) || [];
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function toggleMenu() {
  const sidebar = document.getElementById("sidebar");

  if (sidebar.style.left === "0%") {
    sidebar.style.left = "-100%";
  } else {
    sidebar.style.left = "0%";
  }
}
function toggleCart() {
  const cartBox = document.getElementById("cart");

  if (cartBox.style.right === "0px") {
    cartBox.style.right = "-360px";
  } else {
    cartBox.style.right = "0px";
  }
}
const products = [
  {
    name: "Product 1",
    price: 20,
    image: "images/product1.jpg"
  },
  {
    name: "Product 2",
    price: 30,
    image: "images/product2.jpg"
  },
  {
    name: "Product 3",
     price: 30,
    image: "images/product3.jpg"
  },
   {
    name: "Product 4",
     price: 30,
    image: "images/product4.jpg"
  },
   {
    name: "Product 5",
     price: 30,
    image: "images/product5.jpg"
  },
   {
    name: "Product 6",
     price: 30,
    image: "images/product6.jpg"
  },
   {
    name: "Product 7",
     price: 30,
    image: "images/product7.jpg"
  },
   {
    name: "Product 8",
     price: 30,
    image: "images/product8.jpg"
  },
   {
    name: "Product 9",
     price: 30,
    image: "images/product9.jpg"
  },
   {
    name: "Product 10",
     price: 30,
    image: "images/product10.jpg"
  },
];


// إضافة للسلة
function addToCart(name, price, image) {
  cart.push({ name, price, image, qty: 1 });

  localStorage.setItem("cart", JSON.stringify(cart)); // ⭐ مهم
 saveCart();
  renderCart();
  toggleCart();
}

// عرض السلة
function renderCart() {
  const container = document.getElementById("cart-items");
  const count = document.getElementById("cart-count");
  const subtotal = document.getElementById("subtotal");

  container.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}">
        <div>
          <h4>${item.name}</h4>
          <p>$${item.price}</p>

          <div class="qty">
            <button onclick="changeQty(${index}, -1)">-</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${index}, 1)">+</button>
          </div>
        </div>

        <button class="delete-btn" onclick="removeItem(${index})">🗑</button>
      </div>
    `;
  });

  count.innerText = cart.length;
  subtotal.innerText = total;
}
function goCheckout() {
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "checkout.html";
}
// تغيير الكمية
function changeQty(index, change) {
  cart[index].qty += change;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  saveCart();   // ⭐ مهم

  renderCart();
}

// حذف
function removeItem(index) {
  cart.splice(index, 1);

  saveCart();   // ⭐ مهم

  renderCart();
}