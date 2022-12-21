//make it responsive
window.addEventListener('resize', () => {
    //the form of contact section
    const contact_form = document.querySelector('#contact-form');
    const contact_text = document.querySelector('#contact-text')

    if (contact_form.parentElement.clientWidth - 350 < 300){
        contact_form.style.width = '100%';
        contact_text.style.maxWidth = 'unset';
        contact_text.style.height = 'unset';
        contact_text.style.display = 'unset';
    }
    else{
        contact_text.style.maxWidth = '';
        contact_text.style.display = '';
        contact_text.style.height = '';
        contact_form.style.width = '';
    }
});

function send_message(form){
    fetch(`https://lucayan.pythonanywhere.com/send_message/`, {
        method: "post",
        mode: 'no-cors',
        body: JSON.stringify({
            name: form.children.name.value,
            email: form.children.email.value,
            subject: form.children.subject.value,
            message:form.children.message.value,
        })
    })
    .then(data => { 
        alert('Message sent successfully, thank you for your message. I will reply as soon as possible (make sure that the email is correct, otherwise I cannot reply)');
        location.reload()
    });
}