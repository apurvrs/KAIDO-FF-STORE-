let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cart-items");
const total = document.getElementById("total-price");

function renderCart(){

container.innerHTML="";

let totalPrice=0;

cart.forEach((item,index)=>{

totalPrice += item.price;

container.innerHTML += `

<div class="cart-item">

<img src="${item.image}">

<div class="cart-info">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

</div>

<button class="remove"
onclick="removeItem(${index})">

Remove

</button>

</div>

`;

});

total.innerText="₹"+totalPrice;

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

renderCart();

}

renderCart();
