const navlist = document.getElementById('navlist');
const hamburger = document.getElementById('hamburger');

// click Event

hamburger.addEventListener('click', ()=>{

    navlist.classList.toggle('navlist-active')
})