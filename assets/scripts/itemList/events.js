const store = require('./../store')
const api = require('./api')
const ui = require('./ui')

const onItemCreateClick = function (event) {
// event.preventDefault()
  let count = store.item.amount
  const item = event.target
  const addItem = $(item).data('id')
  // Meat Product
  if (addItem === 'ch-add') {
    count += 1
    $('#ch-item').text(count)
    store.item.itemName = 'chicken'
    store.item.amount = count
  } else if (addItem === 'ch-less' && $('#ch-item').text() !== '0') {
    count -= 1
    $('#ch-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'bf-add') {
    count += 1
    $('#bf-item').text(count)
    store.item.itemName = 'beef'
    store.item.amount = count
  } else if (addItem === 'bf-less' && $('#bf-item').text() !== '0') {
    count -= 1
    $('#bf-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'pk-add') {
    count += 1
    $('#pk-item').text(count)
    store.item.itemName = 'pork'
    store.item.amount = count
  } else if (addItem === 'pk-less' && $('#pk-item').text() !== '0') {
    count -= 1
    $('#pk-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'dk-add') {
    count += 1
    $('#dk-item').text(count)
    store.item.itemName = 'duck'
    store.item.amount = count
  } else if (addItem === 'dk-less' && $('#dk-item').text() !== '0') {
    count -= 1
    $('#dk-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'tk-add') {
    count += 1
    $('#tk-item').text(count)
    store.item.itemName = 'turkey'
    store.item.amount = count
  } else if (addItem === 'tk-less' && $('#tk-item').text() !== '0') {
    count -= 1
    $('#tk-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'ss-add') {
    count += 1
    $('#ss-item').text(count)
    store.item.itemName = 'sausage'
    store.item.amount = count
  } else if (addItem === 'ss-less' && $('#ss-item').text() !== '0') {
    count -= 1
    $('#ss-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'hm-add') {
    count += 1
    $('#hm-item').text(count)
    store.item.itemName = 'ham'
    store.item.amount = count
  } else if (addItem === 'hm-less' && $('#hm-item').text() !== '0') {
    count -= 1
    $('#hm-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'bk-add') {
    count += 1
    $('#bk-item').text(count)
    store.item.itemName = 'bacon'
    store.item.amount = count
  } else if (addItem === 'bk-less' && $('#bk-item').text() !== '0') {
    count -= 1
    $('#bk-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'la-add') {
    count += 1
    $('#la-item').text(count)
    store.item.itemName = 'lamb'
    store.item.amount = count
  } else if (addItem === 'la-less' && $('#la-item').text() !== '0') {
    count -= 1
    $('#la-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }

  // bakery product
  if (addItem === 'fl-add') {
    count += 1
    $('#fl-item').text(count)
    store.item.itemName = 'flour'
    store.item.amount = count
  } else if (addItem === 'ch-less' && $('#fl-item').text() !== '0') {
    count -= 1
    $('#fl-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'eg-add') {
    count += 1
    $('#eg-item').text(count)
    store.item.itemName = 'egg'
    store.item.amount = count
  } else if (addItem === 'eg-less' && $('#eg-item').text() !== '0') {
    count -= 1
    $('#eg-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'sg-add') {
    count += 1
    $('#sg-item').text(count)
    store.item.itemName = 'sugar'
    store.item.amount = count
  } else if (addItem === 'sg-less' && $('#sg-item').text() !== '0') {
    count -= 1
    $('#sg-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'sl-add') {
    count += 1
    $('#sl-item').text(count)
    store.item.itemName = 'salt'
    store.item.amount = count
  } else if (addItem === 'sl-less' && $('#sl-item').text() !== '0') {
    count -= 1
    $('#sl-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'dr-add') {
    count += 1
    $('#dr-item').text(count)
    store.item.itemName = 'dairy'
    store.item.amount = count
  } else if (addItem === 'dr-less' && $('#dr-item').text() !== '0') {
    count -= 1
    $('#dr-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'bt-add') {
    count += 1
    $('#bt-item').text(count)
    store.item.itemName = 'butter'
    store.item.amount = count
  } else if (addItem === 'bt-less' && $('#bt-item').text() !== '0') {
    count -= 1
    $('#bt-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'sp-add') {
    count += 1
    $('#sp-item').text(count)
    store.item.itemName = 'spices'
    store.item.amount = count
  } else if (addItem === 'sp-less' && $('#sp-item').text() !== '0') {
    count -= 1
    $('#sp-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'bd-add') {
    count += 1
    $('#bd-item').text(count)
    store.item.itemName = 'bread'
    store.item.amount = count
  } else if (addItem === 'bd-less' && $('#bd-item').text() !== '0') {
    count -= 1
    $('#bd-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'bp-add') {
    count += 1
    $('#bp-item').text(count)
    store.item.itemName = 'baking powder'
    store.item.amount = count
  } else if (addItem === 'bp-less' && $('#bp-item').text() !== '0') {
    count -= 1
    $('#bp-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'oi-add') {
    count += 1
    $('#oi-item').text(count)
    store.item.itemName = 'oil'
    store.item.amount = count
  } else if (addItem === 'oi-less' && $('#oi-item').text() !== '0') {
    count -= 1
    $('#oi-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }

  // fruits Product
  if (addItem === 'wm-add') {
    count += 1
    $('#wm-item').text(count)
    store.item.itemName = 'watermelon'
    store.item.amount = count
  } else if (addItem === 'wm-less' && $('#wm-item').text() !== '0') {
    count -= 1
    $('#wm-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'sb-add') {
    count += 1
    $('#sb-item').text(count)
    store.item.itemName = 'strawberry'
    store.item.amount = count
  } else if (addItem === 'sb-less' && $('#sb-item').text() !== '0') {
    count -= 1
    $('#sb-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'cr-add') {
    count += 1
    $('#cr-item').text(count)
    store.item.itemName = 'cherry'
    store.item.amount = count
  } else if (addItem === 'cr-less' && $('#cr-item').text() !== '0') {
    count -= 1
    $('#cr-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'or-add') {
    count += 1
    $('#or-item').text(count)
    store.item.itemName = 'orange'
    store.item.amount = count
  } else if (addItem === 'or-less' && $('#or-item').text() !== '0') {
    count -= 1
    $('#or-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'mg-add') {
    count += 1
    $('#mg-item').text(count)
    store.item.itemName = 'mango'
    store.item.amount = count
  } else if (addItem === 'mg-less' && $('#mg-item').text() !== '0') {
    count -= 1
    $('#mg-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'ap-add') {
    count += 1
    $('#ap-item').text(count)
    store.item.itemName = 'apple'
    store.item.amount = count
  } else if (addItem === 'ap-less' && $('#ap-item').text() !== '0') {
    count -= 1
    $('#ap-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'bn-add') {
    count += 1
    $('#bn-item').text(count)
    store.item.itemName = 'banana'
    store.item.amount = count
  } else if (addItem === 'bn-less' && $('#bn-item').text() !== '0') {
    count -= 1
    $('#bn-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'lm-add') {
    count += 1
    $('#lm-item').text(count)
    store.item.itemName = 'lemon'
    store.item.amount = count
  } else if (addItem === 'lm-less' && $('#lm-item').text() !== '0') {
    count -= 1
    $('#lm-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
  if (addItem === 'pp-add') {
    count += 1
    $('#pp-item').text(count)
    store.item.itemName = 'pineapple'
    store.item.amount = count
  } else if (addItem === 'pp-less' && $('#pp-item').text() !== '0') {
    count -= 1
    $('#pp-item').text(count)
    store.item.amount = count
  } else {
    ui.itemFailure()
  }
}

const onItemCreate = function (event) {
  api.groceryItemCreate()
    .then(ui.itemSuccess)
    .catch(ui.itemFailure)
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
