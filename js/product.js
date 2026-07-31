const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const product = products.find(item => item.id === id);

const container = document.getElementById("product-details");

if(product){

container.innerHTML = `

<div class="product-container">

<img src="${product.image}">

<div class="product-info">

<h1>${product.name}</h1>

<p>${product.description}</p>

<p><strong>Category:</strong> ${product.category}</p>

<p><strong>Level:</strong> ${product.level}</p>

<div class="price">

₹${product.price}

</div>

<div class="buttons">

<button class="buy">Buy Now</button>

<button class="cart">Add to Cart</button>

</div>

</div>

</div>

`;

}
