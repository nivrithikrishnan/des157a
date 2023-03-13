(function(){
    "use strict"; 
    console.log("reading js");

    const startGame = document.getElementById('startgame'); 
    const gameControl = document.getElementById('gamecontrol'); 
    const game = document.getElementById('game'); 
    const score = document.getElementById('score'); 
    const actionArea = document.getElementById('actions'); 

    const rollSound = new Audio('media/dice-roll.wav');
    const winSound = new Audio('media/win.mp3');

    const gameData = {
        dice: ['./images/1die.png', './images/2die.png', './images/3die.png', 
               './images/4die.png', './images/5die.png', './images/6die.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener("click", function(){
        //randomly set game index 
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        gameControl.innerHTML = `<h2>The Game Has Started</h2>`;
        gameControl.innerHTML = `<button class="red" id="quit">Quit</button>`;

        document.getElementById('quit').addEventListener("click", function(){
            location.reload();
        });

        console.log("setup the turn!"); 
        setUpTurn();
    });

    document.getElementById("help").addEventListener("click", function(){
        document.getElementById("instructions").style.display = "flex";
    });

    document.getElementById("close").addEventListener("click", function(){
        document.getElementById("instructions").style.display = "none";
    });

    function setUpTurn(){
        game.innerHTML=`<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = `<button id="roll">Roll the Dice</button>`;
        document.getElementById('roll').addEventListener('click', function(){
            console.log("roll the dice!"); 
            throwDice();
        }); 
    }

    function throwDice(){
        actionArea.innerHTML = ""; 
        gameData.roll1 = Math.floor(Math.random() * 6) + 1; 
        gameData.roll2 = Math.floor(Math.random() * 6) + 1; 
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img class="dice" src="${gameData.dice[gameData.roll1-1]}">
                           <img class="dice" src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2; 

        //two 1s
        if (gameData.rollSum === 2){
            console.log("snake eyes were rolled"); 

            game.innerHTML = `<p>Oh snap! Snake eyes!</p>`;
            gameData.score[gameData.index] = 0; 
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
        //either dice was a 1
        } else if (gameData.roll1 === 1 || gameData.roll2 === 1){
            console.log("one of the two dice was a 1"); 

            game.innerHTML = `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);

            setTimeout(setUpTurn, 2000);
        //neither dice was a 1
        } else {
            console.log("the game proceeds");

            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum; 
            actionArea.innerHTML = `<button id="rollagain">Roll Again</button> or <button id="pass">Pass</button>`;

            document.getElementById('rollagain').addEventListener('click', function(){
                setUpTurn(); 
            });

            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn(); 
            });
            rollSound.play();
        }
        showCurrentScore();
        checkWinningCondition();
        rollSound.play();
    }

    function checkWinningCondition(){
        //check for a win
        if (gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]}
            wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = ''; 
            document.getElementById('quit').innerHTML = "Start a New Game?";
            winSound.play();
        //show current score
        } else {
            showCurrentScore();
        }
    }

    function showCurrentScore(){
        score.innerHTML = `<p> 
            <strong>${gameData.players[0]}</strong> currently has <strong>${gameData.score[0]}</strong> points <br> 
            <strong>${gameData.players[1]}</strong> currently has <strong>${gameData.score[1]}</strong> points</p>`;
    }
})

(); 