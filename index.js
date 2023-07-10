function playerSelection(string) {

    let test = string;

    // while (check(test) === false) {
    //     test = prompt(
    //         "choose one of these options: paper, rock or scissor"
    //     ).toLocaleLowerCase();
    // }
    // return (player_choix = test);
    return test;
    // take input from the player then check it
}

// function check(test) {

//     let choice = ["paper", "rock", "scissor"];
//     let exit = false;
    
//     for (let i = 0; i <= test.length; i++) {
//         if (choice[i] === test) {
//             exit = true;
//             break;
//         }
//     }
//     // check if the player only paper rock or scissors
//     return exit;
// }

function computerSelection() {
    const comptS = Math.floor(Math.random() * 3) + 1;
    if (comptS === 1) {
        return "paper";
    } else if (comptS === 2) {
        return "rock";
    } else {
        return "scissor";
    }
    // take random choice from the computer
}

function PlayRound(string) {
    console.log(string);

    player = playerSelection(string);
    compt = computerSelection();

    
    return GameLogic(player,compt);
    
    // take input from the player and the computer and put them in vars
}

function GameLogic(player, compt) {

    if (player === "paper") {
        if (compt === "rock") {
            return "player";
        } else if (compt === "scissor") {
            return "compt";
        } else {
            return "Tie";
        }
    }

    if (player === "rock") {
        if (compt === "paper") {
            return "compt";
        } else if (compt === "scissor") {
            return "player";
        } else {
            return "Tie";
        }
    }

    if (player === "scissor") {
        if (compt === "paper") {
            return "player";
        } else if (compt === "rock") {
            return "compt";
        } else {
            return "Tie";
        }
    }

    console.log(compt);
    // game logic that will decide the winner for only one round
}

function game(string) {
    let play_w = 0;
    let compt_w = 0;
    while (play_w !== 5 && compt_w !== 5) {
        if (PlayRound(string) === "player") {
            play_w++;
        } else {
            compt_w++;
        }
    } 
    let rest=[play_w,compt_w];
    
    console.log("player= "+play_w ,'\n',"computer= ",compt_w);
    
    return rest;
    // play 5 rounds and take result each round until one of them wins
}

function result(string){
    let rest=game(string);
    let winner;
    if (rest[0]>rest[1]){
        winner='player won !'
    }
    if (rest[0]<rest[1]){
        winner="computer won !"
    }
    return alert(winner);
    // decide who is the winner 
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
      result(button.id);
    });
  });
  