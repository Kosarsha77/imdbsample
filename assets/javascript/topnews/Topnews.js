async function Topnews() {
    try {
        let data = await fetch("https://kosarsha77.github.io/dbimdbb/db.json");
        let res = await data.json();
        let Topnews = res.news.map(function(elem){
            return `
               <div class="swiper-slide">
        <a href="#">
          <div class="left">
            <img src="${elem.picture}" alt="f1">
          </div>
          <div class="right">
            <p class="first">${elem.text1}</p>
            <p class="second">${elem.text2}</p>
          </div>
        </a>
      </div>
            `
        });
        document.querySelector("#newsSwiper-wrapper").insertAdjacentHTML("afterbegin",Topnews.join(" "));
        

    } catch (error) {
        console.log(error.message);
    }
    var swiper = new Swiper("#newsSwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: "#newsSwiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: "#newsSwiper-next",
        prevEl: "#newsSwiper-prev",
      },
      breakpoints:{
        0:{
          slidesPerView:1,
        },
        768:{
          slidesPerView :2,
        },
        1200:{
          slidesPerView:3,
        }
      }
    });
    

    
}
export default Topnews