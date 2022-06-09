const ptr_scrollport = document.querySelector('.pull-to-refresh')
const ptr = document.querySelector('#refresh')
const main = document.querySelector('#refresh-main')

const determinePTR = event => {
  if (event.target.scrollTop === 0) {
    // fetch()
    ptr.querySelector('span').textContent = 'refreshing...'
    ptr.setAttribute('loading-state', 'loading')
    
    // sim response
    setTimeout(() => {
      ptr.querySelector('span').textContent = 'Pull to refresh'
      ptr.removeAttribute('loading-state')
      main.scrollIntoView({ behavior: 'smooth', block: "nearest" })
      // todo: on scroll complete, set text
    }, 2000)
  }
}

ptr_scrollport.addEventListener('scroll', e => {
  clearTimeout(ptr_scrollport.scrollEndTimer)               
  ptr_scrollport.scrollEndTimer = setTimeout(() => {
    determinePTR(e)
  }, 100)
})

const ptr_timeline = new ScrollTimeline({
  scrollSource: ptr_scrollport,
  orientation: 'block',
  fill: 'both',
  startScrollOffset: {
    target: ptr, 
    edge: 'start', 
    threshold: 1 
  },
  endScrollOffset: {
    target: ptr, 
    edge: 'start', 
    threshold: .8
  },
})

document.querySelector('#refresh > svg').animate(
  { 
    transform: ['rotateZ(0)', 'rotateZ(.5turn)'],
  },
  { 
    duration: 1000,
    fill: 'both',
    timeline: ptr_timeline
  }
)

document.querySelector('#refresh > span').animate(
  { 
    opacity: ['1', '0'],
  },
  { 
    duration: 1000,
    fill: 'both',
    timeline: ptr_timeline
  }
)