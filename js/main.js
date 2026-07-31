window.addEventListener("load", () => {

    setTimeout(() => {

        document.querySelector(".loader").classList.add("hide");

    }, 2200);

});

// Animated Counter

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const speed = target / 100;

        if(count < target){

            counter.innerText = Math.ceil(count + speed);

            setTimeout(update,20);

        }else{

            counter.innerText = target.toLocaleString() + "+";

        }

    }

    update();

});
