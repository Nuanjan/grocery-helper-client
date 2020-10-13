'use strict'
// old Heroku deploy: https://pure-thicket-03244.herokuapp.com'
let apiUrl
const apiUrls = {
  production: 'mongodb+srv://heroku_5vw14dw6:fTMGk0Gc0Pp0hiSJ@cluster-5vw14dw6.rgewc.mongodb.net/heroku_5vw14dw6?retryWrites=true&w=majority',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
