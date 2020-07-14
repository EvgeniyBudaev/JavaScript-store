import {Page} from "../core/Page";
import {$} from "../core/dom";
import {ShoppingCart} from "../components/shopping-cart/ShoppingCart";

export class ShoppingCartPage extends Page {
  getRoot() {
    const shopping = new ShoppingCart
    const shoppingToHTML = shopping.toHTML()

    return $.create('div', 'shoppingCart').html(shoppingToHTML)
  }
}
