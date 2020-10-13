'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const credEvent = require('./auth/events')
const groceryListEvent = require('./groceryList/events')
const itemListEvent = require('./itemList/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // groceryList event
  $('#sign-up').on('submit', credEvent.onCredSignUp)
  $('#sign-in').on('submit', credEvent.onCredSignIn)
  $('#change-pw').on('submit', credEvent.onCredChPw)
  $('#sign-out').on('click', credEvent.onCredSignOut)
  $('#title').on('submit', groceryListEvent.onGroceryListCreate)
  $('#go-viewList').on('click', groceryListEvent.onGroceryListIndex)
  $('#go-createList').on('click', groceryListEvent.onGroceryClickNewCreate)
  $('#go-back').on('click', groceryListEvent.ongroceryGoBack)
  $('.box').on('click', groceryListEvent.onGroceryListProduct)
  $('.content').on('click', '.delete-list-btn', groceryListEvent.onGroceryListRemove)

  // ItemList event
  $('.add').on('click', itemListEvent.onItemCreate)
  $('.btn-add-less').on('click', itemListEvent.onItemCreateClick)
  $('.content').on('click', '.view-list-btn', itemListEvent.onItemListIndex)
})
