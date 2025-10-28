// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})

// Add hover effects to project buttons
document.querySelectorAll(".project-button").forEach((button) => {
  button.addEventListener("click", function () {
    console.log("Project button clicked:", this.parentElement.querySelector(".project-title").textContent)
    // You can add navigation logic here
  })
})

// Add hover effects to play buttons
document.querySelectorAll(".play-button").forEach((button) => {
  button.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.1)"
  })

  button.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)"
  })
})

// Log when page is fully loaded
window.addEventListener("load", () => {
  console.log("Portfolio page loaded successfully")
})
