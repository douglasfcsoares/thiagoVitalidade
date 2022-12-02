const controls = document.querySelectorAll(".control")
let currentItem = 0
const items = document.querySelectorAll(".item")
const balls = document.querySelectorAll(".ball")
const maxItems = items.length

controls.forEach(control => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrowLeft")

    if (isLeft) {
      currentItem -= 1
    } else {
      currentItem += 1
    }

    if (currentItem >= maxItems) {
      currentItem = 0
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1
    }

    items.forEach(item => item.classList.remove("current-item"))
    balls.forEach(ball => ball.classList.remove("atual"))

    items[currentItem].scrollIntoView({
     // behavior: "smooth",
      inline: "center"
    })

    items[currentItem].classList.add("current-item")
    balls[currentItem].classList.add("atual")
  })
})
