
let resumeDiv = document.querySelector(".resume-container")
let headerDiv = document.createElement("div")
headerDiv.classList.add("header-container")
resumeDiv.append(headerDiv)

let nameTitleDiv = document.createElement("div")
nameTitleDiv.classList.add("name-div")
let nameP = document.createElement("p")
let titleP = document.createElement("p")
nameP.innerHTML = 'Stravinsky Bénédict Anglade'
titleP.innerHTML = 'Software Engineer'
nameTitleDiv.append(nameP, titleP)
headerDiv.append(nameTitleDiv)

let contactDiv = document.createElement("div")
contactDiv.classList.add("contact-div")
let addressP = document.createElement("p")
addressP.textContent = 'Indianapolis, IN 46227 (open to remote) |'
let emailP = document.createElement("p")
emailP.textContent = 'sbaedx@gmail.com |'
let phoneP = document.createElement("p")
phoneP.textContent = "(786) 247-2127"
contactDiv.append(addressP, emailP, phoneP)
headerDiv.append(contactDiv)

let resumeMediaDiv = document.createElement('div')
resumeMediaDiv.classList.add("media-container")
let LinkedINLink = document.createElement("a")
LinkedINLink.href = 'https://www.linkedin.com/in/stravinsky-b%C3%A9n%C3%A9dict-anglade/'
LinkedINLink.textContent ='LinkedIN |'
let gitHubLink = document.createElement("a")
gitHubLink.href = 'https://github.com/vegatch'
gitHubLink.textContent ='GitHub |'
let portfolioLink = document.createElement("a")
portfolioLink.href = './index.html'
portfolioLink.textContent ='Portfolio'
resumeMediaDiv.append(LinkedINLink, gitHubLink, portfolioLink)
headerDiv.append(resumeMediaDiv)

let resumeObjectiveDiv = document.createElement("div")
resumeObjectiveDiv.classList.add("objective-container")
let resumeObjectiveP = document.createElement("p")
resumeObjectiveP.innerHTML = `

Results-driven software engineer student at Kenzie Academy passionate about developing user-friendly software applications. I am very proficient in JavaScript, HTML, CSS, MS SQL SERVER, MS Reporting Services. I also have excellent problem-solving skills and ability to perform well in a team. Seeking to put my expertise at the service of a company looking for software engineers, as well as to grow and to develop my own skills as a programmer.

`
resumeObjectiveDiv.append(resumeObjectiveP)
headerDiv.append(resumeObjectiveDiv)


let resumeBodyDiv = document.createElement("div")
resumeBodyDiv.classList.add("resume-body-container")
resumeDiv.append(resumeBodyDiv)

// Education section : Begin
let educationDiv = document.createElement("div")
educationDiv.classList.add("education-container") // main div
let educationHeaderDiv = document.createElement("div")
let educationP = document.createElement("p")
educationP.classList.add("headerSection")
educationP.classList.add("text-bold")
educationP.textContent = 'EDUCATION'
educationHeaderDiv.append(educationP)

let educationFirstRowDiv = document.createElement("div")
educationFirstRowDiv.classList.add("flex-container")
let leftFirstRowDiv = document.createElement("div")
leftFirstRowDiv.classList.add("left-row")
leftFirstRowDiv.classList.add("flex-container")
let schoolNameP = document.createElement("p")
schoolNameP.classList.add("text-bold")
schoolNameP.textContent = 'Kenzie Academy from SNHU'
let schoolDetails = document.createElement("p")
schoolDetails.textContent = '| Hands-On, Project-Based Training'
schoolDetails.classList.add("text-margin")
leftFirstRowDiv.append(schoolNameP, schoolDetails)

let rightFirstRowDiv = document.createElement("div")
rightFirstRowDiv.classList.add("right-row")

let schoolLocationP = document.createElement("p")
schoolLocationP.classList.add("text-bold")
schoolLocationP.textContent = 'Indianapolis, IN (remote)'
rightFirstRowDiv.append(schoolLocationP)


