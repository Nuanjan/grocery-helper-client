const store = require('./../store')
const showGroceryLists = require('../templates/groceryLists.handlebars')

const createSuccess = function (response) {
  $('form').trigger('reset')
  // Messaging:
  store.groceryList = response.groceryList
  console.log(store.groceryList)
  $('#message').text('Creat List success')
//  store.groceryLists = response.groceryLists
}
const createFailure = function () {
  $('form').trigger('reset')
  // Show a error message
  // Select the message element, change its text, and display it
  // Change the text:
  $('#message').text('Create List failed!')
  // Show the element:
}

const indexSuccess = (data) => {
  $('#edit-list-section').hide()
  const showGroceryListsHtml = showGroceryLists({groceryLists: data.groceryLists})
  $('.content').html(showGroceryListsHtml)
}
const removeSuccess = (groceryListId) => {
  $(`[data-id='${groceryListId}']`).remove()
  $('#message').text('Remove List success!')
}

const removeFailure = (error) => {
  console.error(error)
  $('#message').text('Remove List failed!')
}

const updateSucccess = () => {
  $('#edit-list-section').hide()
  $('form').trigger('reset')
  $('#message').text('Update List success!')
}

const updateFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Update List Failed!')
}
module.exports = {
  createSuccess,
  createFailure,
  indexSuccess,
  removeFailure,
  removeSuccess,
  updateSucccess,
  updateFailure
}
