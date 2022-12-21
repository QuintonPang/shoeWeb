
// menu toggle
const menuBtn = document.querySelector('.menu-btn')
const hamburger = document.querySelector('.menu-btn__burger')
const nav = document.querySelector('.navbar__container')
let showMenu = false;

// called when the hamburger button is clicked (mobile version)
const toggleMenu = () =>{

    // add class open when show menu
    if(!showMenu){
        hamburger.classList.add('open')
        nav.classList.add('open')
        showMenu = true
    }else{
    // remove class open when close menu
        hamburger.classList.remove('open')
        nav.classList.remove('open')
        showMenu = false
    }

}

// function is called when hamburger button is clicked
menuBtn.addEventListener('click',toggleMenu)

