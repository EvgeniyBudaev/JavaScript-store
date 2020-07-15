import './scss/index.scss';
import {Router} from "./core/routes/Router";
import {ShoppingCartPage} from "./pages/ShoppingCartPage";
import {ShopPage} from "./pages/ShopPage";

new Router('#app', {
  shoppingCart: ShoppingCartPage,
  shop: ShopPage
})

