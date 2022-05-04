
// Function from emailjs to send email from 

 (function() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init('XhKv7nyqdxTaERRBm');
        })();
    
        window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // generate a five digit number for the contact_number variable
                this.contact_number.value = Math.random() * 100000 | 0;
                // these IDs from the previous steps
                emailjs.sendForm('service_3yjgpu2', 'template_1xqzy6o', this)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
            });
        }