    const scriptURL = 'https://script.google.com/macros/s/AKfycbwfcqpeOqKVdMXqEtCBkAhGuk5zgHglxCuQWbLC0PvTPsiDm9NweSPWWST00rg0MwE_/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Mensaje enviado correctamente"
            setTimeout(function(){
                msg.innerHTML = ""
            },3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })