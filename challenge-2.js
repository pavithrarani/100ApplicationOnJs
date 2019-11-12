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


dice = Math.floor(Math.random() * 6) +1;
//console.log(dice);


document.querySelector('.btn-roll').addEventListener('click',function(){
    //Anonomyous function here
    //1.random no
    if(isGamePlaying)
        {
   var dice1 = Math.floor(Math.random() * 6) +1;
   var dice2 = Math.floor(Math.random() * 6) +1; 
    //2. display result
   // var diceDOM = document.querySelector('.dice');
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
            
            
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';        
 //   diceDOM.style.display = 'block';
    
  // diceDOM.src = 'dice-' + dice + '.png';
   
    console.log('prevDiceVal & dice-' +prevDiceVal, dice);
    //3.update the round score IF the rolled no is not a 1
    
    
   if(dice1 !== 1 && dice2 !== 1)
        {
            //add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
           
            
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
            
            
            var target = document.querySelector('.winningScore').value;
            console.log('target'+target);
              var winningScore;
            //if its undefined,0,null
            if(target)
                {
                  winningScore = target;
                }
            else{
                winningScore =100;
            }
            //check if player won the game
            if(scores[activePlayer] >= winningScore)
                {
                    document.querySelector('#name-'+ activePlayer).textContent ='Winner!';
                    document.getElementById('dice-1').style.display = 'none';
                    document.getElementById('dice-2').style.display = 'none';
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
            
            document.getElementById('dice-1').style.display = "none";
            document.getElementById('dice-2').style.display = "none";
    
}


document.querySelector('.btn-new').addEventListener('click', init);
                                              
    


function init()
{
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    isGamePlaying = true;
    document.getElementById('dice-1').style.display= 'none';
    document.getElementById('dice-2').style.display= 'none';
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