let educationSecondRowDiv = document.createElement("div")
educationSecondRowDiv.classList.add("flex-container")
let leftSecondRowDiv = document.createElement("div")
leftSecondRowDiv.classList.add("left-row")
let certificateTitleDiv = document.createElement("div")
let courseTitleP = document.createElement("p")
courseTitleP.textContent = 'Front end web developer '
certificateTitleDiv.append(courseTitleP)
leftSecondRowDiv.append(certificateTitleDiv)

let rightSecondRowDiv = document.createElement("div")
rightSecondRowDiv.classList.add("right-row")

let certificateDateDiv = document.createElement("div")
let schoolYearP = document.createElement("p")
schoolYearP.textContent = 'Expected: July 2022'
certificateDateDiv.append(schoolYearP)
rightSecondRowDiv.append(certificateDateDiv)



educationFirstRowDiv.append(leftFirstRowDiv, rightFirstRowDiv)
educationSecondRowDiv.append(leftSecondRowDiv, rightSecondRowDiv)
// educationDiv.append(educationHeaderDiv, educationFirstRowDiv, educationSecondRowDiv)



let educationUl = document.createElement("ul")
educationUl.classList.add('schoolSkills')
let educationLi = document.createElement("li")
educationUl.append(educationLi)

let educationOne = document.createTextNode(" Six months front end program with deep focus on JavaScript, CSS and HTML")
let educationTwo = document.createTextNode(" During the study I have built at least an app a week")
let educationThree = document.createTextNode(" Git and GitHub have been used as version controler and access remote repository")

let achievementDivOne = document.createElement("div")
achievementDivOne.classList.add("flex-container")
let spanOne = document.createElement("span") 
spanOne.classList.add("circle")
achievementDivOne.append(spanOne)
achievementDivOne.append(educationOne)
educationUl.append(achievementDivOne)

let achievementDivTwo = document.createElement("div")
achievementDivTwo.classList.add("flex-container")
let spanTwo = document.createElement("span") 
spanTwo.classList.add("circle")
achievementDivTwo.append(spanTwo)
achievementDivTwo.append(educationTwo)
educationUl.append(achievementDivTwo)

let achievementDivThree = document.createElement("div")
achievementDivThree.classList.add("flex-container")
let spanThree = document.createElement("span") 
spanThree.classList.add("circle")
achievementDivThree.append(spanThree)
achievementDivThree.append(educationThree)
educationUl.append(achievementDivThree)


educationDiv.append(educationHeaderDiv, educationFirstRowDiv, educationSecondRowDiv, educationUl)

// Education section : End

// Skills section : Begin
let skillsDiv = document.createElement("div")
skillsDiv.classList.add("skills-container")
let skillsP = document.createElement("p")
skillsP.classList.add("headerSection", "text-bold", "top-margin")
skillsP.textContent = 'SKILLS'

let skillsDetailDiv = document.createElement("div")
let skillsTechDiv = document.createElement("div")
skillsTechDiv.classList.add("flex-container", "skills-section-container")
let skillsTechP = document.createElement("p")
skillsTechP.classList.add("text-bold")
skillsTechP.textContent ="Technical Skills:"
let skillsTechOne = document.createElement("span")
skillsTechOne.classList.add('skills-margin')
skillsTechOne.textContent ="JavaScript,"
let skillsTechTwo = document.createElement("span")
skillsTechTwo.textContent ="HTML,"
let skillsTechThree = document.createElement("span")
skillsTechThree.textContent ="CSS,"
let skillsTechFour = document.createElement("span")
skillsTechFour.textContent ="Git/GitHub,"
let skillsTechFive = document.createElement("span")
skillsTechFive.textContent ="T-SQL,"
let skillsTechSix = document.createElement("span")
skillsTechSix.textContent ="MySQL."
skillsTechDiv.append(skillsTechP, skillsTechOne, skillsTechTwo, skillsTechThree, skillsTechFour, skillsTechFive, skillsTechSix)

