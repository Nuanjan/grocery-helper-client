'use strict'
const config = require('./../config')
const store = require('./../store')

const groceryItemCreate = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/items',
    data: {
      item: {
        itemName: store.item.itemName,
        amount: store.item.amount,
        groceryListId: store.groceryList._id
      }
    }
  })
}
const itemListIndex = function (viewId) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/groceryLists/' + viewId,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const itemListUpdate = function (amount) {
  console.log(store.item.id)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/items/' + store.item.id,
    data: {
      item: {
        itemName: store.item.itemName,
        amount: amount,
        groceryListId: store.groceryList._id
      }
    }
  })
}

module.exports = {
  groceryItemCreate,
  itemListIndex,
  itemListUpdate
}
