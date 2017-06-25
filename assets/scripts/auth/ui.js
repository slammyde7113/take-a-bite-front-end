'use strict'
const showMenuTemplate = require('../templates/menu-list.handlebars')
const showProfilesTemplate = require('../templates/profiles-list.handlebars')
const showCouponTemplate = require('../templates/coupon-list.handlebars')
const api = require('./api')

const modalTitleChange = function (title, condition) {
  const result = title
  if (condition) {
    $('.modal-title').html(`${result} SUCCESS`)
  } else {
    $('.modal-title').html(`${result} FAILED. CHECK USER PROMPT FOR DETAILS`)
  }
  setTimeout(function () {
    $('.modal-title').html('')
  }, 2000)
}

const signUpSuccess = (data) => {
  $('#prompt').text('You Have Signed Up')
  modalTitleChange('Sign Up', true)
}

const signUpFailure = () => {
  $('#prompt').text('Sign up Failed. Please Try Another Username Or Make Sure Your Username And Password Match')
  modalTitleChange('Sign Up', false)
}
const signInSuccess = (data) => {
  $('#prompt').text('You Are Signed In! Ready To Order!')
  modalTitleChange('Sign In', true)
  $('#sign-out').prop('disabled', false)
  $('#change-password').prop('disabled', false)
  $('#show-menu').prop('disabled', false)
  $('#show-profiles').prop('disabled', false)
  $('#show-profile-total').show()
}

const signInFailure = () => {
  $('#prompt').text('Sign In Failed. Please Make Sure You Have Double Checked Your Credentials And That You Have Correctly Signed Up')
  modalTitleChange('Sign In', false)
}
const changePasswordSuccess = (data) => {
  $('#prompt').text('Password Changed')
  modalTitleChange('Change Password', true)
}

const changePasswordFailure = () => {
  $('#prompt').text('Password Change Failed')
  modalTitleChange('Change Password', false)
}
const signOutSuccess = (data) => {
  $('.content').empty()
  $('#prompt').text('Signout Successful')
  $('#sign-out').prop('disabled', true)
  $('#change-password').prop('disabled', true)
  $('#show-menu').prop('disabled', true)
  $('#show-profiles').prop('disabled', true)
  $('#show-profile-total').hide()
}

const signOutFailure = () => {
  $('#prompt').text('Signout Unsuccessful')
  modalTitleChange('Sign Out', false)
}
const showMenuSuccess = (data) => {
  $('.content').empty()
  const showMenuHtml = showMenuTemplate({ menu_item: data.menu_items })
  $('.content').append(showMenuHtml)
}
const showMenuFailure = () => {
  $('#prompt').text('Show Menu Failure')
}
const createProfileSuccess = () => {
  $('#prompt').text('Create Profile Successful')
}
const createProfileFailure = () => {
  $('#prompt').text('Create Profile Failure')
}
const showProfilesSuccess = (data) => {
  $('.content').empty()
  const showProfilesHtml = showProfilesTemplate({ profile: data.profiles })
  $('.content').append(showProfilesHtml)
  $('#prompt').text('Show Profiles Successful')
}
const showProfilesFailure = () => {
  $('#prompt').text('Show Profile Failure')
}
const deleteProfileSuccess = (data) => {
  $('#prompt').text('Delete Profile Successful')
}
const showProfileItemSuccess = (data) => {
  $('.content').empty()
  const showMenuHtml = showMenuTemplate({ menu_item: data.menu_items })
  $('.content').append(showMenuHtml)
  $('#prompt').text('Show Menu Successful')
}
const showProfileItemFailure = () => {
  $('#prompt').text('Show Menu Failure')
}
const couponApplierSuccess = (data) => {
  $('.content').empty()
  const showCouponHtml = showCouponTemplate({ profile: data.profiles })
  $('.content').append(showCouponHtml)
  $('#prompt').text('Apply your coupon!')
}
const couponAplierFailure = () => {
  $('#prompt').text('Coupon Failure')
}
const couponSuccess = (data) => {
  $('.content').empty()
  const showMenuHtml = showMenuTemplate({ menu_item: data.menu_items })
  $('.content').append(showMenuHtml)
  $('#prompt').text('COUPON ACTIVATEDDDDD! Please Return to Profiles To See Savings')
}
const couponFailure = () => {
  api.showProfile()
  $('#prompt').text('NO COUPON 4 U >:( ')
}

module.exports = {
  modalTitleChange,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  showMenuSuccess,
  showMenuFailure,
  createProfileSuccess,
  createProfileFailure,
  showProfilesSuccess,
  showProfilesFailure,
  deleteProfileSuccess,
  showProfileItemSuccess,
  showProfileItemFailure,
  couponApplierSuccess,
  couponAplierFailure,
  couponSuccess,
  couponFailure
}
