
let currentScore, activePlayer, score;

function init() {
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.dice').hidden = true;
    document.getElementById('score--1').textContent = 0;
    document.getElementById('score--0').textContent = 0;
    document.getElementById('btn-roll-dice').disabled = false;
    document.getElementById('btn-hold').disabled = false;
}

init();

function switchPlayer() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer == 0 ? 1 : 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');


    
}

document.getElementById('btn-roll-dice').addEventListener('click', () => {
    document.querySelector('.dice').hidden = false;
    let nb = Math.trunc(Math.random() * 6) + 1;
    document.querySelector('.dice').src = `dice-${nb}.png`;
    if(nb != 1) {
        currentScore += nb;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else {
       // currentScore = 0;
        switchPlayer()
    }
})

document.getElementById('btn-hold').addEventListener('click', () => {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    if(score[activePlayer] >= 20) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.getElementById('btn-roll-dice').disabled = true;
        document.getElementById('btn-hold').disabled = true;
        document.querySelector('.dice').hidden = true;
    }
    switchPlayer();
})

document.getElementById('btn-new-game').addEventListener('click', init);