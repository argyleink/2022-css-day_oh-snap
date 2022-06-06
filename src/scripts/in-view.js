let ioCallback = nodes => {
  for (let node of nodes)
    node.target.classList
      .toggle('in-view', node.isIntersecting)
}

const observeInView = scrollport => {
  const scrollitems = scrollport.querySelectorAll(':scope > div')

  const io = new IntersectionObserver(ioCallback, { 
    root: scrollport,
  })

  for (let item of scrollitems)
    io.observe(item)
}

Array.from(document.querySelectorAll('.observe-in-view'))
  .forEach(scrollport => {
    observeInView(scrollport)
  })