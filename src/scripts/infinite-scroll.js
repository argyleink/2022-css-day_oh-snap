const scrollport = document.querySelector('.infinite-scroll')
const scrollitems = document.querySelectorAll('.infinite-scroll > div')

const io = new IntersectionObserver(nodes => {
  const [active] = nodes.filter(node => node.isIntersecting)

  if (active && active.target === active.target.parentElement.lastElementChild) {
    active.target.parentElement.firstElementChild.scrollIntoView()
  }
}, {
  root: scrollport,
  rootMargin: '1px',
  threshold: 1,
})

Array.from(scrollitems)
  .forEach(node => 
    io.observe(node))