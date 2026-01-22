let addToCartBtnsArr = document.getElementsByClassName('addToCart-btn')
let dessertImgsArr = document.getElementsByClassName('dessert-img')
let orderPlusMinusDivsArr = document.getElementsByClassName('orderPlusMinus')
let decrementIcon = document.getElementsByClassName('decrement')
let incrementIcon = document.getElementsByClassName('increment')
let itemAmount = document.getElementsByClassName('itemAmount')
let dessertNamesArr = document.getElementsByClassName('description')
let dessertPricesArr = document.getElementsByClassName('price')

let cartCount = document.getElementById('cartCount')
let emptyCart = document.getElementById('emptyCart')
let addingCartItems = document.getElementById('addingCartItems')


for (let i = 0; i < addToCartBtnsArr.length; i++) {
    let count = 0

    // gilaki dasamateblad
    addToCartBtnsArr[i].addEventListener('click', function () {
        addToCartBtnsArr[i].style.display = 'none'
        orderPlusMinusDivsArr[i].style.display = 'flex'
        dessertImgsArr[i].style.border = '2px solid red'
    })

    // mimateba
    incrementIcon[i].addEventListener('click', function () {
        count++
        itemAmount[i].textContent = count
        emptyCart.style.display = 'none'

        let itemId = 'cart-item-' + i
        let price = Number(dessertPricesArr[i].textContent.replace('$', ''))
        let cartItem = document.getElementById(itemId)

        if (!cartItem) {
            addingCartItems.innerHTML += `
            <div class="eachItem" id="${itemId}">
                <div class="left-side">
                    <p class="orderName">${dessertNamesArr[i].textContent}</p>
                    <div>
                        <p class="orderAmount">${count}x</p>
                        <p class="originalPrice">@${dessertPricesArr[i].textContent}</p>
                        <p class="mupltypliedPrice">$${price * count}</p>
                    </div>
                </div>
                <img src="assets/images/icon-remove-item.svg" class="removeItem">
            </div>`
        } else {
            cartItem.querySelector('.orderAmount').textContent = count + 'x'
            cartItem.querySelector('.mupltypliedPrice').textContent = '$' + (price * count)
        }

        cartCount.textContent = addingCartItems.children.length
    })

    // priduqtis gamokleba
    decrementIcon[i].addEventListener('click', function () {
        if (count > 0) {
            count--
            itemAmount[i].textContent = count

            let itemId = 'cart-item-' + i
            let cartItem = document.getElementById(itemId)
            let price = Number(dessertPricesArr[i].textContent.replace('$', ''))

            if (count === 0) {
                cartItem.remove()
                orderPlusMinusDivsArr[i].style.display = 'none'
                addToCartBtnsArr[i].style.display = 'flex'
                dessertImgsArr[i].style.border = 'none'
            } else {
                cartItem.querySelector('.orderAmount').textContent = count + 'x'
                cartItem.querySelector('.mupltypliedPrice').textContent = '$' + (price * count)
            }

            cartCount.textContent = addingCartItems.children.length

            if (addingCartItems.children.length === 0) {
                emptyCart.style.display = 'block'
            }
        }
    })
}
