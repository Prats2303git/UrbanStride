var tl = gsap.timeline();

tl.from(".content h1",{
    x : -1000,
    duration : 1
},"-=0.3");
tl.from(".content p",{
    y : 100,
    opacity : 0,
    duration : 1,
});
tl.from(".content button",{
    opacity : 0,
    duration : 0.7,
});
tl.from(".part2",{
    x : 800,
    duration : 0.7
},"-=0.3");
tl.from(".part2 img",{
    opacity : 0,
    duration : 0.7,
},"-=0.3");
tl.from(".part2 img",{
    y : 10,
    repeat : -1,
    duration : 1,
    yoyo : true
},"anim")
tl.from(".part2 .sports span",{
    opacity : 0,
    stagger : 0.15,
},"anim")

let button = document.querySelector(".content button");
button.addEventListener("mouseenter",()=>{
    gsap.to(".content button",{
        scale:1.04,
        duration : 0.2
    })
});
button.addEventListener("mouseleave",()=>{
    gsap.to(".content button",{
        scale:1,
        duration : 0.2
    })
});