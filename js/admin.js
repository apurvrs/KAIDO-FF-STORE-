/* ==========================================================
   KAIDO FF STORE
   admin.js
   Admin Product Manager
========================================================== */


document.addEventListener("DOMContentLoaded",()=>{


    const form =
    document.getElementById("productForm");



    if(!form) return;

/* ==========================
   DASHBOARD
========================== */

const productList =
document.getElementById("adminProductList");

const totalProducts =
document.getElementById("totalProducts");

const totalOrders =
document.getElementById("totalOrders");

function loadDashboard(){

    const allProducts = [
    ...products,
    ...(JSON.parse(localStorage.getItem("kaidoProducts")) || [])
];

    const orders =
    JSON.parse(
        localStorage.getItem("kaidoOrders")
    ) || [];

    totalProducts.textContent =
    allProducts.length;

    totalOrders.textContent =
    orders.length;

    productList.innerHTML = "";

    allProducts.forEach(product=>{

        const card =
        document.createElement("div");

        card.className =
        "admin-product";

        card.innerHTML = `

        <div class="product-left">

            <img
            src="${product.image}"
            alt="${product.name}">

            <div class="product-details">

                <h3>${product.name}</h3>

                <p>

                    ₹${product.price}

                </p>

                <p>

                    Level ${product.level}

                </p>

            </div>

        </div>

        <div class="admin-actions">

            <button
            class="edit-btn"
            data-id="${product.id}">

                Edit

            </button>

            <button
            class="delete-btn"
            data-id="${product.id}">

                Delete

            </button>

        </div>

        `;

        productList.appendChild(card);
       card.querySelector(".delete-btn").addEventListener("click", () => {

    if (!confirm("Delete this product?")) return;

    let adminProducts = JSON.parse(
        localStorage.getItem("kaidoProducts")
    ) || [];

    adminProducts = adminProducts.filter(
        item => item.id !== product.id
    );

    localStorage.setItem(
        "kaidoProducts",
        JSON.stringify(adminProducts)
    );

    loadDashboard();

});

    });

}
   loadDashboard();

    form.addEventListener("submit",(e)=>{


        e.preventDefault();



        let adminProducts =

        JSON.parse(
            localStorage.getItem("kaidoProducts")
        ) || [];



        const newProduct = {


            id:

            Date.now(),



            name:

            document.getElementById("name").value,



            price:

            Number(
            document.getElementById("price").value
            ),



            image: "",



            level:

            document.getElementById("level").value,



            category:

            document.getElementById("category").value,



            details:

            "Premium Free Fire Account",



            badge:

            "NEW"


        };
       
        const imageFile = document.getElementById("image").files[0];

if (!imageFile) {
    alert("Please select an image.");
    return;
}

const reader = new FileReader();

reader.onload = function () {

    newProduct.image = reader.result;

    adminProducts.push(newProduct);

    localStorage.setItem(
        "kaidoProducts",
        JSON.stringify(adminProducts)
    );

    alert("Product Added Successfully 🔥");

    form.reset();

    loadDashboard();

};

reader.readAsDataURL(imageFile);

return;


        adminProducts.push(newProduct);

    });



});
