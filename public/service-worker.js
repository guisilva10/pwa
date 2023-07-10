/* eslint-disable no-restricted-globals */

self.addEventListener('push', function(event){
  event.waitUntil(
    self.registration.showNotification('Herbert', {
      body: 'Testando...'
    })
  )
})
