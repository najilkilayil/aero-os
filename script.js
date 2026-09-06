
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

        bringToFront(element)
        
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

let overviewIcon = document.getElementById("icon_1")
let overviewSection = document.getElementById("overview")
let overviewClose = document.getElementById("overview_close_icon")

dragElement(welcomeSection)
dragElement(overviewSection)

function openWindow(element) {
    element.style.display = "block"
}

function closeWindow(element) {
    element.id = "fade_out_anim"
    setTimeout(() => {
        element.style.display = "none"
    }, 1200);
}

let highesZIndex = 1000
function bringToFront(element) {
    highesZIndex++
    element.style.zIndex = highesZIndex
}

let windowOffset = 0
function createWindows(tem) {
    let newWindows = tem.cloneNode(true)

    newWindows.id = tem.id + "_" + Date.now()
    document.body.appendChild(newWindows)
    newWindows.style.display = "block"
    
    windowOffset += 30
    if (windowOffset > 180) {
        windowOffset = 0
    }
    
    newWindows.style.top = `calc(50% + ${windowOffset}px)`
    newWindows.style.left = `calc(50% + ${windowOffset}px)`
    newWindows.style.transform = "translate(-50%, -50%)"

    dragElement(newWindows)

    let closeIcon = newWindows.querySelector(".close_icon")
    if (closeIcon) {
        closeIcon.addEventListener("click", function() {
            closeWindow(newWindows)
        })
    }

    return newWindows
}

overviewIcon.addEventListener("click", function() {
    createWindows(overviewSection)
})

// overviewClose.addEventListener("click", function() {
//     closeWindow(overviewSection)
// })

let departureFlights = [
    {
        flight: "AI203",
        destination: "Tokyo",
        gate: "A12",
        time: "17:20",
        icon: `<div id="status_green" class="status"></div>`,
        status: "BOARDING"
    },
    {
        flight: "EK521",
        destination: "Dubai",
        gate: "B07",
        time: "18:05",
        icon: `<div id="status_green" class="status"></div>`,
        status: "ON TIME"
    },
    {
        flight: "6E742",
        destination: "Mumbai",
        gate: "C03",
        time: "18:30",
        icon: `<div id="status_blue" class="status"></div>`,
        status: "DELAYED"
    },
    {
        flight: "QR517",
        destination: "Doha",
        gate: "A08",
        time: "19:10",
        icon: `<div id="status_green" class="status"></div>`,
        status: "ON TIME"
    },
    {
        flight: "BA142",
        destination: "London",
        gate: "D14",
        time: "19:45",
        icon: `<div id="status_yellow" class="status"></div>`,
        status: "FINAL CALL"
    },
    {
        flight: "SQ424",
        destination: "Singapore",
        gate: "B11",
        time: "20:15",
        icon: `<div id="status_green" class="status"></div>`,
        status: "ON TIME"
    },
    {
        flight: "AI672",
        destination: "Delhi",
        gate: "C09",
        time: "20:40",
        icon: `<div id="status_blue" class="status"></div>`,
        status: "DELAYED"
    },
    {
        flight: "EY273",
        destination: "Abu Dhabi",
        gate: "A05",
        time: "21:05",
        icon: `<div id="status_green" class="status"></div>`,
        status: "BOARDING"
    },
    {
        flight: "LH759",
        destination: "Frankfurt",
        gate: "D06",
        time: "21:35",
        icon: `<div id="status_red" class="status"></div>`,
        status: "CANCELLED"
    },
    {
        flight: "6E318",
        destination: "Bengaluru",
        gate: "C15",
        time: "22:00",
        icon: `<div id="status_grey" class="status"></div>`,
        status: "SCHEDULED"
    }
]

function loadFlightTable(data, tableBody) {
    tableBody.innerHTML = ""
    
    data.forEach(flight => {
        tableBody.innerHTML += `
            <tr>
                <td>${flight.flight}</td>
                <td>${flight.destination}</td>
                <td>${flight.gate}</td>
                <td>${flight.time}</td>
                <td>${flight.icon}</td>
                <td>${flight.status}</td>
        `
    });
}

let departureTableBody = document.getElementById("departure_table_body")

loadFlightTable(departureFlights, departureTableBody)