let skillsMarketDiv = document.createElement("div")
skillsMarketDiv.classList.add("flex-container", "skills-section-container")
let skillsMarketP = document.createElement("p")
skillsMarketP.classList.add("text-bold")
skillsMarketP.textContent ="Marketable Skills:"
let skillsMarketOne = document.createElement("span")
skillsMarketOne.classList.add('skills-margin')
skillsMarketOne.textContent ="Problem solving,"
let skillsMarketTwo = document.createElement("span")
skillsMarketTwo.textContent ="Debugging,"
let skillsMarketThree = document.createElement("span")
skillsMarketThree.textContent ="Efficiency,"
let skillsMarketFour = document.createElement("span")
skillsMarketFour.textContent ="Documentation,"
let skillsMarketFive = document.createElement("span")
skillsMarketFive.textContent ="Communication,"
let skillsMarketSix = document.createElement("span")
skillsMarketSix.textContent ="Teamwork."
skillsMarketDiv.append(skillsMarketP, skillsMarketOne, skillsMarketTwo, skillsMarketThree, skillsMarketFour, skillsMarketFive, skillsMarketSix)

skillsDetailDiv.append(skillsTechDiv, skillsMarketDiv)
skillsDiv.append(skillsP, skillsDetailDiv)
// Skills section : End


// Projects section : Begin

let projectsDiv = document.createElement("div")
projectsDiv.classList.add("section-container")

let projectSectionDiv = document.createElement("div")
// projectSectionDiv.classList.add("")
let projectSectionP = document.createElement("p")
projectSectionP.classList.add("headerSection", "text-bold", 'top-margin')
projectSectionP.textContent = 'TECHNICAL PROJECT HIGHLIGHTS'
projectSectionDiv.append(projectSectionP)

let projectsDetailDiv = document.createElement("div")
projectsDetailDiv.classList.add("flex-container")

let projectsLeftDiv = document.createElement("div")
projectsLeftDiv.classList.add("flex-container", "left-row") // to review class name ====================

let projectRoleP = document.createElement("p")
projectRoleP.classList.add("text-bold")
projectRoleP.textContent = 'Administrator'
let projectsTitle = document.createElement("p")
projectsTitle.textContent = '| Text editor'
projectsTitle.classList.add("text-margin")
let projectsTools = document.createElement("p")
projectsTools.textContent = '| HTML, CSS & JavaScript'
projectsTools.classList.add("text-margin")
projectsLeftDiv.append(projectRoleP, projectsTitle, projectsTools)

let projectRightDiv = document.createElement("div")
projectRightDiv.classList.add("right-row")
let projectDateP = document.createElement("p")
projectDateP.textContent ='May 2022'
projectRightDiv.append(projectDateP)

let projectsLocationDiv = document.createElement("div") // refer to location source codes are stored 
projectsLocationDiv.classList.add("link-comtainer")
let linkDiv = document.createElement("div")
let projectLink = document.createElement("a")
linkDiv.append(projectLink)
projectLink.href='https://github.com/KenzieAcademy-Students/datatypes-assessment-vegatch'
projectLink.textContent='https://github.com/KenzieAcademy-Students/datatypes-assessment-vegatch'
projectsLocationDiv.append(linkDiv)

let realizationOneDiv = document.createElement("div")
realizationOneDiv.classList.add("flex-container")
let spanRealizationOne = document.createElement("span") 
spanRealizationOne.classList.add("circle")
let realizationOneP = document.createElement("p")
realizationOneP.textContent = 'Writing functions to track user key pressed to return feed back to user'
realizationOneDiv.append(spanRealizationOne, realizationOneP)

let realizationTwoDiv = document.createElement("div")
realizationTwoDiv.classList.add("flex-container")
let spanRealizationTwo = document.createElement("span") 
spanRealizationTwo.classList.add("circle")
let realizationTwoP = document.createElement("p")
realizationTwoP.textContent = 'Used indexOf to track to track localisation of Waldo inside our text editor'
realizationTwoDiv.append(spanRealizationTwo, realizationTwoP)

