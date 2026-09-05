
setInterval(() => {
    updateTime()
}, 1000);

function updateTime() {
    let timeP = document.getElementById("top_nav_bar_time")
    let currentTime = new Date().toLocaleString()

    timeP.innerHTML = currentTime
}
