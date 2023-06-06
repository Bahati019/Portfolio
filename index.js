window.addEventListener('scroll',()=>{
    var scroll = document.getElementById('nav')
    scroll.classList.toggle("scroll", window.scrollY > 0);
})
 