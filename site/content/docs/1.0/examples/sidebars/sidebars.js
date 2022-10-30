/* global ndb-uikit: false */
(() => {
  'use strict'
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new NdbUikit.Tooltip(tooltipTriggerEl)
  })
})()
