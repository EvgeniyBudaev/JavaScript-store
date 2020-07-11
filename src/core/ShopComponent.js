import {DomListener} from "./DomListener";

export class ShopComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || ''
    this.store = options.store
    this.storeSub = null
  }

  // Возвращает шаблон компонента
  toHTML() {
    return ''
  }

  $dispatch(action) {
    this.store.dispatch(action)
  }

  $subscribe(fn) {
    this.storeSub = this.store.subscribe(fn)
  }

  // Инициализируем компонент
  // Добавляем DOM слушателей
  init() {
    this.initDOMListeners()
  }

  // Удаляем компонент
  // Чистим слушателей
  destroy() {
    this.removeDOMListeners()
    this.storeSub.unsubscribe()
  }
}
