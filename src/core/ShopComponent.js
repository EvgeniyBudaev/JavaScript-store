import {DomListener} from "./DomListener";

export class ShopComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || ''
    this.subscribe = options.subscribe || []
    this.store = options.store
  }

  // Возвращает шаблон компонента
  toHTML() {
    return ''
  }

  $dispatch(action) {
    this.store.dispatch(action)
  }

  // Сюда приходят только изменения по тем полям, на которые мы подписались
  storeChanged() {}

  isWatching(key) {
    return this.subscribe.includes(key)
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
  }
}
