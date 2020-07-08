'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('./../store')

const onGroceryListCreate = function (event) {
  event.preventDefault()
  // event.target is the create new list button
  const form = event.target
  // get data from the form field
  const data = getFormFields(form)
  console.log('data is ', data)
  // passing data to the request api
  api.groceryListCreate(data)
  // if success message
    .then(ui.createSuccess)
    // if not success message
    .catch(ui.createFailure)
}

const onGroceryListProduct = function (event) {
  const div = event.target
  const choice = $(div).data('type')
  switch (choice) {
    case 'meat': {
      $('.menu').hide()
      $('.meat-product').show()
      $('#go-back').show()
      break
    }
    case 'bakery': {
      $('.menu').hide()
      $('.bakery-product').show()
      $('#go-back').show()
      break
    }
    case 'fruits': {
      $('.list-product').show()
      $('.bakery').show()
      $('#go-back').show()
      break
    }
    case 'frozen-food': {
      $('.list-product').show()
      $('.frozen-food').show()
      $('#go-back').show()
      break
    }
    case 'noodle': {
      $('.list-product').show()
      $('.noodle').show()
      $('#go-back').show()
      break
    }
    case 'seafood': {
      $('.list-product').show()
      $('.seafood').show()
      $('#go-back').show()
      break
    }
    case 'vegetables': {
      $('.list-product').show()
      $('.vegetables').show()
      $('#go-back').show()
      break
    }
    case 'drinks': {
      $('.list-product').show()
      $('.drinks').show()
      $('#go-back').show()
      break
    }
    case 'ice-cream': {
      $('.list-product').show()
      $('.ice-cream').show()
      $('#go-back').show()
      break
    }
    default: console.log('no choice')
  }
}

const onGroceryListIndex = function (event) {
//  $('#go-back').show()
  event.preventDefault()
  api.groceryListIndex()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
}

const onGroceryListRemove = function (event) {
  event.preventDefault()
  // event.target is the any remove button from handlebars that has data of list id
  const groceryListId = $(event.target).data('id')

  // pass data now = the list id
  api.groceryListRemove(groceryListId)
  // if success run the ui function that has that specific list id
    .then(() => ui.removeSuccess(groceryListId))
    .catch(ui.removeFailure)
}

// when click edit from the edit button from groceryList.handlebars
const onGroceryListClickEdit = () => {
  event.preventDefault()
  // show the section that will has the form of title list to edit
  $('#edit-list-section').show()
  // hide index list
  $('.row').hide()
  $('#view-list-btn').hide()
  $('#create-list-btn').hide()
  // show the title and list field for edit.
  $('.flex-new-list').show()
  // save the id data to the store.groceryList.id to pass to api
  store.groceryList._id = event.target.dataset.id
}
const onGroceryListUpdate = (event) => {
  event.preventDefault()
  console.log(event)
  const form = event.target
  const data = getFormFields(form)
  api.groceryListUpdate(data)
    .then(ui.updateSucccess)
    .catch(ui.updateFailure)
}

// when click view from single list shouls show only the list that they want to view.
// hide all of the index List
// show the title and the list from the list user click.
// has go back button to go back to main List
const onGroceryListClickView = () => {
  event.preventDefault()
  // show the section that will has the form of title list to edit
  $('#edit-list-section').show()
  // hide index list
  $('.row').hide()
  $('#create-list-btn').hide()
  $('#view-list-btn').hide()

  // save the id data to the store.groceryList.id to pass to api
  store.groceryList._id = event.target.dataset.id
  // request get single list from api
  api.groceryListView()
  // if success show the list
    .then(ui.viewSuccess)
    // if not success show message
    .catch(ui.viewFailure)
}

const ongroceryGoBack = () => {
  event.preventDefault()
  $('.menu').show()
  $('.meat-product').hide()
  $('#go-back').hide()
}
// click to create the new list
const onGroceryClickCreate = () => {
  event.preventDefault()
  $('.flex-list').show()
  $('#create-list-btn').hide()
  $('#view-list-btn').hide()
}
const onGroceryClickNewCreate = () => {
  event.preventDefault()
  $('#title').show()
}
module.exports = {
  onGroceryListCreate,
  onGroceryListIndex,
  onGroceryListRemove,
  onGroceryListClickEdit,
  onGroceryListUpdate,
  onGroceryListClickView,
  ongroceryGoBack,
  onGroceryClickCreate,
  onGroceryListProduct,
  onGroceryClickNewCreate
}