let realizationThreeDiv = document.createElement("div")
realizationThreeDiv.classList.add("flex-container")
let spanRealizationThree = document.createElement("span") 
spanRealizationThree.classList.add("circle")
let realizationThreeP = document.createElement("p")
realizationThreeP.textContent = 'Used of an object to store functions results and to organize codebase'
realizationThreeDiv.append(spanRealizationThree, realizationThreeP)





// ======================================================================

let projectsDetailSecondDiv = document.createElement("div")
projectsDetailSecondDiv.classList.add("flex-container")

let projectNewLine = document.createElement("br")

let projectsLeftSecondDiv = document.createElement("div")
projectsLeftSecondDiv.classList.add("flex-container", "left-row") // to review class name ====================

let projectRoleSecondP = document.createElement("p")
projectRoleSecondP.classList.add("text-bold")
projectRoleSecondP.textContent = 'Administrator'
let projectsTitleSecondP = document.createElement("p")
projectsTitleSecondP.textContent = '| Roll a pair of dice'
projectsTitleSecondP.classList.add("text-margin")
let projectsToolsSecondP = document.createElement("p")
projectsToolsSecondP.textContent = '| HTML, CSS & JavaScript'
projectsToolsSecondP.classList.add("text-margin")
projectsLeftSecondDiv.append(projectRoleSecondP, projectsTitleSecondP, projectsToolsSecondP)

let projectRightSecondDiv = document.createElement("div")
projectRightSecondDiv.classList.add("right-row")
let projectDateSecondP = document.createElement("p")
projectDateSecondP.textContent ='May 2022'
projectRightSecondDiv.append(projectDateSecondP)

let projectsLocationSecondDiv = document.createElement("div") // refer to location source codes are stored 
projectsLocationSecondDiv.classList.add("link-comtainer")
let linkSecondDiv = document.createElement("div")
let projectSecondLink = document.createElement("a")
linkSecondDiv.append(projectSecondLink)
projectSecondLink.href='https://github.com/KenzieAcademy-Students/jsdom-assessment-roll-dice-vegatch'
projectSecondLink.textContent='https://github.com/KenzieAcademy-Students/jsdom-assessment-roll-dice-vegatch'
projectsLocationSecondDiv.append(linkSecondDiv)

let realizationOneSecondDiv = document.createElement("div")
realizationOneSecondDiv.classList.add("flex-container")
let spanRealizationOneSecond = document.createElement("span") 
spanRealizationOneSecond.classList.add("circle")
let realizationOneSecondP = document.createElement("p")
realizationOneSecondP.textContent = 'Creating function to guess the result of a rolling pair of dice and display result to user agent'
realizationOneSecondDiv.append(spanRealizationOneSecond, realizationOneSecondP)

let realizationTwoSecondDiv = document.createElement("div")
realizationTwoSecondDiv.classList.add("flex-container")
let spanRealizationTwoSecond = document.createElement("span") 
spanRealizationTwoSecond.classList.add("circle")
let realizationTwoSecondP = document.createElement("p")
realizationTwoSecondP.textContent = 'Create function to display sum of dice dynamically in graph each time rolled'
realizationTwoSecondDiv.append(spanRealizationTwoSecond, realizationTwoSecondP)

let realizationThreeSecondDiv = document.createElement("div")
realizationThreeSecondDiv.classList.add("flex-container")
let spanRealizationThreeSecond = document.createElement("span") 
spanRealizationThreeSecond.classList.add("circle")
let realizationThreeSecondP = document.createElement("p")
realizationThreeSecondP.textContent = 'Create function to roll pair of dice one thousand times'
realizationThreeSecondDiv.append(spanRealizationThreeSecond, realizationThreeSecondP)

// ======================================================================
projectsDetailDiv.append(projectsLeftDiv, projectRightDiv)
projectsDetailSecondDiv.append(projectsLeftSecondDiv, projectRightSecondDiv)

