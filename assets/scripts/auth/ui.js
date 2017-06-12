'use strict'
const showMenuTemplate = require('../templates/menu-list.handlebars')
const showProfilesTemplate = require('../templates/profiles-list.handlebars')

// const createButton = function (destination) {
//   const $addToProfile = $('<input class="profile-input" type="button" value="Add to Profile"/>')
//   $addToProfile.appendTo($(`${destination}`))
// }
const modalTitleChange = function (title, condition) {
  const result = title
  if (condition) {
    $('.modal-title').html(`${result} SUCCESS`)
  } else {
    $('.modal-title').html(`${result} FAILED. CHECK USER PROMPT FOR DETAILS`)
  }
  setTimeout(function () {
    $('.modal-title').html(result)
  }, 2000)
}

const signUpSuccess = (data) => {
  console.log(data)
  $('#prompt').text('You Have Signed Up')
  modalTitleChange('Sign Up', true)
}

const signUpFailure = (error) => {
  console.log(error)
  $('#prompt').text('Sign up Failed. Please Try Another Username Or Make Sure Your Username And Password Match')
  modalTitleChange('Sign Up', false)
}
const signInSuccess = (data) => {
  console.log(data)
  $('#prompt').text('You Are Signed In! Ready To Play!')
  modalTitleChange('Sign In', true)
  $('#sign-out').prop('disabled', false)
  $('#change-password').prop('disabled', false)
}

const signInFailure = (error) => {
  console.log(error)
  $('#prompt').text('Sign In Failed. Please Make Sure You Have Double Checked Your Credentials And That You Have Correctly Signed Up')
  modalTitleChange('Sign In', false)
}
const changePasswordSuccess = (data) => {
  console.log(data)
  $('#prompt').text('Password Changed')
  modalTitleChange('Change Password', true)
}

const changePasswordFailure = (error) => {
  console.log(error)
  $('#prompt').text('Password Change Failed')
  modalTitleChange('Change Password', false)
}
const signOutSuccess = (data) => {
  console.log(data)
  $('#prompt').text('Signout Successful')
  $('#sign-out').prop('disabled', true)
  $('#change-password').prop('disabled', true)
}

const signOutFailure = (error) => {
  console.log(error)
  $('#prompt').text('Signout Unsuccessful')
  modalTitleChange('Sign Out', false)
}
const showMenuSuccess = (data) => {
  console.log(data)
  $('.content').empty()
  const showMenuHtml = showMenuTemplate({ menu_item: data.menu_items })
  $('.content').append(showMenuHtml)
}
const showMenuFailure = (error) => {
  console.log(error)
  $('#prompt').text('Show Menu Failure')
}
const createProfileSuccess = () => {
  console.log('cool')
  $('#prompt').text('Create Profile Successful')
}
const createProfileFailure = () => {
  console.log('not cool')
  $('#prompt').text('Create Profile Failure')
}
const showProfilesSuccess = (data) => {
  console.log('woohoo')
  console.log(data)
  $('.content').empty()
  const showProfilesHtml = showProfilesTemplate({ profile: data.profiles })
  $('.content').append(showProfilesHtml)
  $('#prompt').text('Show Profiles Successful')
}
const showProfilesFailure = () => {
  console.log(':()')
  $('#prompt').text('Show Profiles Failure')
}
const deleteProfileSuccess = (data) => {
  console.log('hoo')
  console.log(data)
  $('#prompt').text('Delete Profiles Successful')
}
const showProfileItemSuccess = (data) => {
  console.log(data)
  $('.content').empty()
  const showMenuHtml = showMenuTemplate({ menu_item: data.menu_items })
  $('.content').append(showMenuHtml)
  $('#prompt').text('Show Item Successful')
}
const showProfileItemFailure = (error) => {
  console.log(error)
  $('#prompt').text('Show Item Failure')
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
  showProfileItemFailure
}
