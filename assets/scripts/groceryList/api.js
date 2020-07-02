'use strict'
const config = require('./../config')
const store = require('./../store')

const groceryListCreate = function (data) {
  console.log('this is data in groceryListCreate\n', data)
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
  console.log(store.user._id)
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
  console.log('groceryListId from api ', groceryListId)
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
