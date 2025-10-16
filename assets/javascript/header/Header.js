async function Header() {
    try {
        let data = await fetch("https://kosarsha77.github.io/dbimdbb/db.json");
        let res = await data.json();
        console.log(res);
        let header = res.trailer.map(function(elem){
            return `
            <div class="swiper-slide">
                        <div class="top">
                          <img src=${elem.mainIMG} alt="strangers">
                          <span><svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0748 7.50835C9.74622 6.72395 8.25 7.79065 8.25 9.21316V14.7868C8.25 16.2093 9.74622 17.276 11.0748 16.4916L15.795 13.7048C17.0683 12.953 17.0683 11.047 15.795 10.2952L11.0748 7.50835ZM9.75 9.21316C9.75 9.01468 9.84615 8.87585 9.95947 8.80498C10.0691 8.73641 10.1919 8.72898 10.3122 8.80003L15.0324 11.5869C15.165 11.6652 15.25 11.8148 15.25 12C15.25 12.1852 15.165 12.3348 15.0324 12.4131L10.3122 15.2C10.1919 15.271 10.0691 15.2636 9.95947 15.195C9.84615 15.1242 9.75 14.9853 9.75 14.7868V9.21316Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#ffffff"></path> </g></svg></span>
                          <p>${elem.time}</p>
                          <img class="second" src=${elem.sideIMG} alt="">
                          <span class="second"><svg width="50px" height="50px" viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>bookmark_plus_fill [#1236]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-305.000000, -2639.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M257,2486 L255,2486 L255,2488 L253,2488 L253,2486 L251,2486 L251,2484 L253,2484 L253,2482 L255,2482 L255,2484 L257,2484 L257,2486 Z M249,2479 L249,2499 L254,2494 L259,2499 L259,2479 L249,2479 Z" id="bookmark_plus_fill-[#1236]"> </path> </g> </g> </g> </g></svg></span>
                          <p class="first">${elem.title}</p>
                          <p class="second">Watch the trailer</p>
                        </div>

                      </div>
            `
        });
        document.querySelector(".swiper-wrapper").insertAdjacentHTML("afterbegin",header.join(" "));
        

    } catch (error) {
        console.log(error.message);
    }
    var swiper = new Swiper(".movies", {
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          centeredSlides:true,
          loop:true,
          autoplay:{
            delay:2500,
            disableOnInteraction:false,
          }
        });
    
}
export default Header