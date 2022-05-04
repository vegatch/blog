const menuList = document.createElement('template');

menuList.innerHTML = `
    <div class="menu-display">
        <div class="mobile-container">
            <div class="nav-logo"><a href="./index.html">SBA</a></div>
            <div class="hamburger">
                <a onClick="menuToggle()">
                <i class="fa-solid fa-bars"></i>
            </a>        
            </div>
        </div>        
        <ul class="menu-container mobile">                   
            <li class="nav-item"><a href="./index.html">Home</a></li>
            <li class="nav-item"><a href="./about.html">About</a></li>
            <li class="nav-item"><a href="./work.html">Work</a></li>
            <li class="nav-item"><a href="./contact.html">Contact</a></li>
            <li class="nav-item btn-item"><a href="./resume.html">Resume</a></li>
            
        </ul>
    </div>
`;
document.getElementById('menu-display').appendChild(menuList.content);
console.log(menuList.content)

let menuToggle = function(){
    let menu = document.querySelector(".menu-container")
    if(menu.style.display === "none" ){
        menu.style.display ="block"
    }else{
        menu.style.display ="none" 
    }
}