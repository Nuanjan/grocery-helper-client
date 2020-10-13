'use strict'
// mongodb+srv://heroku_5vw14dw6:ATLVJVEjWcdrhLsH@cluster-5vw14dw6.rgewc.mongodb.net/heroku_5vw14dw6?retryWrites=true&w=majority
let apiUrl
const apiUrls = {
  production: 'https://pure-thicket-03244.herokuapp.com',
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
