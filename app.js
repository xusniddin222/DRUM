const buttons = document.querySelectorAll('.drum')
let audio = new Audio('./sounds/crash.mp3')

buttons.forEach(button=>{
    button.addEventListener('click', e=>{
        const textButton = button.classList[0]
        playMusic(textButton)
        animateButton(textButton)
    })
})

document.addEventListener('keydown', e=>{
    const key = e.key
    playMusic(key)
    animateButton(key)
})


function playMusic(key){
    switch (key) {
        case "w":
            audio = new Audio('./sounds/crash.mp3')
            audio.play()
            break;
        case "a":
            audio = new Audio('./sounds/kick-bass.mp3')
            audio.play()
            break;
        case "s":
            audio = new Audio('./sounds/snare.mp3')
            audio.play()
            break;
        case "d":
            audio = new Audio('./sounds/tom-1.mp3')
            audio.play()
            break;
        case "j":
            audio = new Audio('./sounds/tom-2.mp3')
            audio.play()
            break;
        case "k":
            audio = new Audio('./sounds/tom-3.mp3')
            audio.play()
            break;
        case "l":
            audio = new Audio('./sounds/tom-4.mp3')
            audio.play()
            break;
    
        default:
                console.log(key);
    }
}


function animateButton(key){
    const classBtn = document.querySelector(`.${key}`)
    classBtn.classList.add('pressed')
    setInterval(()=>{
        classBtn.classList.remove('pressed')
    }, 100)
}