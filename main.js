

let desktopNav = document.createElement("div");
desktopNav.innerHTML = `
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
let desktopNavContainer = document.querySelector(".menu-display")
    desktopNavContainer.append(desktopNav);



// Aside profile
let DesktopSideProfile = document.createElement('div')
DesktopSideProfile.innerHTML =`
            <div class="desktop-aside-profile">
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
                    <div class='email'>
                        <a  href="mailto:email@example.com"><i class="fa-solid fa-envelope" ></i></a>
                        <a> sbaedx@gmail.com</a>
                    </div>
                </div>
                <div class="profile-media">    
                    <a href="https://github.com/vegatch"><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/stravinsky-b%C3%A9n%C3%A9dict-anglade/"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                </div>
            </div>
`
let DesktopSideProfileContainer = document.querySelector(".desktop-profile-container")
DesktopSideProfileContainer.append(DesktopSideProfile)
let DesktopAsideContainer = document.querySelector('.main-container-layout')
DesktopAsideContainer.prepend(DesktopSideProfileContainer);
console.log(DesktopAsideContainer, 'Desktop version')




let mobileNav = document.createElement("div")
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
    let mobileNavContainer = document.querySelector('.mobile-display')
    mobileNavContainer.append(mobileNav);

//Aside mobile profile
let mobileAsideProfile = document.createElement('div')
mobileAsideProfile.innerHTML =`
            <div class="mobile-aside-profile">
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
let mobileAsideProfileContainer = document.querySelector(".mobile-profile-container")
mobileAsideProfileContainer.append(mobileAsideProfile)
let mobileAsideContainer = document.querySelector('.main-container-layout')
mobileAsideContainer.prepend(mobileAsideProfileContainer);
console.log(mobileAsideContainer, 'mobile version')





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







