'use strict'
const config = require('./../config')
const store = require('./../store')

const groceryListCreate = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/groceryLists',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      groceryList: {
        title: data.groceryList.title,
        list: data.groceryList.list
      }
    }
  })
}

const groceryListIndex = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/groceryLists',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      groceryList: {
        owner: store.user._id
      }
    }
  })
}

const groceryListRemove = (groceryListId) => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/groceryLists/' + groceryListId,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const groceryListUpdate = (data) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/groceryLists/' + store.groceryList._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const groceryListView = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/groceryLists/' + store.groceryList._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
module.exports = {
  groceryListCreate,
  groceryListIndex,
  groceryListRemove,
  groceryListUpdate,
  groceryListView
}
