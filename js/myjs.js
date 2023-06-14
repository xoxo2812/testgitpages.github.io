// let classArr = document.getElementsByClassName("bi-cart-check").length; //이름 부를때 쓰는 명령어.
// let idSingle = document.getElementById("h_section");

// document.body.classList.add(typeof idSingle);
// document.body.classList.add(typeof classArr);

// idSingle.classList.add("naviStyle")


// document.body.classList.add("bicount"+bicount);
// 싱글객체 (단수) / 집합객체 (복수)

//화면이 열리면 body태그에 클래스가 삽입될거야.
//

//1. body에 ddd라는 클래스 삽입해라
// document.body.classList.add("ddd")
// $("body").addClass("ddd")
//2. 아이디가 h_section인 객체에 border-bottom이라는 클래스를 삽입해라
// document.getElementById("h_section").classList.add("border-bottom")
// idSingle.classList.add("border-bottom")

// $("#h_section").addClass("border-bottom")

let groupClass = document.getElementsByClassName("bi-cart-check");

// id처럼 한번 써본다.
// groupClass.item(0).classList.add("text-info");
// groupClass.item(1).classList.add("text-info");
// groupClass.item(2).classList.add("text-info");
// groupClass.item(3).classList.add("text-info");

// for(var i=0; i< groupClass.length ; i++){
//     groupClass.item(i).classList.add("text-info");
// }
// for(var i=0; i< groupClass.length ; i += 2){
//     groupClass.item(i).classList.add("text-info");
// }

// 변수 3가지 var, let, const -> 절대 수정불가

var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});