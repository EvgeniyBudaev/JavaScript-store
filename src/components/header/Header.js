import {ShopComponent} from "../../core/ShopComponent";

export class Header extends ShopComponent {
  static className = 'shop__header'

  toHTML() {
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
                        <div class="shop__header-numbers">0</div>
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
}
