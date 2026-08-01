/* ==========================================================
   KAIDO FF STORE
   products.js
   Product Database
========================================================== */


const products = [

    {
        id: 1,
        name: "Legendary Dragon ID",
        category: "legendary",
        price: 4999,
        image: "images/products/id1.jpg",
        level: "75",
        details: "Evo Guns • Rare Bundles • Premium Skins",
        badge: "HOT"
    },


    {
        id: 2,
        name: "Premium Max ID",
        category: "premium",
        price: 3999,
        image: "images/products/id2.jpg",
        level: "70",
        details: "Elite Pass • Legendary Skins • Rare Items",
        badge: "BEST"
    },


    {
        id: 3,
        name: "Rare Collection ID",
        category: "rare",
        price: 2499,
        image: "images/products/id3.jpg",
        level: "65",
        details: "Rare Bundles • Emotes • Gun Skins",
        badge: "NEW"
    },


    {
        id: 4,
        name: "Royal Warrior ID",
        category: "legendary",
        price: 5999,
        image: "images/products/id4.jpg",
        level: "80",
        details: "Max Evo Guns • Exclusive Bundles",
        badge: "HOT"
    },


    {
        id: 5,
        name: "Budget Starter ID",
        category: "budget",
        price: 999,
        image: "images/products/id5.jpg",
        level: "45",
        details: "Good Skins • Old Season Items",
        badge: "NEW"
    },


    {
        id: 6,
        name: "Diamond Collection ID",
        category: "premium",
        price: 6999,
        image: "images/products/id6.jpg",
        level: "85",
        details: "Rare Characters • Mythic Items",
        badge: "BEST"
    },


    {
        id: 7,
        name: "Shadow Assassin ID",
        category: "rare",
        price: 2999,
        image: "images/products/id7.jpg",
        level: "60",
        details: "Rare Outfit • Gun Skins",
        badge: "NEW"
    },


    {
        id: 8,
        name: "Ultimate Pro ID",
        category: "premium",
        price: 8999,
        image: "images/products/id8.jpg",
        level: "90",
        details: "Everything Unlocked",
        badge: "HOT"
    },


    {
        id: 9,
        name: "Classic Veteran ID",
        category: "budget",
        price: 1499,
        image: "images/products/id9.jpg",
        level: "50",
        details: "Old Account • Rare Items",
        badge: "NEW"
    },


    {
        id: 10,
        name: "Mythic Legend ID",
        category: "legendary",
        price: 9999,
        image: "images/products/id10.jpg",
        level: "95",
        details: "Mythic Skins • Premium Collection",
        badge: "BEST"
    },


    {
        id: 11,
        name: "Elite Fighter ID",
        category: "rare",
        price: 3499,
        image: "images/products/id11.jpg",
        level: "68",
        details: "Rare Bundles • Special Items",
        badge: "HOT"
    },


    {
        id: 12,
        name: "King Account ID",
        category: "premium",
        price: 12999,
        image: "images/products/id12.jpg",
        level: "100",
        details: "Full Collection • Max Level",
        badge: "BEST"
    }

];
/* ==========================================================
   LOAD ADMIN PRODUCTS
========================================================== */


const adminProducts =

JSON.parse(
    localStorage.getItem("kaidoProducts")
) || [];



products.push(...adminProducts);
