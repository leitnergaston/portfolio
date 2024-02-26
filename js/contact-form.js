// const $form = document.querySelector('#form')

// $form.addEventListener('submit', handleSubmit)

// async function handleSubmit(event) {
//     event.preventDefault()
//     const form = new FormData(this)
//     const response = await fetch(this.action, {
//         method: this.method,
//         body: form,
//         headers: {
//             'Accept': 'application/json'
//         }
//     })
//     if (response.ok) {
//         this.reset()
//         msg.innerHTML = "✔ Mensaje Enviado"
//         setTimeout(function(){
//             msg.innerHTML = ""
//         },4000)
//     }
// }

//! FORMULARIO 2



import { Resend } from 'resend';

const resend = new Resend('re_QFJFz79o_7NGsR8Xo8VzDt2quFKVfkYco');

resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'leitnergaston@gmail.com',
    subject: 'Nuevo mensaje desde Protfolio',
    html: '<p>Mensaje enviado</p>'
});




