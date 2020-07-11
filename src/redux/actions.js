import {SHOES_ITEMS, SHOES_TOTAL} from "./types";

// Action Creator
export function shoesItems(itemsTotal) {
  return {
    type: SHOES_ITEMS,
    itemsTotal
  }
}

export function shoesTotal(itemsTotalParse) {
  return {
    type: SHOES_TOTAL,
    itemsTotalParse
  }
}
