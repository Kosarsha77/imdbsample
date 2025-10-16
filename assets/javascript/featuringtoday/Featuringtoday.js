async function Featuringdtoday() {
    try {
        let data = await fetch("https://kosarsha77.github.io/dbimdbb/db.json");
        let res = await data.json();
        let Featuringdtoday = res.featuring.map(function(elem){
            return `
                <div class="swiper-slide">
        <div class="pics">
          <img src="${elem.picture}" alt="#">
        </div>
        <div class="text">
          <a href="#" class="first">
            <p>${elem.text1}</p>
          </a>
          <a href="#" class="second">
            <p>${elem.text2}</p>
          </a>
        </div>
      </div>
            `
        });
        document.querySelector("#featuringslider-wrapper").insertAdjacentHTML("afterbegin",Featuringdtoday.join(" "));
        

    } catch (error) {
        console.log(error.message);
    }
    var swiper = new Swiper(".todday", {
      slidesPerView: 3,
      spaceBetween: 10,
      pagination: {
        el: "#featuringslider-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: "#featuringslider-next",
        prevEl: "#featuringslider-prev",
      },
      centeredSlides:true,
          loop:true,
          autoplay:{
            delay:2500,
            disableOnInteraction:false,
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
export default Featuringdtoday