const scrollport = document.querySelector('#in-view-scrollport')
const scrollitems = scrollport.querySelectorAll(':scope > div')

let ioCallback = nodes => {
  for (let node of nodes)
    node.target.classList
      .toggle('in-view', node.isIntersecting)
}

const io = new IntersectionObserver(ioCallback, { 
  root: scrollport,
})

for (let item of scrollitems)
  io.observe(item)