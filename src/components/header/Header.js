import {ShopComponent} from "../../core/ShopComponent";

export class Header extends ShopComponent {
  static className = 'shop__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      subscribe: ['currentNumbers'],
      ...options
    });
  }

  toHTML() {
    const {cartItems} = this.store.getState()
    return `
          <div class="container">
            <div class="shop__header-inner">
              <div class="shop__header-top">
                <div class="shop__header-logo"><a href="#">Greats</a></div>
                <div class="shop__header-menu">
                  <ul>
                    <li>
                      <a href="#">
                        <div class="shop__header-icon"></div>
                        <div class="shop__header-numbers js__shop-numbers" id="headerNumbers">${cartItems ? cartItems : 0}</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="shop__header-content">
                <div class="shop__header-title">The Wooster Is Back</div>
                <div class="shop__header-subtitle">We gave an old school sneaker a modern, super luxe upgrade.</div>
              </div>
            </div>
          </div>
    `
  }

  init() {
    super.init();
    this.$header = this.$root.find('#header')
    // this.$subscribe(state => {
    //   console.log('Header State: ', state)
    // })
  }

  // storeChanged(changes) {
  //   console.log('changes ', changes)
  // }

  storeChanged({currentNumbers}) {
    console.log('currentNumbers', currentNumbers)
    this.$header.text(currentNumbers)
  }
}
