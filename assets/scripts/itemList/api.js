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

module.exports = {
  groceryItemCreate,
  itemListIndex
}
