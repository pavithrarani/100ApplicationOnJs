/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
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
    
    if( (prevDiceVal === 6) && (dice === 6))
            {
                //looses his entire score
                console.log('inside loop' +prevDiceVal, dice);
                console.log('activePlayer' +activePlayer);
                scores[activePlayer] = 0;
                document.querySelector('#score-' + activePlayer).textContent = 0;
                nextPlayer();
                
            }
    else if(dice !== 1)
        {
            //add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
           
            
        } 
            else{
            //next player
          nextPlayer();
        }
        prevDiceVal = dice;
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
            
            document.querySelector('.dice-1').style.display = "none";
            document.querySelector('.dice-2').style.display = "none";
    
}


document.querySelector('.btn-new').addEventListener('click', init);
                                              
    


function init()
{
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    isGamePlaying = true;
    document.querySelector('.dice-1').style.display= 'none';
    document.querySelector('.dice-2').style.display= 'none';
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



