const btnB = document.querySelector('.btnBack_js')
const btnS = document.querySelector('.btnStraight_js')
const slider = document.querySelector('.slider')
let offset = 0

function autoMove(){

    slider.style.transition = 'all 1s ease 0s'
    slider.style.left = offset+'px'

}

btnS.addEventListener('click', function(){
    clearInterval(time)
    offset -= 500
    console.log(offset)
    if (offset < -1000){
        setTimeout(function(){
            slider.style.left = 0
            slider.style.transition = 'none'
            offset = 0
        }, 1000)
    }
    slider.style.transition = 'all 1s ease 0s'
    slider.style.left = offset+'px'
})

btnB.addEventListener('click', function(){
    clearInterval(time)
    offset += 500
    if (offset > 0){
        setTimeout(function(){
            offset = -1500
            slider.style.transition = '0s'
            slider.style.left = -1000+'px'
        }, 1000)
    }
    slider.style.transition = 'all 1s ease 0s'
    slider.style.left = offset+'px'

})

let time = setInterval(autoMove, 1400)






