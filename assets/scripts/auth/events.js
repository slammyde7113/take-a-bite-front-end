'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  console.log('signed out')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onShowMenu = function (event) {
  event.preventDefault()
  console.log('show menu')

  api.showMenu()
    .then(ui.showMenuSuccess)
    .catch(ui.showMenuFailure)
}
const onCreateProfile = function (event) {
  event.preventDefault()
  const data = $(event.target).parent().attr('data-id')
  console.log('created profile')
  api.createProfile(data)
    .then(ui.createProfileSuccess)
    .catch(ui.createProfileFailure)
}

const onShowProfiles = function (event) {
  event.preventDefault()
  console.log('show profiles')
  api.showProfiles()
    .then(ui.showProfilesSuccess)
    .catch(ui.showProfilesFailure)
}
const onShowProfileTotal = function (event) {
  event.preventDefault()
  const data = JSON.stringify(getFormFields(event.target)).replace(/\D/g, '')
  console.log(data)
  console.log('show profile total')

  api.showProfileItem(data)
    .then(ui.showProfileItemSuccess)
    .catch(ui.showProfileItemFailure)
}
const onDeleteProfile = function (event) {
  event.preventDefault()
  const data = $(event.target).parent().attr('data-id')
  $(event.target).parent().text('DELETED BRUH')
  console.log('delete profile ' + data)
  api.deleteProfile(data)
    .then(ui.deleteProfileSuccess)
    .catch(ui.deleteProfileFailure)
}
const onCouponApplier = function (event) {
  event.preventDefault()
  console.log('show profiles')
  const check = parseInt(JSON.stringify(getFormFields(event.target)).replace(/\D/g, ''), 10)
  if (check === 6969) {
    api.showProfiles()
      .then(ui.couponApplierSuccess)
      .catch(ui.couponAplierFailure)
  }
  ui.couponAplierFailure()
}
const onCoupon = function (event) {
  event.preventDefault()
  const data = $(event.target).parent().parent().attr('data-id')
  for (let i = 0; i < store.profile.profiles.length; i++) {
    if (store.profile.profiles[i].id === parseInt(data, 10)) {
      console.log(JSON.stringify(store.profile.profiles[i].menu_item.price).replace(/\D/g, ''))
      store.oldPrice = JSON.stringify(store.profile.profiles[i].menu_item.price).replace(/\D/g, '')
      store.oldId = JSON.stringify(store.profile.profiles[i].id).replace(/\D/g, '')
    }
  }
  api.showProfile
  console.log(data)
  console.log(store.oldPrice)
  console.log(store.oldId)
  api.coupon(data)
    .then(ui.couponSuccess)
    .catch(ui.couponFailure)
}
// const couponFunction = function () {
//   let x = "One Item free!"
//   console.log($("#coupon-check").checked)
//   if ($("#coupon-check").checked) {
//      x = "Coupon Applied"
//      $("#coupon-response").innerHTML = x;
//      $('#coupon-check').off()
//   }
//   document.getElementById("coupon-response").innerHTML = x;
// }

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-pass').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('#show-menu').on('click', onShowMenu)
  $('body').on('click', '.add-button', onCreateProfile)
  $('body').on('click', '.delete-button', onDeleteProfile)
  $('body').on('click', '#coupon-submit', onCoupon)
  $('#show-profiles').on('click', onShowProfiles)
  $('#show-profile-total').on('submit', onShowProfileTotal)
  $('#coupon-submit').on('click', onCoupon)
  $('#coupon').on('submit', onCouponApplier)
}

module.exports = {
  addHandlers
}
