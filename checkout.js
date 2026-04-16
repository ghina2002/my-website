let cart = JSON.parse(localStorage.getItem("cart")) || [];

const itemsBox = document.getElementById("summary-items");
const totalBox = document.getElementById("summary-total");

let total = 0;

cart.forEach(item => {
  total += item.price * item.qty;

  itemsBox.innerHTML += `
    <div class="summary-item">
      <img src="${item.image}">
      <div>
        <h4>${item.name}</h4>
        <p>${item.qty} x $${item.price}</p>
      </div>
    </div>
  `;
});

totalBox.innerText = total;
renderCart;
