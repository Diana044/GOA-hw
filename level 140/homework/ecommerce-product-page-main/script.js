const productMainImg = document.getElementById('productMainImg')
const mainThumbs = document.getElementsByClassName('mainThumb')
const popUpDiv = document.getElementById('popUpDiv')
const popUpMainImg = document.getElementById('popUpMainImg')
const popThumbs = document.getElementsByClassName('popThumb')
const blurDiv = document.getElementById('blur')
const closeIcon = document.getElementById('closeIcon')
const viewCartIcon = document.getElementById('viewCartIcon')
const cart = document.getElementById('cart')

viewCartIcon.onclick = function() {
    cart.style.display === 'block'?  cart.style.display = 'none' :
    cart.style.display = 'block'
}

for (let i = 0; i < mainThumbs.length; i++) {
    mainThumbs[i].onclick = function() {
        for (let j = 0; j < mainThumbs.length; j++) {
            mainThumbs[j].classList.remove('active-style')
        }
        mainThumbs[i].classList.add('active-style')
        productMainImg.src = mainThumbs[i].src.replace('-thumbnail', '')
    }
}

productMainImg.onclick = function() {
    if (window.innerWidth > 700) {
        popUpMainImg.src = productMainImg.src
        blurDiv.style.display = 'block'
        popUpDiv.style.display = 'flex'
    }
}

for (let i = 0; i < popThumbs.length; i++) {
    popThumbs[i].onclick = function() {
        for (let j = 0; j < popThumbs.length; j++) {
            popThumbs[j].classList.remove('active-style')
        }
        popThumbs[i].classList.add('active-style')
        popUpMainImg.src = popThumbs[i].src.replace('-thumbnail', '')
    }
}

closeIcon.onclick = function() {
    blurDiv.style.display = 'none'
    popUpDiv.style.display = 'none'
}

blurDiv.onclick = function() {
    blurDiv.style.display = 'none'
    popUpDiv.style.display = 'none'
}