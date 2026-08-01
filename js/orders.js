/* ==========================================================
   KAIDO FF STORE
   orders.js
   PART 8C
========================================================== */

document.addEventListener("DOMContentLoaded",()=>{

    const ordersContainer =
    document.getElementById("ordersContainer");

    const orders =
    JSON.parse(
        localStorage.getItem("kaidoOrders")
    ) || [];

    /* ==========================
       NO ORDERS
    ========================== */

    if(orders.length===0){

        ordersContainer.innerHTML = `

        <div class="empty-orders">

            <i class="fa-solid fa-box-open"></i>

            <h2>No Orders Yet</h2>

            <p>

                You haven't placed any orders yet.

            </p>

            <a
            href="shop.html"
            class="primary-btn">

                Start Shopping

            </a>

        </div>

        `;

        return;

    }

    /* ==========================
       DISPLAY ORDERS
    ========================== */

    orders.reverse().forEach(order=>{

        const card =
        document.createElement("div");

        card.className =
        "order-card";

        let productsHTML = "";

        order.products.forEach(product=>{

            const quantity =
            product.quantity || 1;

            productsHTML += `

            <div class="product-row">

                <span>

                    ${product.name}

                    × ${quantity}

                </span>

                <span>

                    ₹${(product.price * quantity).toLocaleString("en-IN")}

                </span>

            </div>

            `;

        });

        card.innerHTML = `

        <div class="order-header">

            <div>

                <div class="order-id">

                    ${order.orderId}

                </div>

                <div class="order-date">

                    ${order.date}

                </div>

            </div>

        </div>

        <div class="customer-info">

            <p>

                <strong>Customer:</strong>

                ${order.customer}

            </p>

            <p>

                <strong>Payment:</strong>

                ${order.payment}

            </p>

            <p>

                <strong>Phone:</strong>

                ${order.phone}

            </p>

        </div>

        <div class="order-products">

            ${productsHTML}

        </div>

        <div class="order-total">

            <span>Total</span>

            <span>

                ₹${order.total.toLocaleString("en-IN")}

            </span>

        </div>

        `;

        ordersContainer.appendChild(card);

    });

});
