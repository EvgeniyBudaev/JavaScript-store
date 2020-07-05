import './scss/index.scss';
import {Shop} from "./components/shop/Shop";
import {Header} from "./components/header/Header";
import {Shoes} from "./components/shoes/Shoes";

const shop = new Shop('#app', {
  components: [Header, Shoes]
})

shop.render()

