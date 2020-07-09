'use strict'

const store = require('./../store')

const signupSuccess = function (response) {
  // Form reset:
  $('form').trigger('reset')
  $('#sign-up').hide()
  // Messaging:
  $('#message').text('Welcome Please sign in! ' + response.user.email)
}

const signupFailure = function () {
  $('form').trigger('reset')
  // Show a error message
  // Select the message element, change its text, and display it
  // Change the text:
  $('#message').text('Sorry, This Email might be taken, Try again')
  // Show the element:
  $('#message').show()
  // Remove all the classes, then add the failure class
}
const signinSuccess = function (response) {
  // Form reset:
  store.user = response.user
  $('form').trigger('reset')
  // Messaging:
  $('.hide').show()
  $('#message').text('Welcome back! ' + response.user.email)
  $('#create-list-btn').show()
  $('#view-list-btn').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('body').css('background-image', 'url(public/5.jpg)')
  $('h1').hide()
  $('#ch-pw').show()
  $('#sign-out').show()
  $('.wrap').show()
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
  $('#message').text('Password changed! ').show().delay(3000).fadeOut()
  $('#go-back').hide()
}

const chPwFailure = function () {
  // Show a error message
  $('#change-pw')[0].reset()
  $('#message').text('Password Change Failed, Try agin!').show().delay(3000).fadeOut()
  $('#go-back').hide()
}

const signoutSuccess = function () {
  $('.row').hide()
  store.user.token = null
  $('#message').text('Good Bye! ').show().delay(3000).fadeOut()
  $('.wrap').hide()
  $('#ch-pw').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('h1').show()
  $('body').css('background-image', 'url(public/2.jpg)')
  $('#go-back').hide()
  $('#create-list').hide()
  $('#edit-list').hide()
  $('.single-list').hide()
}

const signoutFailure = function () {
  // Show a error message
  // Select the message element, change its text, and display it
  // Change the text:
  $('#message').text('Sign Out Failed, You still here!').show().delay(3000).fadeOut()
  $('#go-back').hide()
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
