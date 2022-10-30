// NOTICE!!! Initially embedded in ourdocumentationthis JavaScript
// file contains elements that can help you create reproducible
// use cases in StackBlitz for instance.
// In a real project please adapt this content to your needs.
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for ndb-uikit'sdocumentation(https://getndb-uikit.com/)
 * Copyright 2011-2022 The ndb-uikit Authors
 * Copyright 2011-2022 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

/* global ndb-uikit: false */

(() => {
  'use strict'

  // --------
  // Tooltips
  // --------
  // Instantiate all tooltips in adocumentationor StackBlitz page
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(tooltip => {
      new NdbUikit.Tooltip(tooltip)
    })

  // --------
  // Popovers
  // --------
  // Instantiate all popovers in adocumentationor StackBlitz page
  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new NdbUikit.Popover(popover)
    })

  // -------------------------------
  // Toasts
  // -------------------------------
  // Used by 'Placement' example indocumentationor StackBlitz
  const toastPlacement = document.getElementById('toastPlacement')
  if (toastPlacement) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!toastPlacement.dataset.originalClass) {
        toastPlacement.dataset.originalClass = toastPlacement.className
      }

      toastPlacement.className = `${toastPlacement.dataset.originalClass} ${this.value}`
    })
  }

  // Instantiate all toasts in adocumentationpage only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new NdbUikit.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in adocumentationpage only
  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')
  if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
      const toast = new NdbUikit.Toast(toastLiveExample)

      toast.show()
    })
  }

  // -------------------------------
  // Alerts
  // -------------------------------
  // Used in 'Show live toast' example indocumentationor StackBlitz
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  const alertTrigger = document.getElementById('liveAlertBtn')

  const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
  }

  if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
      appendAlert('Nice, you triggered this alert message!', 'success')
    })
  }

  // -------------------------------
  // Checks & Radios
  // -------------------------------
  // Indeterminate checkbox example indocumentationand StackBlitz
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })

  // -------------------------------
  // Links
  // -------------------------------
  // Disable empty links indocumentationexamples only
  document.querySelectorAll('.bd-content [href="#"]')
    .forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault()
      })
    })

  // -------------------------------
  // Modal
  // -------------------------------
  // Modal 'Varying modal content' example indocumentationand StackBlitz
  const exampleModal = document.getElementById('exampleModal')
  if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', event => {
      // Button that triggered the modal
      const button = event.relatedTarget
      // Extract info from data-bs-* attributes
      const recipient = button.getAttribute('data-bs-whatever')

      // Update the modal's content.
      const modalTitle = exampleModal.querySelector('.modal-title')
      const modalBodyInput = exampleModal.querySelector('.modal-body input')

      modalTitle.textContent = `New message to ${recipient}`
      modalBodyInput.value = recipient
    })
  }

  // -------------------------------
  // Offcanvas
  // -------------------------------
  // 'Offcanvas components' example indocumentationonly
  const myOffcanvas = document.querySelectorAll('.bd-example-offcanvas .offcanvas')
  if (myOffcanvas) {
    myOffcanvas.forEach(offcanvas => {
      offcanvas.addEventListener('show.bs.offcanvas', event => {
        event.preventDefault()
      }, false)
    })
  }
})()
