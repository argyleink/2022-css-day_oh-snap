let i = 1

document.querySelector('#snap-to-next').addEventListener('click', e => {
  e.target.parentElement.parentElement
    .querySelector(`slyd-scrollport > div:nth-child(${++i})`)
    .scrollIntoView({behavior: 'smooth', inline: 'center'})
})

document.querySelector('#snap-to-prev').addEventListener('click', e => {
  e.target.parentElement.parentElement
    .querySelector(`slyd-scrollport > div:nth-child(${--i})`)
    .scrollIntoView({behavior: 'smooth', inline: 'center'})
})