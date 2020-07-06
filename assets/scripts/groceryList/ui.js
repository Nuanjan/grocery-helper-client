const store = require('./../store')
const showGroceryLists = require('../templates/groceryLists.handlebars')

const createSuccess = function (response) {
  $('form').trigger('reset')
  // Messaging:
  store.groceryList = response.groceryList
  $('#message').text('Creat List success')
  //  store.groceryLists = response.groceryLists
  $('.flex-list').hide()
  $('#create-list-btn').show()
  $('#view-list-btn').show()
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

const indexSuccess = (data) => {
  $('#edit-list-section').hide()
  const showGroceryListsHtml = showGroceryLists({groceryLists: data.groceryLists})
  $('.content').html(showGroceryListsHtml)
}
const removeSuccess = (groceryListId) => {
  $(`[data-id='${groceryListId}']`).remove()
  $('#message').text('Remove List success!')
}

const removeFailure = () => {
  $('#message').text('Remove List failed!')
}

const updateSucccess = () => {
  $('#edit-list-section').hide()
  $('form').trigger('reset')
  $('#message').text('Update List success!')
  $('#edit-list').hide()
}

const updateFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Update List Failed!')
  $('#edit-list').hide()
}

const viewSuccess = (response) => {
  store.groceryList.list = response.groceryList.list
  store.groceryList.list = response.groceryList.list
  const lines = store.groceryList.list.split(/\n/g)
  $('.single-list').text(`Title:  ${response.groceryList.title}`).css('color', '#8A1215')
  for (let i = 0; i < lines.length; i++) {
    $('.single-list').append('<li>' + lines[i] + '</li>')
  }
  $('.single-list').show()
  $('#message').text('View List Success!')
  $('#go-back').show()
}
const viewFailure = () => {
  $('#message').text('View List Failed!')
  $('#edit-list').hide()
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
  viewFailure
}
