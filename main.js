let spended = document.querySelectorAll(".spended")

spended.forEach(span => {
  span.parentElement.addEventListener('click', () => {
    span.classList.toggle("hidden")
  })
})