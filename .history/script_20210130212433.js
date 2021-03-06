// var scrollBtn = document.querySelector("scrollBtn")

// function scrollToTop(){
//     document.documentElement.scrollTo({
//         top:0,
//         behavior:"smooth"
//     })
// }


// function scrollHandle(){
//     document.documentElement.scrollTo({
//         top:0,
//         behavior:"smooth"
//     })
// }


// scrollBtn.addEventListener("click",scrollToTop)
// document.addEventListener("scroll", scrollHandle)


var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.5) {
    // Show button
    scrollToTopBtn.classList.add("showBtn")
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn")
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)