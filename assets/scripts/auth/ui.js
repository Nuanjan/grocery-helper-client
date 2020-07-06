'use strict'

const store = require('./../store')

const signupSuccess = function (response) {
  // Form reset:
  $('form').trigger('reset')
  $('#sign-up').hide()
  // Messaging:
  $('#message').text('Welcome! ' + response.user.email)
}

const signupFailure = function () {
  $('form').trigger('reset')
  // Show a error message
  // Select the message element, change its text, and display it
  // Change the text:
  $('#message').text('Sorry sign up failed! Try again')
  // Show the element:
  $('#message').show()
  // Remove all the classes, then add the failure class
}
const signinSuccess = function (response) {
  // Form reset:
  store.user = response.user
  console.log(store.user)
  $('form').trigger('reset')
  // Messaging:
  $('#message').text('Welcome back! ' + response.user.email)
  $('#sec-auth').hide()
  $('body').css('background-image', 'url(./../../public/8.jpg)')
  $('h1').hide()
  $('#ch-pw').show()
  $('#sign-out').show()
  $('.list-product').hide()
  $('.wrap').show()
  $('#go-viewList').show()
  $('#go-createList').show()
  $('#title').hide()
}

const signinFailure = function () {
  $('form').trigger('reset')
  // Show a error message
  // Select the message element, change its text, and display it
  // Change the text:
  $('#message').text('Sorry sign in failed! Try again')
  // Show the element
}

const chPwSuccess = function () {
  // Form reset:
  $('form').trigger('reset')
  // Messaging:
  $('#message').text('Password changed! ')
}

const chPwFailure = function () {
  // Show a error message
  $('#change-pw')[0].reset()
  $('#message').text('Password Change Failed, Try agin!')
}

const signoutSuccess = function () {
  $('.row').hide()
  store.user.token = null
  $('#message').text('Good Bye! ')
  $('.wrap').hide()
  $('#ch-pw').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('h1').show()
  $('body').css('background-image', 'url(./../../public/2.jpg)')
}

const signoutFailure = function () {
  // Show a error message
  // Select the message element, change its text, and display it
  // Change the text:
  $('#message').text('Sign Out Failed, You still here!')
}

module.exports = {
  signupSuccess: signupSuccess,
  signupFailure: signupFailure,
  signinSuccess: signinSuccess,
  signinFailure: signinFailure,
  chPwSuccess: chPwSuccess,
  chPwFailure: chPwFailure,
  signoutSuccess: signoutSuccess,
  signoutFailure: signoutFailure
}
