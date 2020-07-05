import {ShopComponent} from "../../core/ShopComponent";
import {ApiService} from "../../api/ApiService";

export class Shoes extends ShopComponent {
  static className = 'shop__shoes'

  constructor($root) {
    super($root, {
      name: 'Shoes',
      listeners: ['click']
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
                    <div class="shop__shoes-price">${product.price}</div>
                  </div>
                  <div class="shop__shoes-addToShoppingCart">
                    <div class="shop__shoes-add">Добавить в корзину</div>
                    <div class="shop__shoes-choose">
                      <div class="shop__shoes-minus">-</div>
                      <div class="shop__shoes-amount">0</div>
                      <div class="shop__shoes-plus">+</div>
                    </div>
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
          console.log('products:', products)
          this.displayProducts(products)
        })
  }

  toHTML() {
    this.transferProducts()

    return `
          <div class="container">
            <div class="shop__shoes-inner">
              <div class="shop__shoes-title title">Check out our best sellers</div>
              <div class="shop__shoes-items">
              ${this.displayProducts}
              </div>
            </div>
          </div>
    `
  }

  onClick(event) {
    console.log('Shoes: onClick', event.target)
  }
}

// document.addEventListener('DOMContentLoaded', () => {
//   const shoes = new Shoes()
//   const apiService = new ApiService()
//
//   apiService.getProducts()
//       .then(products => {
//         console.log('products:', products)
//         shoes.displayProducts(products)
//       })
// })

