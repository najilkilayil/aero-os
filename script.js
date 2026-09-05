
setInterval(() => {
    updateTime()
}, 1000);

function updateTime() {
    let timeP = document.getElementById("top_nav_bar_time")
    let currentTime = new Date().toLocaleString()

    timeP.innerHTML = currentTime
}

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

dragElement(welcomeSection)

function closeWindow(element) {
    element.style.display = "none"
}

let welcomeClose = document.getElementById("close_icon")

welcomeClose.addEventListener("click" , function() {
    closeWindow(welcome)
})