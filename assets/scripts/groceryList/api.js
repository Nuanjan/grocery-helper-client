'use strict'
const config = require('./../config')
const store = require('./../store')

const groceryListCreate = function (data) {
  console.log(store.user._id)
  console.log(store.user.token)
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
  console.log('this is owner from api ', store.user._id)
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
module.exports = {
  groceryListCreate,
  groceryListIndex,
  groceryListRemove
}
