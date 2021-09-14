const target = document.querySelectorAll("[data-anime]");
const animationClass = 'animate';

function animeScroll() {
    const windowTope = window.pageYOffset + ((window.innerHeight * 3) / 4)
    target.forEach(function(elemento) {
        if((windowTope) > elemento.offsetTop) {
            elemento.classList.add(animationClass);
        } else {
            elemento.classList.remove(animationClass);
        }
    })
}

animeScroll();

window.addEventListener("scroll", function() {
    animeScroll();
})

let progress = document.getElementById("progressBar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}