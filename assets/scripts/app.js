'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const credEvent = require('./auth/events')
const groceryListEvent = require('./groceryList/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', credEvent.onCredSignUp)
  $('#sign-in').on('submit', credEvent.onCredSignIn)
  $('#change-pw').on('submit', credEvent.onCredChPw)
  $('#sign-out').on('click', credEvent.onCredSignOut)
  $('#create-list').on('submit', groceryListEvent.onGroceryListCreate)
  $('#view-list-btn').on('click', groceryListEvent.onGroceryListIndex)
  $('.content').on('click', '.delete-list-btn', groceryListEvent.onGroceryListRemove)
  $('.content').on('click', '.edit-list-btn', groceryListEvent.onGroceryListClickEdit)
  $('#edit-list').on('submit', groceryListEvent.onGroceryListUpdate)
})
