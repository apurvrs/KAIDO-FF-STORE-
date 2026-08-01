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



            if (exists) {

    exists.quantity = (exists.quantity || 1) + 1;

} else {

    cart.push({
        ...product,
        quantity: 1
    });

}

saveCart();

alert("Added to Cart 🔥");
           
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

if(cart.length === 0){

    cartContainer.innerHTML = `

    <div class="empty-cart">

        <i class="fa-solid fa-cart-shopping"></i>

        <h2>Your Cart is Empty</h2>

        <p>
            Looks like you haven't added any Free Fire IDs yet.
        </p>

        <a href="shop.html" class="primary-btn">

            Browse Products

        </a>

    </div>

    `;

    if(cartTotal){

        cartTotal.textContent = "₹0";

    }

    const finalTotal =
    document.getElementById("finalTotal");

    if(finalTotal){

        finalTotal.textContent = "₹0";

    }

    updateCartCount();

    return;

}

        let total = 0;



        cart.forEach(product => {



            total += product.price * (product.quantity || 1);



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
₹${product.price} × ${product.quantity || 1}
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

    const id =
    Number(e.target.dataset.id);

    if(e.target.classList.contains("remove-btn")){

        cart = cart.filter(
            item => item.id !== id
        );

        saveCart();
        displayCart();

    }

    if(e.target.classList.contains("increase")){

        const item =
        cart.find(p=>p.id===id);

        if(item){

            item.quantity++;

            saveCart();
            displayCart();

        }

    }

    if(e.target.classList.contains("decrease")){

        const item =
        cart.find(p=>p.id===id);

        if(item){

            item.quantity--;

            if(item.quantity<=0){

                cart = cart.filter(
                    p=>p.id!==id
                );

            }

            saveCart();
            displayCart();

        }

    }

});
   /* ==========================================================
   KAIDO FF STORE
   CART.CSS - PART 3
   Cart Summary + Empty Cart
========================================================== */

/* ==========================
   CART ITEM
========================== */

.cart-item{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:20px;
    padding:20px;
    margin-bottom:20px;
    border-radius:20px;
    background:rgba(255,255,255,.05);
    border:1px solid rgba(255,255,255,.08);
    backdrop-filter:blur(18px);
}

.cart-item img{
    width:120px;
    height:120px;
    object-fit:cover;
    border-radius:16px;
}

.cart-details{
    flex:1;
}

.cart-details h3{
    margin-bottom:10px;
}

.cart-details p{
    color:var(--accent);
    font-size:1.1rem;
    margin-bottom:15px;
}

/* ==========================
   QUANTITY
========================== */

.quantity-box{
    display:flex;
    align-items:center;
    gap:15px;
}

.qty-btn{
    width:38px;
    height:38px;
    border:none;
    border-radius:50%;
    cursor:pointer;
    font-size:1.2rem;
    color:#fff;
    background:linear-gradient(
        135deg,
        var(--primary),
        var(--secondary)
    );
    transition:.3s;
}

.qty-btn:hover{
    transform:scale(1.08);
}

/* ==========================
   REMOVE BUTTON
========================== */

.remove-btn{
    width:48px;
    height:48px;
    border:none;
    border-radius:50%;
    cursor:pointer;
    color:#fff;
    background:#ff3b5c;
    transition:.3s;
}

.remove-btn:hover{
    transform:scale(1.08);
}

/* ==========================
   CART SUMMARY
========================== */

.cart-summary{
    margin-top:40px;
    padding:30px;
    border-radius:24px;
    background:rgba(255,255,255,.05);
    border:1px solid rgba(255,255,255,.08);
}

.cart-summary h2{
    margin-bottom:20px;
}

.total-price{
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:1.5rem;
    font-weight:700;
    margin-bottom:25px;
}

.checkout-btn{
    width:100%;
    padding:18px;
    border:none;
    border-radius:50px;
    cursor:pointer;
    font-size:1rem;
    font-weight:700;
    color:#fff;
    background:linear-gradient(
        135deg,
        var(--primary),
        var(--secondary)
    );
    transition:.35s;
}

.checkout-btn:hover{
    transform:translateY(-3px);
}

/* ==========================
   EMPTY CART
========================== */

.empty-cart{
    text-align:center;
    padding:80px 20px;
}

.empty-cart i{
    font-size:5rem;
    color:var(--accent);
    margin-bottom:20px;
}

.empty-cart h2{
    margin-bottom:15px;
}

.empty-cart p{
    color:var(--text-light);
    margin-bottom:30px;
}

/* ==========================
   CART COUNT
========================== */

function updateCartCount(){

    const badge =
    document.getElementById("cartCount");

    if(!badge) return;

    let total = 0;

    cart.forEach(item=>{

        total += item.quantity || 1;

    });

    badge.textContent = total;

}
displayCart();

updateCartCount();
});
