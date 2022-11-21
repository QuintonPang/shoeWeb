// let slideChangeInterval = setInterval(()=>{
//     const currentUrl = window.location.href
//     const currentPage = currentUrl.split('/').at(-1).slice(-1)
//     if(isNaN(currentPage)||currentPage==""){
//         window.location.href = currentUrl + "#carousel__slide2"
//     }
//     else if(currentPage<4){
//         window.location.href = currentUrl.slice(0,-1) + (parseInt(currentPage)+1)
//     }else{
//         window.location.href = currentUrl.slice(0,-1) + 1
//     }
// },5000)

const changeButtonColor  = () =>{
    // alert("RAN")
    const buttonArray  = document.getElementsByClassName("carousel__navigation-button")
    const bannerArray = document.getElementsByClassName("carousel__slide")
    // console.log(buttonArray)
    for(let i=0;i<bannerArray.length;i++){
        // alert(isInViewport(bannerArray[i])+i)
        buttonArray[i].style.backgroundColor = "black"
        if(isInViewport(bannerArray[i])){
            buttonArray[i].style.backgroundColor = "white"
        }
    }
}

const isInViewport = function (ele) {
    const rect = ele.getBoundingClientRect();
    return (
        // rect.top >= 0 &&
        rect.left >= 0 
        &&
        // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        //  &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// addEventListener('hashchange', (event) => {
//     // console.log(event)
//     const currentPage = event.newURL.split('/').at(-1).slice(-1)
//     // console.log(currentPage)
//     const buttonArray  = document.getElementsByClassName("carousel__navigation-button")
//     // console.log(buttonArray)
//     for(let i=0;i<buttonArray.length;i++){
//         buttonArray[i].style.backgroundColor = "black"
//     }
//     buttonArray[currentPage-1].style.backgroundColor = "white"
//     // const blackButtonArray = buttonArray.splice(currentPage-1,1)

//     clearInterval(slideChangeInterval)

//     slideChangeInterval = setInterval(()=>{
//         const currentUrl = window.location.href
//         const currentPage = currentUrl.split('/').at(-1).slice(-1)
//         if(isNaN(currentPage)||currentPage==""){
//             window.location.href = currentUrl + "#carousel__slide2"
//         }
//         else if(currentPage<4){
//             window.location.href = currentUrl.slice(0,-1) + (parseInt(currentPage)+1)
//         }else{
//             window.location.href = currentUrl.slice(0,-1) + 1
//         }
//     },5000)
  
// });

// addEventListener("load", (event)=>{
//     // prevent wrong url after hash
//     if(window.location.href.split("/").at(-2)!="dist")
//     window.location.href  = "/dist/"
//     // console.log(window.location.href.split("/").at(-2))

//     const currentPage = window.location.href.split('/').at(-1).slice(-1)
//     if(isNaN(currentPage)||currentPage==""){
//         document.getElementsByClassName("carousel__navigation-button")[0].style.backgroundColor = "white"
//     }else{
//         document.getElementsByClassName("carousel__navigation-button")[currentPage-1].style.backgroundColor = "white"
//     }
// });


addEventListener('scroll', ()=>{
    const navbar = document.getElementsByClassName("navbar__container")[0];
    const carousel = document.getElementsByClassName("carousel")[0];
    const ads = document.getElementsByClassName("ads-background")[0];
    const tier = document.getElementsByClassName("tier__container")[0];
    if(screen.width>768){
        if((window.pageYOffset>navbar.clientTop+navbar.clientHeight&&window.pageYOffset<carousel.offsetTop-navbar.clientHeight)||(window.pageYOffset>ads.offsetTop&&window.pageYOffset<tier.offsetTop-navbar.clientHeight)){
            navbar.style.background = "rgba(0, 0, 0, 0.0)"
        }else{
            navbar.style.background = "rgba(0,0,0,1)"
        }

    }

});
