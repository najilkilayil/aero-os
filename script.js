
setInterval(() => {
    updateTime()
}, 1000);

function updateTime() {
    let timeP = document.getElementById("top_nav_bar_time")
    let currentTime = new Date().toLocaleString()

    timeP.innerHTML = currentTime
}

let topNavBar = document.getElementById("top_nav_bar")

topNavBar.id = "top_nav_show_anim"
topNavBar.style.width = "20%"
setTimeout(() => {
    topNavBar.id = "top_nav_full_anim"
    topNavBar.style.width = "80%"
}, 1200);

let bottomNavBarLeft = document.getElementById("bottom_nav_bar_left")
let bottomNavBarRight = document.getElementById("bottom_nav_bar_right")

function bottomNav() {
    bottomNavBarRight.style.display = "flex"
    bottomNavBarRight.id = "bottom_right_anim"
    
    bottomNavBarLeft.id = "bottom_left_anim"
    bottomNavBarLeft.innerHTML = `
        <div class="bottom_nav_texts_left" id="bottom_nav_texts_left">
            <p>Terminal 2</p>
            <p id="bottom_location_p">Delhi</p>
            <p id="bottom_weather_p">21</p>
        </div>
    `

    setTimeout(() => {
        bottomNavBarLeft.style.width = "35%"
    }, 1200);
}

setTimeout(() => {
    bottomNav()
    welcomeSection.id = "fade_out_anim"
    icon.id = "fade_in_anim"
    setTimeout(() => {
        welcomeSection.style.display = "none"
    }, 1200);
}, 3000);

function dragElement(element) {
    let initialX = 0
    let initialY = 0
    let currentX = 0
    let currentY = 0

    if (document.getElementById(element.id + "header")) {
        document.getElementById(element.id + "header").onmousedown = startDragging
    } else {
        element.onmousedown = startDragging
    }

    function startDragging(e) {
        e = e || window.event
        e.preventDefault()
        initialX = e.clientX
        initialY = e.clientY
        document.onmouseup = stopDragging
        document.onmousemove = dragElement
    }

    function dragElement(e) {
        e = e || window.event
        e.preventDefault()
        currentX = initialX - e.clientX
        currentY = initialY - e.clientY
        initialX = e.clientX    
        initialY = e.clientY
        
        element.style.top = (element.offsetTop - currentY) + "px"
        element.style.left = (element.offsetLeft - currentX) + "px"
    }

    function stopDragging() {
        document.onmouseup = null
        document.onmousemove = null
    }
}

let welcomeSection = document.getElementById("welcome")
let icon = document.querySelector(".icon")

dragElement(welcomeSection)

function closeWindow(element) {
    element.style.display = "none"
    bottomNav()
}

let welcomeClose = document.getElementById("close_icon")

welcomeClose.addEventListener("click" , function() {
    closeWindow(welcome)
})