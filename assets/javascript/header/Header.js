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
                          <span><svg width="72px" height="72px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0748 7.50835C9.74622 6.72395 8.25 7.79065 8.25 9.21316V14.7868C8.25 16.2093 9.74622 17.276 11.0748 16.4916L15.795 13.7048C17.0683 12.953 17.0683 11.047 15.795 10.2952L11.0748 7.50835ZM9.75 9.21316C9.75 9.01468 9.84615 8.87585 9.95947 8.80498C10.0691 8.73641 10.1919 8.72898 10.3122 8.80003L15.0324 11.5869C15.165 11.6652 15.25 11.8148 15.25 12C15.25 12.1852 15.165 12.3348 15.0324 12.4131L10.3122 15.2C10.1919 15.271 10.0691 15.2636 9.95947 15.195C9.84615 15.1242 9.75 14.9853 9.75 14.7868V9.21316Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#ffffff"></path> </g></svg></span>
                          <p>${elem.time}</p>
                          <img class="second" src=${elem.sideIMG} alt="">
                          <span class="second"><svg width="64px" height="64px" viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>bookmark_plus_fill [#1237]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-265.000000, -2639.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M216,2486 L215,2486 L215,2487 C215,2487.552 214.552,2488 214,2488 C213.448,2488 213,2487.552 213,2487 L213,2486 L212,2486 C211.448,2486 211,2485.552 211,2485 C211,2484.448 211.448,2484 212,2484 L213,2484 L213,2483 C213,2482.448 213.448,2482 214,2482 C214.552,2482 215,2482.448 215,2483 L215,2484 L216,2484 C216.552,2484 217,2484.448 217,2485 C217,2485.552 216.552,2486 216,2486 M217,2479 L211,2479 C209.895,2479 209,2479.895 209,2481 L209,2497.998 C209,2498.889 210.077,2499.335 210.707,2498.705 L213.293,2496.119 C213.683,2495.729 214.317,2495.729 214.707,2496.119 L217.293,2498.705 C217.923,2499.335 219,2498.889 219,2497.998 L219,2481 C219,2479.895 218.105,2479 217,2479" id="bookmark_plus_fill-[#1237]"> </path> </g> </g> </g> </g></svg></span>
                          <p class="first">${elem.title}</p>
                          <p class="second">Watch the trailer</p>
                          <span class="third">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.444 1.35396C11.6474 0.955692 10.6814 1.33507 10.3687 2.16892L7.807 9.00001L4 9.00001C2.34315 9.00001 1 10.3432 1 12V20C1 21.6569 2.34315 23 4 23H18.3737C19.7948 23 21.0208 22.003 21.3107 20.6119L22.9773 12.6119C23.3654 10.7489 21.9433 9.00001 20.0404 9.00001H14.8874L15.6259 6.7846C16.2554 4.89615 15.4005 2.8322 13.62 1.94198L12.444 1.35396ZM9.67966 9.70225L12.0463 3.39119L12.7256 3.73083C13.6158 4.17595 14.0433 5.20792 13.7285 6.15215L12.9901 8.36755C12.5584 9.66261 13.5223 11 14.8874 11H20.0404C20.6747 11 21.1487 11.583 21.0194 12.204L20.8535 13H17C16.4477 13 16 13.4477 16 14C16 14.5523 16.4477 15 17 15H20.4369L20.0202 17H17C16.4477 17 16 17.4477 16 18C16 18.5523 16.4477 19 17 19H19.6035L19.3527 20.204C19.2561 20.6677 18.8474 21 18.3737 21H8V10.9907C8.75416 10.9179 9.40973 10.4221 9.67966 9.70225ZM6 11H4C3.44772 11 3 11.4477 3 12V20C3 20.5523 3.44772 21 4 21H6V11Z" fill="#ffffff"></path> </g></svg>
                            <p>137</p>                          
                          </span>
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