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