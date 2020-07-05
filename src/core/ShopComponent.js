import {DomListener} from "./DomListener";

export class ShopComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
  }

  // Возвращает шаблон компонента
  toHTML() {
    return ''
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
