/* ==========================================================
   KAIDO FF STORE
   checkout.js
   PART 7C
========================================================== */

document.addEventListener("DOMContentLoaded",()=>{

    const cart =
    JSON.parse(
        localStorage.getItem("kaidoCart")
    ) || [];

    const checkoutItems =
    document.getElementById("checkoutItems");

    const checkoutTotal =
    document.getElementById("checkoutTotal");

    const form =
    document.getElementById("checkoutForm");

    let total = 0;

    /* ==========================
       DISPLAY ITEMS
    ========================== */

    if(checkoutItems){

        checkoutItems.innerHTML = "";

        cart.forEach(product=>{

            const quantity =
            product.quantity || 1;

            total +=
            product.price * quantity;

            const item =
            document.createElement("div");

            item.className =
            "summary-item";

            item.innerHTML = `

                <span>

                    ${product.name}

                    × ${quantity}

                </span>

                <span>

                    ₹${(product.price * quantity).toLocaleString("en-IN")}

                </span>

            `;

            checkoutItems.appendChild(item);

        });

    }

    if(checkoutTotal){

        checkoutTotal.textContent =
        "₹" + total.toLocaleString("en-IN");

    }

    /* ==========================
       PLACE ORDER
    ========================== */

    if(form){

        form.addEventListener("submit",(e)=>{

            e.preventDefault();

            const order = {

                orderId:
                "KF" + Date.now(),

                customer:document.getElementById("customerName").value,

                email:document.getElementById("customerEmail").value,

                phone:document.getElementById("customerPhone").value,

                address:document.getElementById("customerAddress").value,

                payment:
                document.getElementById("paymentMethod").value,

                products:cart,

                total:total,

                date:new Date().toLocaleString()

            };

            let orders =
            JSON.parse(
                localStorage.getItem("kaidoOrders")
            ) || [];

            orders.push(order);

            localStorage.setItem(
                "kaidoOrders",
                JSON.stringify(orders)
            );

            localStorage.removeItem("kaidoCart");

            window.location.href =
            "success.html";

        });

    }

});
