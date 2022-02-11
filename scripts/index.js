import { Slider } from "./Slider.mjs"

const btnPlansLeft = document.getElementById('plansLeft')
const btnPlansRight = document.getElementById('plansRight')

const plansContainer = document.querySelector('.plans-card__container')

const sliderPlans = new Slider(plansContainer, 1, 2, 110)


btnPlansLeft.addEventListener('click',()=>{
    sliderPlans.move(-1)
})

btnPlansRight.addEventListener('click',()=>{
    sliderPlans.move(1)
})
