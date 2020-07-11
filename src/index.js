import './scss/index.scss';
import {Shop} from "./components/shop/Shop";
import {Header} from "./components/header/Header";
import {Shoes} from "./components/shoes/Shoes";
import {createStore} from "./core/createStore";
import {rootReducer} from "./redux/rootReducer";
import {storage} from "./core/utils";

const store = createStore(rootReducer, storage('shop-state'))

store.subscribe(state => {
  console.log('App state:', state)
  storage('shop-state', state)
})

const shop = new Shop('#app', {
  components: [Header, Shoes],
  store
})

shop.render()

