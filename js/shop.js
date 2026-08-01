/* ==========================================================
   KAIDO FF STORE
   shop.js
   Shop Functionality
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


    const productContainer =
        document.getElementById("productContainer");


    const searchInput =
        document.getElementById("searchInput");


    const filterButtons =
        document.querySelectorAll(".filter-btn");


    const sortSelect =
        document.getElementById("sortSelect");



    const adminProducts =
    JSON.parse(localStorage.getItem("kaidoProducts")) || [];

const allProducts = [...products, ...adminProducts];

let currentProducts = [...allProducts];



    /* ==========================
   DISPLAY PRODUCTS
========================== */

function displayProducts(items){


    if(!productContainer) return;


    productContainer.innerHTML = "";


    items.forEach(product => {


        const card = document.createElement("div");


        card.className =
        "product-card fade-up";


        card.innerHTML = `

        <span class="product-tag ${product.badge.toLowerCase()}">
            ${product.badge}
        </span>


        <img src="${product.image}"
        alt="${product.name}">


        <div class="product-info">


        <h3>${product.name}</h3>


        <p>
        Level ${product.level}
        <br>
        ${product.details}
        </p>


        <div class="price-row">


        <span class="price">
        ₹${product.price}
        </span>


        <a 
        href="product.html?id=${product.id}" 
        class="buy-btn">

        View Details

        </a>


        </div>


        </div>

        `;


        productContainer.appendChild(card);


    });


}



    /* ==========================
       SEARCH
    ========================== */


    if(searchInput){


        searchInput.addEventListener("input", () => {


            const value =
            searchInput.value.toLowerCase();



            currentProducts =
            products.filter(product =>

                product.name
                .toLowerCase()
                .includes(value)

            );



            displayProducts(currentProducts);


        });


    }



    /* ==========================
       CATEGORY FILTER
    ========================== */


    filterButtons.forEach(button => {


        button.addEventListener("click", () => {



            filterButtons.forEach(btn =>
                btn.classList.remove("active")
            );


            button.classList.add("active");



            const filter =
            button.dataset.filter;



            if(filter === "all"){


                currentProducts =
                [...products];


            }
            else{


                currentProducts =
                products.filter(product =>
                    product.category === filter
                );


            }



            displayProducts(currentProducts);


        });


    });



    /* ==========================
       SORTING
    ========================== */


    if(sortSelect){


        sortSelect.addEventListener("change", () => {



            const value =
            sortSelect.value;



            if(value === "low"){


                currentProducts.sort(
                    (a,b)=>a.price-b.price
                );


            }


            else if(value === "high"){


                currentProducts.sort(
                    (a,b)=>b.price-a.price
                );


            }


            else{


                currentProducts =
                [...products];


            }



            displayProducts(currentProducts);



        });


    }



});
