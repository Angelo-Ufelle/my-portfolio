// const btn = document.getElementById("btn")
// const myNavbar = document.getElementById("myNavbar")

// btn.addEventListener("click", () =>{
//     myNavbar.classList.toggle("active")
//     btn.classList.toggle("active");
// })
$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")
        }
    });
    // toggle menu//
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    })
    
})

//Progress Bar//
// let progress = document.getElementById('progressbar');
// let totalHeight = document.body.scrollHeight - window.innerHeight;
// window.onscroll = function(){
//     let progressHeight = (window.pageYOffset / totalHeight) * 100;
//     progress.style.height = progressHeight + "%";
// }

// type writer effect
// var typed = new Typed('.animate',{
//     strings: [
//         "Web designer",
//         "Front End"
//     ],
//     typeSpeed: 50,
//     backSpeed: 50,
//     loop: true
// })