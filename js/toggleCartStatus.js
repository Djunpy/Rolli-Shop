
// Определяем статус корзины, если есть хоть один товар удаляем надпись 
// корзина пуста, и добавляем форму оформить заказ
function toggleCartStatus() {

    const cartWrapper = document.querySelector('.cart-wrapper')
    const cartEmpty = document.querySelector('[data-cart-empty]')
    const orderForm = document.querySelector('#order-form')
    
    if (cartWrapper.children.length > 0) {
        // Удаляем надпись 
        cartEmpty.classList.add('none')
        // Добавляем форму 
        orderForm.classList.remove('none')


    }else{
       
        cartEmpty.classList.remove('none')
        orderForm.classList.add('none')
    }
}