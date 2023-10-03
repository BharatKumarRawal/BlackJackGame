let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEl = document.getElementById("card-el")
let PlayerEl = document.getElementById("player-el")

let player = {
    name: "Bharat",
    chips: 145
}
PlayerEl.textContent = player.name +": " + "$" + player.chips;

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 
    renderGame()
}
function getRandomCard(){
    let ranNum = Math.floor(Math.random()*13) + 1;
    if (ranNum===1){
        return 11;
    }
    else if( ranNum > 10){
        return 10;
    }
    else{
        return ranNum
    }
   
}

function renderGame(){
    cardsEl.textContent = "Card: "
    for( let i = 0; i< cards.length; i++){
         cardsEl.textContent += cards[i] + " "
    }
    
    sumEL.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.innerText = message
    
   
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let thirdCard = getRandomCard()
        sum = sum + thirdCard
        cards.push(thirdCard)
        renderGame()
    }
    
    
}