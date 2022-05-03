const template = document.createElement('template');

template.innerHTML = `
    <div class="menu-display">
        <div class="nav-logo"><a href="./index.html">SBA</a></div>
        <ul class="menu-container">                   
            <li class="nav-item"><a href="./index.html">Home</a></li>
            <li class="nav-item"><a href="./about.html">About</a></li>
            <li class="nav-item"><a href="./work.html">Work</a></li>
            <li class="nav-item btn-item"><a href="./resume.html">Resume</a></li>
        </ul>
    </div>
`;
document.getElementById('menu-display').appendChild(template.content);



(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init("XhKv7nyqdxTaERRBm");
})();
   
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                    console.log('FAILED...', error);
                });
            });
        }


    var templateParams = {
    name: 'Dude',
    notes: 'Check this out!'
};
 
emailjs.send('yvecKa1979', 'template_1xqzy6o', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

emailjs.sendForm('yvecKa1979', 'template_1xqzy6o', '#myForm')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });