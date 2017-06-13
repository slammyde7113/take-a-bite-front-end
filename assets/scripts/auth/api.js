'use strict'
const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: `${config.apiOrigins.development}/sign-up/`,
    method: 'POST',
    data
  }).then(console.log(`${config.apiOrigins.development}/sign-up/`))
}
const signIn = function (data) {
  return $.ajax({
    url: `${config.apiOrigins.development}/sign-in`,
    method: 'POST',
    data
  })
  .then((response) => {
    store.userToken = response.user.token
    store.id = response.user.id
    return store.userToken
  })
  // .then(console.log)
}
const changePassword = function (data) {
  console.log(store.userToken)
  console.log(JSON.stringify(data))
  return $.ajax({
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    url: `${config.apiOrigins.development}/change-password/${store.id}`,
    method: 'PATCH',
    data
  })
  .then(console.log('changed!'))
}
const signOut = function () {
  return $.ajax({
    url: `${config.apiOrigins.development}/sign-out/${store.id}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${store.userToken}`
    }
  })
}
const showMenu = function () {
  return $.ajax({
    url: `${config.apiOrigins.development}/menu_items`,
    method: 'GET'
  })
}
const createProfile = function (data) {
  return $.ajax({
    url: `${config.apiOrigins.development}/profiles`,
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    method: 'POST',
    data: {
      'profile':
      {
        'user_id': '' + store.id + '',
        'menu_item_id': '' + data + ''
      }
    }
  })
  .then((response) => {
    console.log(response)
  })
}
const showProfiles = function () {
  return $.ajax({
    url: `${config.apiOrigins.development}/profiles`,
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    method: 'GET'
  })
  .then((data) => {
    console.log(data)
    return data
  })
}
const deleteProfile = function (data) {
  store.profile_id = data
  return $.ajax({
    url: `${config.apiOrigins.development}/profiles/${store.profile_id}`,
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    method: 'DELETE'
  })
  .then((data) => {
    console.log(store.profile_id)
    return store.profile_id
  })
}

const showProfileItem = function (data) {
  const price = data.toString()
  console.log(price)
  return $.ajax({
    url: `${config.apiOrigins.development}/profiles/show-profile-total/${data}`,
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    method: 'GET'
  })
  .then((data) => {
    console.log(data)
    return data
  })
}
const coupon = function (data) {
  console.log(data)
  return $.ajax({
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    url: `${config.apiOrigins.development}/profiles/1`,
    method: 'PATCH',
    data: {
      'price': 19.99
    }
  })
  .then(console.log('Coupon added!'))
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  showMenu,
  createProfile,
  showProfiles,
  deleteProfile,
  showProfileItem,
  coupon
}