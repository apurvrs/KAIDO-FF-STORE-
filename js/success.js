/* ==========================================================
   KAIDO FF STORE
   success.js
   PART 7F
========================================================== */

document.addEventListener("DOMContentLoaded",()=>{

    const orders =

    JSON.parse(

        localStorage.getItem("kaidoOrders")

    ) || [];



    if(orders.length===0){

        return;

    }



    const latestOrder =

    orders[orders.length-1];



    /* ==========================
       ORDER ID
    ========================== */

    const orderId =

    document.getElementById("orderId");



    if(orderId){

        orderId.textContent =

        latestOrder.orderId;

    }



    /* ==========================
       CUSTOMER NAME
    ========================== */

    const customerName =

    document.getElementById("customerName");



    if(customerName){

        customerName.textContent =

        latestOrder.customer;

    }



    /* ==========================
       TOTAL PRICE
    ========================== */

    const totalPrice =

    document.getElementById("totalPrice");



    if(totalPrice){

        totalPrice.textContent =

        "₹" +

        latestOrder.total.toLocaleString("en-IN");

    }



    /* ==========================
       ORDER DATE
    ========================== */

    const orderDate =

    document.getElementById("orderDate");



    if(orderDate){

        orderDate.textContent =

        latestOrder.date;

    }

});
