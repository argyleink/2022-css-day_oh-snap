const snapcontainer = document.querySelector('#smart-container')

let last_scroll = 0

function determineSnapped(e) {
  if (!e || e?.target.scrollLeft === last_scroll) return
  last_scroll = e.target.scrollLeft

  let viewportwidth = window.innerWidth
  snapcontainer.style.gap = '100vw'
  snapcontainer.getBoundingClientRect()

  Array.from(snapcontainer.children).forEach(child => {
    let {left} = child.getBoundingClientRect()
    child.classList.toggle('snapped', left > 0 && left < viewportwidth)
  })

  snapcontainer.style.gap = null
}

snapcontainer.addEventListener('scroll', e => {
  clearTimeout(snapcontainer.scrollEndTimer)               
  snapcontainer.scrollEndTimer = setTimeout(() => {
    determineSnapped(e)
  }, 100)
})