projectsDiv.append(projectSectionDiv, projectsDetailDiv, projectsLocationDiv, realizationOneDiv, realizationTwoDiv, realizationThreeDiv, projectNewLine, projectsDetailSecondDiv, projectsLocationSecondDiv, realizationOneSecondDiv, realizationTwoSecondDiv, realizationThreeSecondDiv)


// Projects section : End
 

// Work experience : Begin ===============================

let workDiv = document.createElement("div") // main container
let workHeaderDiv = document.createElement("div")
let workHeaderP = document.createElement("p")
workHeaderP.classList.add("headerSection", "text-bold", 'top-margin')
workHeaderP.textContent = "WORK EXPERIENCE"
workHeaderDiv.append(workHeaderP)

let workNewLine = document.createElement("br")

let firstRowOneDiv = document.createElement("div")
firstRowOneDiv.classList.add("flex-container")
let firstRowOneLeftDiv = document.createElement("div")
firstRowOneLeftDiv.classList.add("left-row")
let firstRowOneLeftP =document.createElement("p")
firstRowOneLeftP.classList.add("text-bold")
firstRowOneLeftP.textContent = 'Amazon FC'
firstRowOneLeftDiv.append(firstRowOneLeftP)

let firstRowOneRightDiv = document.createElement("div")
firstRowOneRightDiv.classList.add("right-row")
let firstRowOneRightP =document.createElement("p")
firstRowOneRightP.classList.add("text-bold")
firstRowOneRightP.textContent = 'Indianapolis, IN'
firstRowOneRightDiv.append(firstRowOneRightP)

let firstRowTwoDiv = document.createElement("div")
firstRowTwoDiv.classList.add("flex-container")
let firstRowTwoLeftDiv = document.createElement("div")
firstRowTwoLeftDiv.classList.add("left-row")
let firstRowTwoLeftP =document.createElement("p")
firstRowTwoLeftP.textContent = 'Picker'
firstRowTwoDiv.append(firstRowTwoLeftP)

let firstRowTwoRightDiv = document.createElement("div")
firstRowTwoRightDiv.classList.add("right-row")
let firstRowTwoRightP =document.createElement("p")
// firstRowTwoRightP.classList.add("text-bold")
firstRowTwoRightP.textContent = 'Sep 2020 - to date'
firstRowTwoRightDiv.append(firstRowTwoRightP)

let workRealizationOneFirstDiv = document.createElement("div")
workRealizationOneFirstDiv.classList.add("flex-container")
let spanWorkRealizationOneFirst = document.createElement("span") 
spanWorkRealizationOneFirst.classList.add("circle")
let workRealizationOneFirstP = document.createElement("p")
workRealizationOneFirstP.textContent = 'Performing six (6) sided checks on item to avoid sending incorrect to customer'
workRealizationOneFirstDiv.append(spanWorkRealizationOneFirst, workRealizationOneFirstP)

let workRealizationTwoFirstDiv = document.createElement("div")
workRealizationTwoFirstDiv.classList.add("flex-container")
let spanWorkRealizationTwoFirst = document.createElement("span") 
spanWorkRealizationTwoFirst.classList.add("circle")
let workRealizationTwoFirstP = document.createElement("p")
workRealizationTwoFirstP.textContent = 'Inspect working condition of my Order Picker to avoid possible issues or/and dowmturn'
workRealizationTwoFirstDiv.append(spanWorkRealizationTwoFirst, workRealizationTwoFirstP)

let workRealizationThreeFirstDiv = document.createElement("div")
workRealizationThreeFirstDiv.classList.add("flex-container")
let spanWorkRealizationThreeFirst = document.createElement("span") 
spanWorkRealizationThreeFirst.classList.add("circle")
let workRealizationThreeFirstP = document.createElement("p")
workRealizationThreeFirstP.textContent = 'Always read my scanner to avoid mistakes'
workRealizationThreeFirstDiv.append(spanWorkRealizationThreeFirst, workRealizationThreeFirstP)



