import {createStore} from "../core/createStore";
import {rootReducer} from "../redux/rootReducer";
import {normalizeInitialState} from "../redux/initialState";
import {debounce, storage} from "../core/utils";
import {Header} from "../components/header/Header";
import {Shoes} from "../components/shoes/Shoes";
import {Shop} from "../components/shop/Shop";
import {Page} from "../core/Page";
import {ShoppingCart} from "../components/shopping-cart/ShoppingCart";

// function storageName(param) {
//   return 'shop:' + param
// }
function storageName() {
  return 'shop-state'
}

export class ShopPage extends Page {
  getRoot() {
    const params = this.params ? this.params : Date.now().toString()

    const state = storage(storageName(params))
    const initialState = normalizeInitialState(state)
    const store = createStore(rootReducer, initialState)

    const stateListener = debounce(state => {
      storage(storageName(params), state)
    }, 300)

    store.subscribe(stateListener)

    this.shop = new Shop({
      components: [Header, Shoes],
      store
    })

    this.shoppingCart = new ShoppingCart({
      components: [ShoppingCart],
      store
    })

    return this.shop.getRoot()
  }

  afterRender() {
    this.shop.init()
  }

  destroy() {
    this.shop.destroy()
  }
}
