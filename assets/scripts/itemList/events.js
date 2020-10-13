// const store = require('./../store')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const onItemCreateClick = function (event) {

}
let count = 0
const onItemCreate = function (event) {
  const addLess = event.target
  const addLessId = $(addLess).data('id')
  if (addLessId === 'fl-add' && ('#fl-item').text !== '0') {
    count += 1
    $('#fl-item').text(count)
    store.item.itemName = 'flour'
    store.item.amount = count
    api.itemListUpdate(store.item.amount)
      .then(ui.itemSuccess)
      .catch(ui.itemFailure)
  }
  if (addLessId === 'fl-less' && ('#fl-item').text !== '0') {
    console.log('click less')
    count -= 1
    $('#fl-item').text(count)
  }
  if (addLessId === 'fl-add' && ('#fl-item').text === '0') {
    count += 1
    $('#fl-item').text(count)
    store.item.itemName = 'flour'
    store.item.amount = count
    api.groceryItemCreate()
      .then(ui.itemSuccess)
      .catch(ui.itemFailure)
  }
}

const onItemListIndex = (event) => {
  const view = event.target
  const viewId = $(view).data('id')
  event.preventDefault()
  api.itemListIndex(viewId)
    .then(ui.itemIndexSuccess)
    .catch(ui.itemIndexFailure)
}

module.exports = {
  onItemCreateClick,
  onItemCreate,
  onItemListIndex
}
