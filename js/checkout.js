/* ==========================================================
   KAIDO FF STORE
   checkout.js
   Checkout Functionality
========================================================== */


document.addEventListener("DOMContentLoaded",()=>{


    let cart =
    JSON.parse(localStorage.getItem("kaidoCart")) || [];



    const checkoutItems =
    document.getElementById("checkoutItems");


    const checkoutTotal =
    document.getElementById("checkoutTotal");



    /* ==========================
       LOAD ORDER SUMMARY
    ========================== */


    function loadCheckout(){


        if(!checkoutItems) return;


        checkoutItems.innerHTML="";


        let total = 0;



        cart.forEach(product=>{


            total += product.price;



            const item =
            document.createElement("div");


            item.className =
            "checkout-product";



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

            `;



            checkoutItems.appendChild(item);



        });



        if(checkoutTotal){

            checkoutTotal.textContent =
            total;

        }


    }



    loadCheckout();





    /* ==========================
       PLACE ORDER
    ========================== */


    const orderForm =
    document.getElementById("orderForm");



    if(orderForm){


        orderForm.addEventListener("submit",(e)=>{


            e.preventDefault();



            const name =
            document.getElementById("customerName").value;


            const phone =
            document.getElementById("phone").value;


            const uid =
            document.getElementById("ffUid").value;


            const payment =
            document.getElementById("payment").value;



            let orderText =

`🔥 KAIDO FF STORE ORDER

👤 Name:
${name}

📱 WhatsApp:
${phone}

🎮 Free Fire UID:
${uid}

💳 Payment:
${payment}


🛒 Products:
`;



            cart.forEach(product=>{

                orderText +=

`\n• ${product.name}
₹${product.price}
`;

            });



            const total =
            cart.reduce(
                (sum,item)=>sum+item.price,
                0
            );



            orderText +=

`\n💰 Total:
₹${total}`;



            const whatsappNumber =
            "YOUR_WHATSAPP_NUMBER";



            const url =

`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderText)}`;



            window.open(url,"_blank");



            // Clear cart

            localStorage.removeItem("kaidoCart");



        });


    }



});
