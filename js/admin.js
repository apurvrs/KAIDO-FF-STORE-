/* ==========================================================
   KAIDO FF STORE
   admin.js
   Admin Product Manager
========================================================== */


document.addEventListener("DOMContentLoaded",()=>{


    const form =
    document.getElementById("productForm");



    if(!form) return;



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



            image:

            document.getElementById("image").value,



            level:

            document.getElementById("level").value,



            category:

            document.getElementById("category").value,



            details:

            "Premium Free Fire Account",



            badge:

            "NEW"


        };



        adminProducts.push(newProduct);



        localStorage.setItem(

            "kaidoProducts",

            JSON.stringify(adminProducts)

        );



        alert(
            "Product Added Successfully 🔥"
        );



        form.reset();



    });



});
