const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");

function displayProducts(items) {

    productGrid.innerHTML = "";

    items.forEach(product => {

        productGrid.innerHTML += `
        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>Level ${product.level}</p>

            <div class="price">₹${product.price}</div>

            <button class="buy-product"
            onclick="viewProduct(${product.id})">
                View Details
            </button>

        </div>
        `;

    });

}

displayProducts(products);

searchInput.addEventListener("input", () => {

    const value = searchInput.value.toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(value)
    );

    displayProducts(filtered);

});

filterSelect.addEventListener("change", () => {

    const category = filterSelect.value;

    if(category === "all"){

        displayProducts(products);

        return;

    }

    const filtered = products.filter(product =>
        product.category === category
    );

    displayProducts(filtered);

});

function viewProduct(id){

    window.location.href = `product.html?id=${id}`;

}
