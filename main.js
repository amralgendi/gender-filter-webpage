window.onload = () => {
  const btn = document.querySelector('button')
  console.log(btn)

  // btn.addEventListener('click', () => {
  //   console.log(document.getElementById('2'))
  //   document.getElementById('2').scrollIntoView({ behavior: 'smooth' })
  // })

  const aNav = [...document.querySelectorAll('.nav a')]
  aNav.map((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault()

      const sectionSelected = document.getElementById(a.dataset.section)
      sectionSelected && sectionSelected.scrollIntoView({ behavior: 'smooth' })
    })
  })

  const video = document.querySelector('video')
  const hello = document.querySelector('#examples')
  hello.scrollIntoView({ behavior: 'smooth' })
  document.body.style.overflowY = 'hidden'
  video.muted = true

  video.play()
  video.addEventListener('ended', () => {
    document.body.style.overflowY = 'visible'
    document.body.scrollIntoView({ behavior: 'smooth' })
  })
}

function scrollToJustAbove(element, margin = 20) {
  let dims = element.getBoundingClientRect()
  window.scrollTo(window.scrollX, dims.top - margin)
}
