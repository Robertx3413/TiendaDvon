const container = document.querySelector(".container");
const loading = document.querySelector(".container-loading-animation")
const modales = document.querySelector(".modal")


const tl = gsap.timeline();

tl.to(loading, {
    delay:3,
    duration:1,
    opacity:0,
})

tl.to(container, {
    opacity:1,
});

tl.to(modales, {
    delay:2,
    opacity:1,
})