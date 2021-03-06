'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const handlebars = require('handlebars')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const authEvents = require('./auth/events.js')

// On document ready
$(() => {
  handlebars.registerHelper('ifvalue', function (conditional, options) {
    if (conditional === options.hash.equals) {
      return options.fn(this)
    } else {
      return options.inverse(this)
    }
  })
  $('#sign-out').prop('disabled', true)
  $('#change-password').prop('disabled', true)
  $('#show-menu').prop('disabled', true)
  $('#show-profiles').prop('disabled', true)
  authEvents.addHandlers()

})
