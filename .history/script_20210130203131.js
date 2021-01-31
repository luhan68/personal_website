var scrollBtn = document.querySelector("scrollBtn")

function scrollToTop(){
    document.documentElement.scrollTo({
        top:0,
        behavior:"smooth"
    })
}


function scrollHandle(){
    document.documentElement.scrollTo({
        top:0,
        behavior:"smooth"
    })
}


scrollBtn.addEventListener("click",scrollToTop)
document.addEventListener("scroll", scrollHandle)