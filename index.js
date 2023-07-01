function playerSelection() {

    let test = prompt(
        "choose paper, rock or scissor",
        "paper"
    ).toLocaleLowerCase();

    while (check(test) === false) {
        test = prompt(
            "choose one of these options: paper, rock or scissor"
        ).toLocaleLowerCase();
    }
    return (player_choix = test);
}

function check(test) {

    let choice = ["paper", "rock", "scissor"];
    let exit = false;
    
    for (let i = 0; i <= test.length; i++) {
        if (choice[i] === test) {
            exit = true;
            break;
        }
    }
    return exit;
}

function computerSelection() {
    const comptS = Math.floor(Math.random() * 3) + 1;
    if (comptS === 1) {
        return "paper";
    } else if (comptS === 2) {
        return "rock";
    } else {
        return "scissor";
    }
}

function PlayRound() {

    player = playerSelection();
    compt = computerSelection();

    return GameLogic(player, compt);
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
}

function game() {
    let play_w = 0;
    let compt_w = 0;
    while (play_w !== 5 && compt_w !== 5) {
        if (PlayRound() === "player") {
            play_w++;
        } else {
            compt_w++;
        }
    }
    let rest=[play_w,compt_w];
    return rest;
}

function result(){
    let rest=game();
    let winner;
    if (rest[0]>rest[1]){
        winner='player won !'
    }
    if (rest[0]<rest[1]){
        winner="computer won !"
    }
    return winner;
}
alert(result())