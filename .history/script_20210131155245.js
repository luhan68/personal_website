var scrollToTopBtn = document.querySelector(".scrollToTopBtn")

function handleScroll() {
  // Do something on scroll
  var scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight
  if (document.documentElement.scrollTop /scrollTotal > 0.75) {
    // Show button
    scrollToTopBtn.classList.add("show")
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("show")
  }
}

function scrollToTop() {
  // Scroll to top logic
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
document.addEventListener("scroll", handleScroll)
scrollToTopBtn.addEventListener("click", scrollToTop)



function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}


function submitEmail() {
  var x, text;

  // Get the value of the input field with id="email"
  x = document.getElementById("email").value;

  if (emailIsValid(x)) {
    text = "Email successfully recorded!";
  } else {
    text = "Invalid email address.";
  }
  document.getElementById("notice").innerHTML = text;
}


//  ***** LIGHTBOX AREA  ***** 

const lightbox = document.createElement('div')
const images = document.querySelectorAll('img')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
    //  This blocks the background from scolling when lightbox is open - must set overflow in main css otherwise on the first time you click on the modal the page will scroll to the top
    document.body.style.overflowY='hidden'
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
  document.body.style.overflowY='scroll'
})

// Function to reveal lightbox and adding YouTube autoplay
function revealVideo(div) {
  document.getElementById(div).style.display = 'block';
}

// Hiding the lightbox and removing YouTube autoplay
function hideVideo(div) {
  document.getElementById(div).style.display = 'none';
}