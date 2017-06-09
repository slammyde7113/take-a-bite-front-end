'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

//  event.target must be a form element
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // initiates an HTTP request that was defined in the api module as singUp
  api.signUp(data) // passing the credentials to the ajax call
    .then(ui.signUpSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  // prefer event.target over this
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // initiates an HTTP request that was defined in the api module as singUp
  api.signIn(data) // passing the credentials to the ajax call
    .then(ui.signInSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  // prefer event.target over this
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // initiates an HTTP request that was defined in the api module as singUp
  api.changePassword(data) // passing the credentials to the ajax call
    .then(ui.changePasswordSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.changePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  console.log('signed out')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-pass').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
