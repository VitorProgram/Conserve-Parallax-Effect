const text = document.querySelector('#text')
const bird1 = document.querySelector('#bird-1')
const bird2 = document.querySelector('#bird-2')
const btn = document.querySelector('#btn')
const rocks = document.querySelector('#rocks')
const forest = document.querySelector('#forest')
const water = document.querySelector('#water')

const header = document.querySelector('#header')

window.addEventListener('scroll', () => {
    const value = window.scrollY

    text.style.top = 50 + value * -0.2 + '%'

    bird1.style.top = value * -0.7 + 'px'
    bird1.style.left = value * 2 + 'px'

    bird2.style.top = value * -1.5 + 'px'
    bird2.style.left = value * -5 + 'px'

    btn.style.marginTop = value  * 1.5 + 'px'

    rocks.style.top = value * -0.12 + 'px'

    forest.style.top = value * 0.25 + 'px'

    header.style.top = value * -0.5 + 'px'
})