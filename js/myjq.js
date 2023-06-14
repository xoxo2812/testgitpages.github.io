$(document).ready(function(){
    let count = 0;  // icon 개별인식하는 숫자변수
    setInterval( colortext, 1000)
    function colortext(){
        count++; // 1초마다 하나씩 증가시키고 저장해라.
        count %= $(".bi-cart-check").length; // 증가된 count를 4로 나눈 나머지를 다시 count에 저장해라
        $(".bi-cart-check").removeClass("text-info");
        $(".bi-cart-check").eq(count).addClass("text-info");
    }

    // 사전인터뷰 시간차를 두고 오픈하기
    let faqnum = 0;
    setInterval( faqopen, 3000) // 3초뒤
    function faqopen(){
        $(".accordion-item .accordion-collapse").removeClass("show");
        $(".accordion-item").eq(faqnum).find(".accordion-collapse").addClass("show")

        $(".accordion-item .accordion-button").addClass("collapsed");
        $(".accordion-item").eq(faqnum).find(".accordion-button").removeClass("collapsed")

        faqnum++;
        faqnum %= 5;
    }
})

$(".nav-link").click(function(){
    $(".nav-link").removeClass('act');
    $(this).addClass('act');
})
$(window).scroll(function(){
    if($(window).scrollTop() > 80){
        $("body").addClass("scroll");
    }else{
        $("body").removeClass("scroll");
    }
})

// 1초마다 실행해라.

// 1초마다 주기적으로 실행
// setTimeout(실행함수, 시간) -> 시간이 지나면 한번 실행해라.