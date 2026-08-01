/* ==========================================================
   KAIDO FF STORE
   product.js
   Dynamic Product Details
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


    const productImage =
        document.getElementById("productImage");


    const productName =
        document.getElementById("productName");


    const productPrice =
        document.getElementById("productPrice");


    const productDescription =
        document.getElementById("productDescription");


    const productBadge =
        document.getElementById("productBadge");



    /*
       Get Product ID From URL

       Example:
       product.html?id=5
    */

    const params =
    new URLSearchParams(window.location.search);


    const id =
    Number(params.get("id")) || 1;



    const product =
products.find(item => item.id == id);



    if(!product){

        console.log("Product not found");

        return;

    }



    // Update Page Data


    if(productImage){

        productImage.src = product.image;

        productImage.alt = product.name;

    }



    if(productName){

        productName.textContent =
        product.name;

    }



    if(productPrice){

        productPrice.textContent = `₹${product.price.toLocaleString("en-IN")}`;

    }



    if(productDescription){

        productDescription.textContent =

        `Level ${product.level} Account • ${product.details}`;

    }



    if(productBadge){

        productBadge.textContent =
        product.badge;


        productBadge.className =
        `product-tag ${product.badge.toLowerCase()}`;

    }



});
