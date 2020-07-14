import {ShopComponent} from "../../core/ShopComponent";
import {ApiService} from "../../api/ApiService";
import * as actions from '../../redux/actions';
import {storage} from "../../core/utils";

export class Shoes extends ShopComponent {
  static className = 'shop__shoes'
  cart = []

  constructor($root, options) {
    super($root, {
      name: 'Shoes',
      listeners: ['click'],
      ...options
    });
  }

  displayProducts(products) {
    let result = ''
    products.forEach(product => {
      result += `
    <!--    single product-->
                <div class="shop__shoes-item">
                  <div class="shop__shoes-img">
                    <img src=${product.image} alt="shoes-1">
                  </div>
                  <div class="shop__shoes-info">
                    <div class="shop__shoes-description">
                      <div class="shop__shoes-name">${product.name}</div>
                      <div class="shop__shoes-subname">${product.subname}</div>
                    </div>
                    <div class="shop__shoes-price">${product.price} руб.</div>
                  </div>
                  <div class="shop__shoes-addToShoppingCart">
                    <button class="shop__shoes-add" data-id=${product.id}>Добавить в корзину</button>
                  </div>
                </div>
    <!--    end of single product-->
      `
    })
    const productsDOM = document.querySelector('.shop__shoes-items')
    productsDOM.innerHTML = result
  }

  transferProducts() {
    const apiService = new ApiService()

    apiService.getProducts()
        .then(products => {
          this.displayProducts(products)
          storage('products-state', products)
        })
  }

  toHTML() {
    this.transferProducts()
    const {cartTotal} = this.store.getState()
    return `
          <div class="container">
            <div class="shop__shoes-inner">
              <div class="shop__shoes-title title">Check out our best sellers</div>
              <div class="shop__shoes-items">
              ${this.displayProducts}
              </div>
              <div class="shop__shoes-total title">${cartTotal ? cartTotal : 0}</div>
            </div>
          </div>
    `
  }

  init() {
    super.init();
  }

  setCartValues(cart) {
    const cartItems = document.querySelector('.js__shop-numbers')
    const cartTotal = document.querySelector('.shop__shoes-total')

    let tempTotal = 0
    let itemsTotal = 0
    cart.map(item => {
      tempTotal += item.price * item.amount
      itemsTotal += item.amount
    })
    const itemsTotalParse = parseFloat(tempTotal.toFixed(2))
    this.$dispatch(actions.shoesItems(itemsTotal))
    this.$dispatch(actions.shoesTotal(itemsTotalParse))
    cartTotal.innerText = parseFloat(tempTotal.toFixed(2))
    cartItems.innerText = itemsTotal
  }

  getProduct(id) {
    const products = JSON.parse(localStorage.getItem('products-state'))
    return products.find(product => product.id === id)
  }

  onClick(event) {
    if (event.target.dataset.id) {
      const id = event.target.dataset.id
      // get product from products
      const cartItem = {...this.getProduct(id), amount: 1}
      console.log('cartItem', cartItem)
      this.cart = [...this.cart, cartItem]
      console.log('this.cart: ', this.cart)
      // set cart values
      this.setCartValues(this.cart)
      this.$dispatch(actions.cartItems(this.cart))
    }
  }
}

