async function Menu() {
    let btnShow=document.querySelector(".menu .btn_show")
    let btnClose=document.querySelector(".menu .btn_close")
    let menu=document.querySelector(".menu .mobile_menu")

    btnShow.addEventListener("click",function(){
        menu.classList.add("show")
    })
    btnClose.addEventListener("click",function(){
        menu.classList.remove("show")
    })
    
}
export default Menu
