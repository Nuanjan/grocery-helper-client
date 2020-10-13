const store = require('./../store')
// const showItemLists = require('../templates/itemLists.handlebars')

const itemSuccess = function (response) {
  $('#message').text('Create item success!')
  //  console.log(response.groceryList.items[response.groceryList.items.length - 1])
  store.items = response.groceryList.items
  store.item.id = response.groceryList.items[response.groceryList.items.length - 1]._id
  console.log(store.items)
  console.log(store.item.id)
}

const itemFailure = function () {
  $('#message').text('Create item failed!')
}

const itemIndexSuccess = (response) => {
  store.groceryList = response.groceryList
  for (let i = 0; i < response.groceryList.items.length; i++) {
    // store.items.push(response.groceryList.items[i])
    console.log(response.groceryList.items[i])
  }
  $('.show-items').append(response.groceryList.title)
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
