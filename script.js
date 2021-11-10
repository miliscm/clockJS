
const secondHand = document.querySelector('.second-hand')
const hourHand = document.querySelector('.hour-hand')
const minutesHand = document.querySelector('.min-hand')

function setBackground(){
    fetch("https://source.unsplash.com/random/1240x1240").then((res)=>{
        let currentBackground = res.url;
        document.querySelector('html').style.background =`url(${currentBackground})`
    })
}

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
  
    const secondsDegress = ((seconds / 60) * 360)+90;
    secondHand.style.transform = `rotate(${secondsDegress}deg)`

    const minutes = now.getMinutes();
    
    const minutesDegress = ((minutes / 60) * 360)+90 ;
    minutesHand.style.transform = `rotate(${minutesDegress}deg)`;


    const hour = now.getHours();
    
    const hourDegress = ((hour / 24) * 360)+90 ;
    hourHand.style.transform = `rotate(${hourDegress}deg)`;
    if(secondsDegress >= 444){
        setBackground();
    }
  
}


setInterval(setDate, 1000)