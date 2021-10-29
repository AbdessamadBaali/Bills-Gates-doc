
// read more btn script
const parentContainer =  document.querySelector('.content-about');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

})

// email form

const sendFeedback = (emailjs, serviceID, templateId, variables, userId) => {
    emailjs.send(serviceID, templateId, variables, userId).then(res => {
        console.log('Email successfully sent!')
    })
        .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
}
$("form-contact").submit((e) => {
    e.preventDefault()

    const name = e.target[0].value
    const email = e.target[1].value
    const message = e.target[2].value

    alert(`Thank you for your message from ${email}`);
    const templateId = 'template_ga13ufz';
    const serviceID = 'service_6yqhq29';
    const userId = "user_6uDwTYCySYHyDYjqRGDnu"
    const data = { from_name: name, message, from_email: email, to_name: 'omar' }
    import('emailjs-com').then(emailjs => sendFeedback(emailjs, serviceID, templateId, data, userId))
    
})