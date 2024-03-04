//score 
let PC = JSON.parse(localStorage.getItem(".Comp_score"));
let PC_score = document.querySelector(".Comp_score");
let User_score = document.querySelector(".User_score");


let scoreStr = localStorage.getItem('score');
let score = JSON.parse(scoreStr) || {
    Player_win: 0,
    Computer_win: 0,
    tie: 0,
};
localStorage.setItem('score', JSON.stringify(score));
User_score.innerHTML = score.Player_win;
PC_score.innerHTML = score.Computer_win;

//dom
let con = document.querySelectorAll(".con");
let computer = document.querySelectorAll(".computer");
let triangle = document.querySelector(".triangle");
let user = document.querySelector(".user");
let machine = document.querySelector(".machine");
let random = Math.floor(Math.random() * 3);
let win_con = document.querySelector(".win-con");
let winner = document.querySelector(".winner");
let next = document.querySelector(".next");
let tieUp = document.querySelector(".tieUp");
let replay = document.querySelector(".replay");
let play_again = document.querySelector(".play_again");

//game 

con.forEach((element, index) => {
    element.addEventListener("click", () => {

        triangle.style.display = "none";
        con.forEach(item => {
            item.style.display = "none";
        });
        element.style.display = "block";
        element.classList.add("show");

        machine.style.opacity = "1";
        computer[random].style.display = "block";
        computer[random].classList.add("right");


        machine.style.display = "block";
        user.style.display = "block";


        if (index == 0 && random == '1' ||
            index == 1 && random == '2' ||
            index == 2 && random == '0') {
            win_con.style.display = "block";
            winner.innerText = `YOU WIN \n AGAINST PC`;
            next.style.display = "block";
            element.classList.add("animation");
            score.Player_win = score.Player_win;

            score.Player_win += 1;
            localStorage.setItem('score', JSON.stringify(score));
            //to show the score immediately on screen 
            User_score.innerHTML = score.Player_win;

            //this is to show the score of pc and user together
            score.Computer_win = score.Computer_win;
            PC_score.innerHTML = score.Computer_win;
        }

        else if (index == 0 && random == '0' ||
            index == 1 && random == '1' ||
            index == 2 && random == '2') {
            tieUp.style.display = "block";
        }

        else {
            win_con.style.display = "block";
            winner.innerText = "You Lose \n AGAINST PC";
            score.Computer_win = score.Computer_win;
            score.Computer_win += 1;
            localStorage.setItem('score', JSON.stringify(score));
            //to show the score immediately on screen 
            PC_score.innerHTML = score.Computer_win;

            //this is to show the score of pc and user together
            score.Player_win = score.Player_win;
            User_score.innerHTML = score.Player_win;


        }

    });
});

play_again.addEventListener("click", () => {
    // alert("hello");
        window.location.reload();
   
});


replay.addEventListener("click", () => {
    window.location.reload();
    ;
})


//for rules 

const btnClose = document.querySelector('.cross');
const Rules_btn = document.querySelector('.btn-rule');
const rules = document.querySelector('.rule_book');

btnClose.addEventListener('click', () => {

    if (rules.style.display === 'none') {
        // 👇️ this SHOWS the rules
        rules.style.display = "block";
    }

    else {
        // 👇️ this HIDES the rules
        rules.style.display = 'none';
    }
});

Rules_btn.addEventListener('click', () => {
    const rules = document.querySelector('.rule_book');

    if (rules.style.display === 'none') {
        // 👇️ this SHOWS the rules
        rules.style.display = "block";
    }
});




