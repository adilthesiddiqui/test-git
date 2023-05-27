let player = {
    score:100 
}
let cardsarray = [] // array of cards
let hasblackjack = false;
let isalive = false;
let  sum = 0 ;

    let cardsEL = document.getElementById("cards-el");
    let scoreEl = document.getElementById("score-el");
    let sumEL = document.getElementById("sum-el");
    let messageEL = document.getElementById("messag-el");

        // function to get random number 
        function getrandom(){
            let randomnumber =  Math.floor(Math.random() *13);
            console.log(randomnumber);
            if( randomnumber> 10){
                return 11;
            }
            else if( randomnumber ===1){
                return 11;
            }
            else{
                return randomnumber;
            }
        }




    function startgame(){
        isalive = true;
        let firstcard = getrandom();
        let secondcard = getrandom();
        sum = firstcard + secondcard;
        cardsarray = [firstcard, secondcard];
        renderGames();
    }
    function renderGames(){
        let message = "";
        console.log(sum);
        if(sum <= 20){
        message = "Do you want to draw new card 🤔";
        }
        else if( sum === 21){
            message = "You have black jack!! 🙌";
            hasblackjack = true;
            scoreEl.innerText = player.score;
        }
        else {
            message= "You have lost 😭";
            isalive = false;
        }
        messageEL.innerText = message;
        sumEL.innerText = "Sum: " + sum; 
        cardsEL.innerText = "Cards: " ;
        // scoreEl.innerText = player.score;
        for(let count=0; count <cardsarray.length ; count++){
            cardsEL.innerText += " "+ cardsarray[count] + " " ;
        }  
        console.log(message);
        console.log(hasblackjack);
    }

    function newCards(){
        if(isalive === true && hasblackjack ===false){
            console.log("Drawing new Cards");

            let card = getrandom();

            cardsarray.push(card);

            sum += card;
            renderGames();
        }
    }
    function retry() {
        cardsarray = [];
        hasblackjack = false;
        isalive = false;
        sum = 0;
        messageEL.innerText = "Want to play a round?";
        cardsEL.innerText = "Cards:";
        sumEL.innerText = "Sum:";
        scoreEl.innerText= "0";
      }
      
