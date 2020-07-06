const store = require('./../store')
const showGroceryLists = require('../templates/groceryLists.handlebars')

const createSuccess = function (response) {
  $('form').trigger('reset')
  // Messaging:
  store.groceryList = response.groceryList
  console.log(store.groceryList)
  $('#message').text('Creat List success')
  //  store.groceryLists = response.groceryLists
  $('.menu').show()
  $('#title').hide()
}
const createFailure = function () {
  $('form').trigger('reset')
  // Show a error message
  // Select the message element, change its text, and display it
  // Change the text:
  $('#message').text('Create List failed!')
  $('.flex-list').hide()
  $('#create-list-btn').show()
  $('#view-list-btn').show()
}

const itemSuccess = function (response) {
  $('#message').text('Create item success!')
  console.log(store.item)
  $('#ch-item').text('0')
  store.item.itemName = ''
  store.item.amount = 0
  console.log(store.groceryList.items)
}
const itemFailure = function () {
  $('#message').text('Create item failed!')
}

const indexSuccess = (data) => {
  console.log(data)
  const showGroceryListsHtml = showGroceryLists({groceryLists: data.groceryLists})
  $('#content').html(showGroceryListsHtml)
  $('#message').text('Show grocery List success!')
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

const viewSuccess = (response) => {
  console.log(response)
  $('.single-list').show()
  $('.single-list').text(`title: ${response.groceryList.title}`).append('<li>list:   ' + response.groceryList.list + '</li>')
  $('#message').text('View List Success!')
  $('#go-back').show()
}
const viewFailure = () => {
  $('#message').text('View List Failed!')
}
module.exports = {
  createSuccess,
  createFailure,
  indexSuccess,
  removeFailure,
  removeSuccess,
  updateSucccess,
  updateFailure,
  viewSuccess,
  viewFailure,
  itemSuccess,
  itemFailure
}
