const store = require('./../store')
// const showItemLists = require('../templates/itemLists.handlebars')

const itemSuccess = function (response) {
  $('#message').text('Create item success!')
  console.log(store.item)
  $('.amount').text('0')
  store.item.itemName = ''
  store.item.amount = 0
  console.log(store.groceryList.items)
  console.log(store.item)
}

const itemFailure = function () {
  $('#message').text('Create item failed!')
}

const itemIndexSuccess = (response) => {
  store.groceryList = response.groceryList
  for (let i = 0; i < response.groceryList.items.length; i++) {
    store.items.push(response.groceryList.items[i])
  }
  $('ul').append(response.groceryList.title)
  for (let i = 0; i < store.items.length; i++) {
    $('.grocery-list').hide()
    $('ul').append('<li>' + store.items[i].itemName + '      ' + store.items[i].amount + '</li>')
  }
}
module.exports = {
  itemSuccess,
  itemFailure,
  itemIndexSuccess
}
