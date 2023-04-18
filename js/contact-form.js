

    // const msg = document.getElementById("msg")
    // const $form = document.querySelector('#form')
    // const $buttonMailto = document.querySelector('#mailtobutton')

    // $form.addEventListener('submit', handleSubmit)

    // function handleSubmit(event) {
        
    //     msg.innerHTML = "Mensaje enviado correctamente"
    //         setTimeout(function(){
    //             msg.innerHTML = ""
    //         },5000)


    //     event.preventDefault()
    //     const form = new FormData(this)
    //     console.log(form.get('name'))
    //     $buttonMailto.setAttribute('href', `mailto:leitnergaston@gmail.com?subject=${form.get('asunto')}&body=${form.get('name')} ${form.get('email')} ${form.get('message')}`)
    //     $buttonMailto.click()
    // }


    const $form = document.querySelector('#form')

    $form.addEventListener('submit', handleSubmit)

    async function handleSubmit(event) {
        event.preventDefault()
        const form = new FormData(this)
        const response = await fetch(this.action, {
            method: this.method,
            body: form,
            headers: {
                'Accept': 'application/json'
            }
        })
        if (response.ok) {
            this.reset()
            msg.innerHTML = "Mensaje Enviado"
            setTimeout(function(){
                msg.innerHTML = ""
            },4000)
        }
    }