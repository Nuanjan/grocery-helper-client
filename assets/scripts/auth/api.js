'use strict'
const config = require('./../config')
const store = require('./../store')

const credSignUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    // data: data since it matching the API format you can pass the whole data
    // data
    data: {
      credentials: {
        email: data.credentials.email,
        password: data.credentials.password,
        password_confirmation: data.credentials.password_confirmation
      }
    }
  })
}

const credSignIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    // data: data since it matching the API format you can pass the whole data
    // data
    data: {
      credentials: {
        email: data.credentials.email,
        password: data.credentials.password
      }
    }
  })
}

const credChPw = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      passwords: {
        old: data.passwords.old,
        new: data.passwords.new
      }
    }
  })
}
const credSignOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  credSignUp: credSignUp,
  credSignIn: credSignIn,
  credChPw: credChPw,
  credSignOut: credSignOut

}
