const btnMenu = document.querySelector(".container-menu_header");
const menu = document.querySelector(".menu_nav");
const menuLink = document.querySelectorAll(".item-li");
const btnsFilter = document.querySelectorAll(".button-filtros");
const itemProducts = document.querySelectorAll(".item");
const itemHidden = document.querySelectorAll(".item-hidden");
const modalClose = document.querySelector(".modal__close")
const modal = document.querySelector(".modal")

btnMenu.addEventListener("click", ()=>{
    
    if(window.innerWidth < 1024){
        const height = menu.scrollHeight;
        if(menu.classList.contains("desplegar")){
            menu.classList.remove("desplegar");
            menu.removeAttribute("style");
            btnMenu.classList.remove("close");
        } else {
            menu.classList.add("desplegar");
            menu.style.height = 100 + "vh";
            btnMenu.classList.toggle("close");
        }
    }
});

    menuLink.forEach(function(item){

        item.addEventListener("click", ()=>{
            menu.classList.remove("desplegar");
            menu.removeAttribute("style");
            btnMenu.classList.remove("close");
        });
    })


btnsFilter.forEach((btn)=> {
    btn.addEventListener("click", ()=>{
            mostrarFiltros(btn);
    })


})

function mostrarFiltros(btn){
    itemProducts.forEach((item) => {
        if(item.classList.contains(btn.id)){
            item.style.display = "block"
       } else {
           item.style.display = "none"
       }
    })
}

modalClose.addEventListener("click", ()=>{
    modal.style.display = "none"
})

const displayNone= () => {
    return new Promise((res, rej) => {
        setTimeout(()=> {
            res(loading.style.display = "none");
        }, 2000);
    });
};

async function displayItem() {
    const item = await displayNone();
}
displayItem();



}

