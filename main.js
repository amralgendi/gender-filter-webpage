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
  document.body.style.overflowY = 'hidden'
  hello.scrollIntoView({ behavior: 'smooth' })
  video.muted = true
  document.querySelector('.play-pause button').style.visibility = 'hidden'
  video.play()
  video.addEventListener('ended', () => {
    document.body.style.overflowY = 'visible'
    if (
      (document.querySelector('.play-pause button').style.visibility = 'hidden')
    ) {
      document.body.scrollIntoView({ behavior: 'smooth' })
    }
    document.querySelector('.play-pause button').style.visibility = 'visible'

    document.querySelector('.play-pause button').innerHTML = 'play'
  })

  const button = document.querySelector('.play-pause button')

  console.log(button)

  button.addEventListener('click', () => {
    console.log('clicked')
    if (button.innerHTML == 'play') {
      document.querySelector('video').play()
      button.innerHTML = 'pause'
    } else if (button.innerHTML == 'pause') {
      document.querySelector('video').pause()
      button.innerHTML = 'play'
    }
  })
}

function scrollToJustAbove(element, margin = 20) {
  let dims = element.getBoundingClientRect()
  window.scrollTo(window.scrollX, dims.top - margin)
}
