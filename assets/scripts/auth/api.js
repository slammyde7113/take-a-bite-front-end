'use strict'
const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: `${config.apiOrigins.production}/sign-up/`,
    method: 'POST',
    data
  })
}
const signIn = function (data) {
  return $.ajax({
    url: `${config.apiOrigins.production}/sign-in`,
    method: 'POST',
    data
  })
  .then((response) => {
    store.userToken = response.user.token
    store.id = response.user.id
    return store.userToken
  })
}
const changePassword = function (data) {
  return $.ajax({
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    url: `${config.apiOrigins.production}/change-password/${store.id}`,
    method: 'PATCH',
    data
  })
}
const signOut = function () {
  return $.ajax({
    url: `${config.apiOrigins.production}/sign-out/${store.id}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${store.userToken}`
    }
  })
}
const showMenu = function () {
  return $.ajax({
    url: `${config.apiOrigins.production}/menu_items`,
    method: 'GET'
  })
}
const createProfile = function (data) {
  return $.ajax({
    url: `${config.apiOrigins.production}/profiles`,
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    method: 'POST',
    data: {
      'profile':
      {
        'user_id': '' + store.id + '',
        'menu_item_id': '' + data + '',
        'coupon_menu_id': 4
      }
    }
  })
}
const showProfiles = function () {
  return $.ajax({
    url: `${config.apiOrigins.production}/profiles`,
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    method: 'GET'
  })
  .then((data) => {
    store.profile = data
    return data
  })
}
const deleteProfile = function (data) {
  store.profile_id = data
  return $.ajax({
    url: `${config.apiOrigins.production}/profiles/${store.profile_id}`,
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    method: 'DELETE'
  })
  .then((data) => {
    return store.profile_id
  })
}

const showProfileItem = function (data) {
  const price = data.toString()
  return $.ajax({
    url: `${config.apiOrigins.production}/profiles/show-profile-total/${data}`,
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    method: 'GET'
  })
  .then((data) => {
    return data
  })
}
const coupon = function (data, string) {
  return $.ajax({
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    url: `${config.apiOrigins.production}/profiles/${data}`,
    method: 'PATCH',
    data: {
      'profile': {
        'coupon_menu_id': 5
      }
    }
  })
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
