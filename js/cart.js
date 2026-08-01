/* ==========================================================
   KAIDO FF STORE
   cart.js
   Cart System
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


    let cart = JSON.parse(localStorage.getItem("kaidoCart")) || [];



    const cartContainer =
    document.getElementById("cartContainer");


    const cartTotal =
    document.getElementById("cartTotal");



    /* ==========================
       ADD TO CART
    ========================== */


    const addButton =
    document.getElementById("addToCart");



    if(addButton){


        const params =
        new URLSearchParams(window.location.search);


        const id =
        Number(params.get("id")) || 1;



        const product =
        products.find(item => item.id === id);



        addButton.addEventListener("click",()=>{


            const exists =
            cart.find(item => item.id === product.id);



            if(!exists){

                cart.push(product);

                saveCart();

                alert("Added to Cart 🔥");

            }
            else{

                alert("Already in Cart");

            }


        });


    }



    /* ==========================
       SAVE CART
    ========================== */


    function saveCart(){

        localStorage.setItem(
            "kaidoCart",
            JSON.stringify(cart)
        );

    }



    /* ==========================
       DISPLAY CART
    ========================== */


    function displayCart(){


        if(!cartContainer) return;



        cartContainer.innerHTML = "";



        let total = 0;



        cart.forEach(product => {



            total += product.price;



            const item =
            document.createElement("div");


            item.className =
            "cart-item";



            item.innerHTML = `

            <img src="${product.image}">


            <div>

            <h3>
            ${product.name}
            </h3>


            <p>
            ₹${product.price}
            </p>


            </div>



            <button
            class="remove-btn"
            data-id="${product.id}">

            Remove

            </button>


            `;



            cartContainer.appendChild(item);



        });



        if(cartTotal){

            cartTotal.textContent = total;

        }



    }



    /* ==========================
       REMOVE ITEM
    ========================== */


    document.addEventListener("click",(e)=>{


        if(e.target.classList.contains("remove-btn")){


            const id =
            Number(e.target.dataset.id);



            cart =
            cart.filter(item => item.id !== id);



            saveCart();

            displayCart();


        }


    });



    displayCart();


});

