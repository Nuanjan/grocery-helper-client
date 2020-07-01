'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('./../store')

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

  api.groceryListRemove(groceryListId)
    .then(() => ui.removeSuccess(groceryListId))
    .catch(ui.removeFailure)
}

const onGroceryListClickEdit = () => {
  event.preventDefault()
  $('#edit-list-section').show()
  $('.row').hide()
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

module.exports = {
  onGroceryListCreate,
  onGroceryListIndex,
  onGroceryListRemove,
  onGroceryListClickEdit,
  onGroceryListUpdate
}
