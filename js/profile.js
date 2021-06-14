// -----------------
// VARIABLES
// -----------------
const contentArea = document.querySelector('container')
const portfolio = document.querySelector('#portfolio')
const contact = document.querySelector('#contact')
const home = document.querySelector('#home')

const portfolioHTML = document.querySelector('.portfolio')
const contactHTML = document.querySelector('.contact')
const homeHTML = document.querySelector('.home')

// -----------------
// EVENT LISTENERS  
// -----------------

document.addEventListener('click', (e) => {
    if(e.target === portfolio){
        console.log('portfolio')
        contactHTML.style.display = "none"
        homeHTML.style.display = "none"
        portfolioHTML.style.display = "flex"
    }
    if(e.target === contact){
        console.log('contact')
        contactHTML.style.display = "flex"
        homeHTML.style.display = "none"
        portfolioHTML.style.display = "none"
    }
    if(e.target === home){
        console.log('home')
        contactHTML.style.display = "none"
        homeHTML.style.display = "flex"
        portfolioHTML.style.display = "none"
    }
})



// -----------------
// FUNCTIONS
// -----------------
