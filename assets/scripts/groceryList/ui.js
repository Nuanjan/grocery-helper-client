const store = require('./../store')
const showGroceryLists = require('../templates/groceryLists.handlebars')

const createSuccess = function (response) {
  // Messaging:
  store.groceryList = response.groceryList
  console.log(store.groceryList)
  $('#message').text('Creat List success')
//  store.groceryLists = response.groceryLists
}
const createFailure = function () {
  // Show a error message
  // Select the message element, change its text, and display it
  // Change the text:
  $('#message').text('Create List failed!')
  // Show the element:
}

const indexSuccess = (data) => {
  console.log('this is data from ui', data.groceryLists)
  const showGroceryListsHtml = showGroceryLists({groceryLists: data.groceryLists})
  $('.content').html(showGroceryListsHtml)
}
const removeSuccess = (groceryListId) => {
  $(`[data-id='${groceryListId}']`).remove()
}

const removeFailure = (error) => {
  console.error(error)
}
module.exports = {
  createSuccess,
  createFailure,
  indexSuccess,
  removeFailure,
  removeSuccess
}
