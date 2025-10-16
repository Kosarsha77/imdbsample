async function Born() {
    try {
        let data = await fetch("https://kosarsha77.github.io/dbimdbb/db.json");
        let res = await data.json();
        let born = res.born.map(function(elem){
            return `
               <div class="swiper-slide">
        <a href="#">
            <img src="${elem.img}" alt="#">
            <div class="text">
              <p class="first">${elem.text}</p>
              <p class="second">${elem.text2}</p>
            </div>
          </a>
        
      </div>
            `
        });
        document.querySelector("#bornSwiper-wrapper").insertAdjacentHTML("afterbegin",born.join(" "));
        

    } catch (error) {
        console.log(error.message);
    }
    var swiper = new Swiper("#bornSwiper", {
      slidesPerView: 6,
      spaceBetween: 30,
      pagination: {
        el: "#bornSwiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: "#bornSwiper-next",
        prevEl: "#bornSwiper-prev",
      },
      breakpoints:{
        0:{
          slidesPerView:2,
        },
        768:{
          slidesPerView :4,
        },
        1200:{
          slidesPerView:6,
        }
      }
    });
    

    
}
export default Born