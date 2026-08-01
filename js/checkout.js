const cart =
JSON.parse(localStorage.getItem("cart")) || [];

const orderItems =
document.getElementById("order-items");
const total = 
document.getElementById("order-total");

let totalPrice = 0;

cart.forEach(item => {

totalPrice += item.price;

orderItems.innerHTML += `

<p>
${item.name}
<span style="float:right;">
₹${item.price}
</span>
</p>

`;

});

total.innerText = "₹" + totalPrice;

document.getElementById("checkout-form")
.addEventListener("submit", e => {

e.preventDefault();

alert("Thank you! Your order has been placed.");

localStorage.removeItem("cart");

window.location.href = "index.html";

});
