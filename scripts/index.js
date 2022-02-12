import { Slider } from "./Slider.mjs"

const btnPlansLeft = document.getElementById('plansLeft')
const btnPlansRight = document.getElementById('plansRight')

const btnExchangeLeft = document.getElementById('exchangeLeft')
const btnExchangeRight = document.getElementById('exchangeRight')

const plansContainer = document.querySelector('.plans-card__container')
const exchangeContainer = document.querySelector('.conteiner__tables-conteiner')


const sliderExchange = new Slider(exchangeContainer, 0, 1, 100)

btnExchangeLeft.addEventListener('click',()=>{
    sliderExchange.move(-1)
})

btnExchangeRight.addEventListener('click',()=>{
    sliderExchange.move(1)
})


const sliderPlans = new Slider(plansContainer, 1, 2, 110)

btnPlansLeft.addEventListener('click',()=>{
    sliderPlans.move(-1)
})

btnPlansRight.addEventListener('click',()=>{
    sliderPlans.move(1)
})

