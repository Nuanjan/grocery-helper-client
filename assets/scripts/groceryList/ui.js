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
  const lines = store.groceryList.list.split(/\n/g)
  $('.single-list').text(`Title:  ${response.groceryList.title}`).css('color', '#8A1215')
  for (let i = 0; i < lines.length; i++) {
    $('.single-list').append('<li>' + lines[i] + '</li>').css('list-style', 'none')
  }
  $('.single-list').show()
  $('#message').text('View List Success!').delay(3200).fadeOut(300)
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
  viewFailure
}