firstRowOneDiv.append(firstRowOneLeftDiv, firstRowOneRightDiv)
firstRowTwoDiv.append(firstRowTwoLeftDiv, firstRowTwoRightDiv)



// second experience

let secondRowOneDiv = document.createElement("div")
secondRowOneDiv.classList.add("flex-container")
let secondRowOneLeftDiv = document.createElement("div")
secondRowOneLeftDiv.classList.add("left-row")
let secondRowOneLeftP =document.createElement("p")
secondRowOneLeftP.classList.add("text-bold")
secondRowOneLeftP.textContent = 'Hubler Ford Franklin'
secondRowOneLeftDiv.append(secondRowOneLeftP)

let secondRowOneRightDiv = document.createElement("div")
secondRowOneRightDiv.classList.add("right-row")
let secondRowOneRightP =document.createElement("p")
secondRowOneRightP.classList.add("text-bold")
secondRowOneRightP.textContent = 'Franklin, IN'
secondRowOneRightDiv.append(secondRowOneRightP)



let secondRowTwoDiv = document.createElement("div")
secondRowTwoDiv.classList.add("flex-container")
let secondRowTwoLeftDiv = document.createElement("div")
secondRowTwoLeftDiv.classList.add("left-row")
let secondRowTwoLeftP =document.createElement("p")
secondRowTwoLeftP.textContent = 'Salesman'
secondRowTwoLeftDiv.append(secondRowTwoLeftP)

let secondRowTwoRightDiv = document.createElement("div")
secondRowTwoRightDiv.classList.add("right-row")
let secondRowTwoRightP =document.createElement("p")
// secondRowTwoRightP.classList.add("text-bold")
secondRowTwoRightP.textContent = 'July 2021 - Dec 2021'
secondRowTwoRightDiv.append(secondRowTwoRightP)



let workRealizationOneSecondDiv = document.createElement("div")
workRealizationOneSecondDiv.classList.add("flex-container")
let spanWorkRealizationOneSecond = document.createElement("span") 
spanWorkRealizationOneSecond.classList.add("circle")
let workRealizationOneSecondP = document.createElement("p")
workRealizationOneSecondP.textContent = 'Listen carefully to customers to better understand their needs and wants'
workRealizationOneSecondDiv.append(spanWorkRealizationOneSecond, workRealizationOneSecondP)

let workRealizationTwoSecondDiv = document.createElement("div")
workRealizationTwoSecondDiv.classList.add("flex-container")
let spanWorkRealizationTwoSecond = document.createElement("span") 
spanWorkRealizationTwoSecond.classList.add("circle")
let workRealizationTwoSecondP = document.createElement("p")
workRealizationTwoSecondP.textContent = 'Work with finance team to get customers approved for car loan'
workRealizationTwoSecondDiv.append(spanWorkRealizationTwoSecond, workRealizationTwoSecondP)

let workRealizationThreeSecondDiv = document.createElement("div")
workRealizationThreeSecondDiv.classList.add("flex-container")
let spanWorkRealizationThreeSecond = document.createElement("span") 
spanWorkRealizationThreeSecond.classList.add("circle")
let workRealizationThreeSecondP = document.createElement("p")
workRealizationThreeSecondP.textContent = 'Contact customers by phone or email to achieve monthly sales goals'
workRealizationThreeSecondDiv.append(spanWorkRealizationThreeSecond, workRealizationThreeSecondP)



secondRowOneDiv.append(secondRowOneLeftDiv, secondRowOneRightDiv)
secondRowTwoDiv.append(secondRowTwoLeftDiv, secondRowTwoRightDiv)

// second experience

workDiv.append(workHeaderDiv, firstRowOneDiv, firstRowTwoDiv, workRealizationOneFirstDiv, workRealizationTwoFirstDiv, workRealizationThreeFirstDiv, workNewLine, secondRowOneDiv, secondRowTwoDiv, workRealizationOneSecondDiv, workRealizationTwoSecondDiv, workRealizationThreeSecondDiv)


