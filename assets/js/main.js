function showMenu(toggle,menu){
    const toggleMenu =document.getElementById(toggle);
     const sideMenu = document.getElementById(menu);

     if(toggleMenu && sideMenu){
        toggleMenu.addEventListener('click', function(){
            sideMenu.classList.toggle('active-menu');
         })
     }
}
showMenu("header-toggle", "header-menu");

const swiper = new Swiper(".mainscreen_container", {
    loop:true,
    grabCursor:"true",
    
    
    keyboard: {
        enable:true
    },
    
    
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
        
    },
    speed:1000,
    

    navigation: {
        prevEl:".arrow-left",
        nextEl:".arrow-right"
    },
})