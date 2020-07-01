'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGroceryListCreate = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log('this is data onGroceryListCreate')
  console.log(data)
  api.groceryListCreate(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const onGroceryListIndex = function (event) {
  event.preventDefault()
  api.groceryListIndex()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
}

const onGroceryListRemove = function (event) {
  event.preventDefault()
  const groceryListId = $(event.target).data('id')
  console.log(groceryListId)
  api.groceryListRemove(groceryListId)
    .then(() => ui.removeSuccess(groceryListId))
    .catch(ui.removeFailure)
}

module.exports = {
  onGroceryListCreate,
  onGroceryListIndex,
  onGroceryListRemove
}
