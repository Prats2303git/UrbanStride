let cartbtn = document.querySelector(".navbar .btn");
let shopbtn = document.querySelector(".sec-products .product .content button");
let cnfbtn1 = document.querySelector(".intro .popup-cart .confirm .yes");
let cnfbtn2 = document.querySelector(".intro .popup-cart .confirm .no");
let pop = document.querySelector(".sec-products .container .popup");
const fire = true;

cartbtn.addEventListener('click',()=>{
            gsap.to(".intro .popup-cart",{
                y:100,
                display: "block",
                duration: 1
            });
})
cnfbtn1.addEventListener('click',()=>{
    gsap.to(".intro .popup-cart",{
        opacity:0,
        display: "none",
        duration: 1
    })
})
cnfbtn2.addEventListener('click',()=>{
    gsap.to(".intro .popup-cart",{
        opacity:0,
        display: "none",
        duration: 1
    })
})
shopbtn.addEventListener('click',()=>{
    gsap.to(".sec-products .container .popup",{
        y:100,
        display: "block",
        duration: 1
    })
    setTimeout(popup,5000);
    function popup(){
        pop.style.display = "none";
    }
})