// Work experience : End ===============================





// Additional Work experience : Begin =====================
let workAdditionalDiv = document.createElement("div") // main container
let workHeaderAdditionalDiv = document.createElement("div")
let workHeaderAddP = document.createElement("p")
workHeaderAddP.classList.add("headerSection", "text-bold", 'top-margin')
workHeaderAddP.textContent = "ADDITIONAL EXPERIENCE"
workHeaderAdditionalDiv.append(workHeaderAddP)

// let workNewLine = document.createElement("br")

let additionalRowOneDiv = document.createElement("div")
additionalRowOneDiv.classList.add("flex-container")
let additionalRowLeftDiv = document.createElement("div")
additionalRowLeftDiv.classList.add("left-row")
let additionalRowLeftP =document.createElement("p")
additionalRowLeftP.classList.add("text-bold")
additionalRowLeftP.textContent = 'Les Centres Gheskio'
additionalRowLeftDiv.append(additionalRowLeftP)

let additionalRowRightDiv = document.createElement("div")
additionalRowRightDiv.classList.add("right-row")
let additionalRowRightP =document.createElement("p")
additionalRowRightP.classList.add("text-bold")
additionalRowRightP.textContent = 'Port-au-Prince, Haiti'
additionalRowRightDiv.append(additionalRowRightP)

let additionalRowTwoDiv = document.createElement("div")
additionalRowTwoDiv.classList.add("flex-container")
let additionalRowTwoLeftDiv = document.createElement("div")
additionalRowTwoLeftDiv.classList.add("left-row")
let additionalRowTwoLeftP =document.createElement("p")
additionalRowTwoLeftP.textContent = 'Database manager'
additionalRowTwoLeftDiv.append(additionalRowTwoLeftP)

let additionalRowTwoRightDiv = document.createElement("div")
additionalRowTwoRightDiv.classList.add("right-row")
let additionalRowTwoRightP =document.createElement("p")
// firstRowTwoRightP.classList.add("text-bold")
additionalRowTwoRightP.textContent = 'Mar 2008 - May 2018'
additionalRowTwoRightDiv.append(additionalRowTwoRightP)

let additionalWorkRealizationOneDiv = document.createElement("div")
additionalWorkRealizationOneDiv.classList.add("flex-container")
let spanAdditionalWorkRealizationOne = document.createElement("span") 
spanAdditionalWorkRealizationOne.classList.add("circle")
let additionalWorkRealizationOneP = document.createElement("p")
additionalWorkRealizationOneP.textContent = 'Create MS Access program to store patient\'s data to analyze monthly.'
additionalWorkRealizationOneDiv.append(spanAdditionalWorkRealizationOne, additionalWorkRealizationOneP)

let additionalWorkRealizationTwoDiv = document.createElement("div")
additionalWorkRealizationTwoDiv.classList.add("flex-container")
let spanAdditionalWorkRealizationTwo = document.createElement("span") 
spanAdditionalWorkRealizationTwo.classList.add("circle")
let additionalWorkRealizationTwoP = document.createElement("p")
additionalWorkRealizationTwoP.textContent = 'Use SSRS to make patient\'s data dynamic and available in point in time.'
additionalWorkRealizationTwoDiv.append(spanAdditionalWorkRealizationTwo, additionalWorkRealizationTwoP)



additionalRowOneDiv.append(additionalRowLeftDiv, additionalRowRightDiv)
additionalRowTwoDiv.append(additionalRowTwoLeftDiv, additionalRowTwoRightDiv)

// second experience

workAdditionalDiv.append(workHeaderAdditionalDiv, additionalRowOneDiv, additionalRowTwoDiv, additionalWorkRealizationOneDiv, additionalWorkRealizationTwoDiv)

// Additional Work experience : End =====================
resumeBodyDiv.append(educationDiv, skillsDiv, projectsDiv, workDiv, workAdditionalDiv)

