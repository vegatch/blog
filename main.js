const menuList = document.createElement('template');
menuList.innerHTML = `
    <div class="menu-display">   
        <div class="desktop-container">
            <div class="nav-logo"><a href="./index.html">SBA</a></div>
            
            <ul class="menu-container">                   
                <li class="nav-item"><a href="./index.html">Home</a></li>
                <li class="nav-item"><a href="./about.html">About</a></li>
                <li class="nav-item"><a href="./work.html">Work</a></li>
                <li class="nav-item"><a href="./contact.html">Contact</a></li>
                <li class="nav-item btn-item"><a href="./resume.html">Resume</a></li>            
            </ul>
        </div> 
    </div>
`;
document.querySelector('.menu-display').appendChild(menuList.content);
console.log(menuList.content)

let mobileNav = document.createElement('template')
    mobileNav.innerHTML = `
    
    <div class="mobile-display">
        <div class="mobile-container">
            <div class="nav-logo"><a href="./index.html">SBA</a></div>
            <div class="hamburger">
                <a onClick="menuToggle()" href='#'>
                <i class="fa-solid fa-bars"></i>
            </a>        
            </div>
        </div>        
        <ul class="mobile-links" >                   
            <li class="nav-item"><a href="./index.html">Home</a></li>
            <li class="nav-item"><a href="./about.html">About</a></li>
            <li class="nav-item"><a href="./work.html">Work</a></li>
            <li class="nav-item"><a onClick="onOff()"  href="./contact.html">Contact</a></li>
            <li class="nav-item btn-item"><a href="./resume.html">Resume</a></li>            
        </ul>
    </div>
    
    `;
    document.querySelector('.mobile-display').appendChild(mobileNav.content);

let sideProfile = document.createElement('div')
sideProfile.innerHTML =`
            <div class="profile-container">
                <figure class="img-container">
                    <img class="profile-image" src="./pics/ben_new.jpg" alt="me">                    
                </figure>                
                <div class="profile-name">
                    <div>                        
                        <p>Stravinsky Bénédict Anglade</p>                        
                    </div>      
                    <div>
                        <p>Software Engineer</p>
                    </div>              
                </div>
                <div class="profile-contact">
                    <a href="tel:+1-786-247-2127"><i class="fa-solid fa-phone"> (786) 247-2127</i></a>
                    <a  href="mailto:email@example.com"><i class="fa-solid fa-envelope" > sbaedx@gmail.com</i></a>
                </div>
                <div class="profile-media">    
                    <a href="https://github.com/vegatch"><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/stravinsky-b%C3%A9n%C3%A9dict-anglade/"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                </div>
            </div>
`
let divContainer = document.querySelector('.main-container-layout')
divContainer.prepend(sideProfile);

let myfooter = document.createElement("div");
myfooter.innerHTML=`
        <div class="footer-container">
            <div>
                <p>Designed and built by Stravinsky B Anglade</p>
            </div>
            <div>
                <p> May 2022</p>
            </div>
        </div>
`
let footerContainer = document.querySelector(".my-footer")
footerContainer.append(myfooter);

let menuToggle = function(){
    let menu = document.querySelector(".mobile-links")
    if(menu.style.display === "none" ){
        menu.style.display ="block" 
               
    }else{
        menu.style.display ="none" 
    }
}


let resetForm = function(){
    let clearForm = document.querySelector("#contact-form");
    clearForm.reset();
               
}
resetForm();