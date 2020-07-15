import {debounce, storage} from "../../core/utils";
import {createStore} from "../../core/createStore";
import {rootReducer} from "../../redux/rootReducer";
import {normalizeInitialState} from "../../redux/initialState";

export class ShoppingCart {
  constructor(options) {
    // this.store = options.store
    console.log('options Shopping Cart:', options)
  }

  getCartItems() {
    const state = storage('shop-state')
    const initialState = normalizeInitialState(state)
    const store = createStore(rootReducer, initialState)
    const stateListener = debounce(state => {
      storage('shop-state', state)
    }, 300)
    store.subscribe(stateListener)
    console.log('Store Shopping Cart: ', store.getState())
    const cartItems = store.getState().carts
    return cartItems
  }

  displayCarts = (carts) => {
    console.log('carts', carts)

    document.addEventListener('click', () => {
      const cartsDOM = document.querySelector('.shoppingCart__content')

      let result = ''
      carts.forEach(cart => {
        result += `
          <div class="shoppingCart__images">
             <img src=${cart.image} style="max-width: 100px">
           </div>
          <div class="shoppingCart__price">${cart.price} руб.</div>
        `
      })
      cartsDOM.innerHTML = result
    })
  }

  toHTML() {
    const shopState = JSON.parse(localStorage.getItem('shop-state'))
    const cartItems = this.getCartItems()

    return `
      <div class="container">
      <a href="#shop">Go back</a>
        <h2>Your cart</h2>
        <button>Показать список выбранных товаров</button>
        <div class="shoppingCart__content">
          ${this.displayCarts(cartItems) ? this.displayCarts(cartItems) : ``}
        </div>
        <div class="shoppingCart__footer">
          <h3>Your total :  <span class="shoppingCart__total">${shopState.cartTotal} руб.</span></h3>
        </div>
      </div>
    `
  }
}

