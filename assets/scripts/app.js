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
  $('#title').on('submit', groceryListEvent.onGroceryListCreate)
  $('#go-viewList').on('click', groceryListEvent.onGroceryListIndex)
  $('.btn-add-less').on('click', groceryListEvent.onGroceryItemCreateClick)
  $('#add-btn-ch').on('click', groceryListEvent.onGroceryItemCreate)
  $('#add-btn-bf').on('click', groceryListEvent.onGroceryItemCreate)
  $('#add-btn-pk').on('click', groceryListEvent.onGroceryItemCreate)
  $('#add-btn-dk').on('click', groceryListEvent.onGroceryItemCreate)
  $('#add-btn-tk').on('click', groceryListEvent.onGroceryItemCreate)
  $('#add-btn-ss').on('click', groceryListEvent.onGroceryItemCreate)
  $('#add-btn-hm').on('click', groceryListEvent.onGroceryItemCreate)
  $('#add-btn-bk').on('click', groceryListEvent.onGroceryItemCreate)
  $('#add-btn-la').on('click', groceryListEvent.onGroceryItemCreate)
  $('#go-back').on('click', groceryListEvent.ongroceryGoBack)
  $('.box').on('click', groceryListEvent.onGroceryListProduct)
})
