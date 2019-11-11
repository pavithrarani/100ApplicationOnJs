/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore ,dice,isGamePlaying,prevDiceVal;

init();

/*var player1 = {
    
    acitvePlayer : 1,
    roundScore : 0,
    roundScore  : 0
};

var player2 = {
    
    acitvePlayer : 0,
    score : 0,
    roundScore : 0
}
*/

dice = Math.floor(Math.random() * 6) +1;
//console.log(dice);



var x = document.querySelector("#score-0").textContent;
console.log(x);



/*function btn()
{
    //do something here
}
btn();
document.querySelector('.btn-roll').addEventListener('click',btn); //callback function */




document.querySelector('.btn-roll').addEventListener('click',function(){
    //Anonomyous function here
    //1.random no
    if(isGamePlaying)
        {
   var dice = Math.floor(Math.random() * 6) +1;
    
    //2. display result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    
    diceDOM.src = 'dice-' + dice + '.png';
   
    console.log('prevDiceVal & dice-' +prevDiceVal, dice);
    //3.update the round score IF the rolled no is not a 1
    
    if( (prevDiceVal === 6) && (dice === 6))
            {
                //looses his entire score
                console.log('inside loop' +prevDiceVal, dice);
                 console.log('activePlayer' +activePlayer);
                scores[activePlayer] = 0;
                nextPlayer();
                
            }
    else if(dice !== 1)
        {
            //add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            prevDiceVal = dice;
            
        } 
            else{
            //next player
          nextPlayer();
        }
}
     
  
}); 


document.querySelector('.btn-hold').addEventListener('click', function(){
    //add current score to global score
    if(isGamePlaying)
        {
            scores[activePlayer] += roundScore;


            //update the UI
           document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            
            var target = document.getElementById("winningScore").nodeValue;
            
            console.log('target'+target);
            //check if player won the game
            if(scores[activePlayer] >= target)
                {
                    document.querySelector('#name-'+ activePlayer).textContent ='Winner!';
                    document.querySelector('.dice').style.display = 'none';
                    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                     document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
                    isGamePlaying = false ;
                }
            else{

                    //next player
            nextPlayer();
            }
        }
});


//DRY

function nextPlayer()
{
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
           roundScore =0;
            
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
            
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            
            //document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('.player-1-panel').classList.add('active');
            
            document.querySelector('.dice').style.display = "none";
    
}


document.querySelector('.btn-new').addEventListener('click', init);
                                              
    


function init()
{
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    isGamePlaying = true;
    document.querySelector('.dice').style.display= 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    
    document.querySelector('#name-0').textContent ='Player 1';
    document.querySelector('#name-1').textContent ='Player 2';
    
    document.querySelector('.player-0-panel' ).classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
    
    }



