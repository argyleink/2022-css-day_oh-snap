const bot = document.querySelector('#bot-text')
const author = document.querySelector('.chat-authoring')
const scrollview = document.querySelector('.chat-scrollview')
const messagelist = document.querySelector('.chat-messagelist')
const bot_template = message => `
  <div class="chat-cluster">
    <div class="chat-avatar">
      <img src="https://cdn.dribbble.com/users/37530/screenshots/2937858/drib_blink_bot.gif" alt="">
    </div>
    <section>
      <h3>Snap Bot</h3>
      <div class="chat-message">${message}</div>
    </section>
  </div>
`

const user_template = message => `
  <div mine class="chat-cluster">
    <section>
      <div class="chat-message">${message}</div>
    </section>
  </div>
`

scrollview.scrollTop = scrollview.scrollHeight

bot.addEventListener('keypress', e => {
  const {keyCode} = e
  
  if (keyCode === 13) {
    e.preventDefault()
    
    if (!messagelist.querySelector('.chat-cluster:last-child').hasAttribute('mine')) {
      messagelist.querySelector('.chat-cluster:last-child > section').innerHTML += `<div class="chat-message">${bot.value}</div>`
    }
    else {
      messagelist.innerHTML += bot_template(bot.value)
    }
    
    bot.value = ''
  }
})

author.addEventListener('keypress', e => {
  const {keyCode} = e
  
  if (keyCode === 13) {
    e.preventDefault()
    
    if (messagelist.querySelector('.chat-cluster:last-child').hasAttribute('mine')) {
      messagelist.querySelector('.chat-cluster:last-child > section').innerHTML += `<div class="chat-message">${author.innerHTML}</div>`
    }
    else {
      messagelist.innerHTML += user_template(author.innerHTML)
    }
    
    author.innerHTML = ''
  }
})