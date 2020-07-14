import './scss/index.scss';
import {Router} from "./core/routes/Router";
import {ShoppingCartPage} from "./pages/ShoppingCartPage";
import {ShopPage} from "./pages/ShopPage";
// import {Shop} from "./components/shop/Shop";
// import {Header} from "./components/header/Header";
// import {Shoes} from "./components/shoes/Shoes";
// import {createStore} from "./core/createStore";
// import {rootReducer} from "./redux/rootReducer";
// import {storage} from "./core/utils";

new Router('#app', {
  shoppingCart: ShoppingCartPage,
  shop: ShopPage
})

// const store = createStore(rootReducer, storage('shop-state'))
//
// store.subscribe(state => {
//   console.log('App state:', state)
//   storage('shop-state', state)
// })
//
// const shop = new Shop('#app', {
//   components: [Header, Shoes],
//   store
// })
//
// shop.render()
//
