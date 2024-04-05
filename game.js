const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", function () {
    document.getElementById("box1").innerHTML = '<h1>You</h1><img style="width:350px; height:200px; " src="assets/rock-hand.png" alt="Rock"><div class="logo"><img id="rock" src="assets/rock-logo.png"><img src="assets/paper-logo.png"><img src="assets/scissors-logo.png"></div></div>';
    randomImages();
    checkScore();
});

paper.addEventListener("click", function () {
    document.getElementById("box1").innerHTML = '<h1>You</h1><img style="width:350px; height:200px; " src="assets/paper-hand.png" alt="Paper"><div class="logo"><img id="rock" src="assets/rock-logo.png"><img src="assets/paper-logo.png"><img src="assets/scissors-logo.png"></div></div>';
    randomImages();
    checkScore();
});

scissors.addEventListener("click", function () {
    document.getElementById("box1").innerHTML = '<h1>You</h1><img style="width:350px; height:200px; " src="assets/scissors-hand.png" alt="Scissors"><div class="logo"><img id="rock" src="assets/rock-logo.png"><img src="assets/paper-logo.png"><img src="assets/scissors-logo.png"></div></div>';
    randomImages();
    checkScore();
});



function randomImages() {
    const img = document.getElementById("box2");
    const arr = [
        'assets/paper-hand.png',
        'assets/rock-hand.png',
        'assets/scissors-hand.png'
    ];
    const arr1 = [
        'Paper',
        'Rock',
        'Scissors'
    ];
    const randomIndex = Math.floor(Math.random() * arr.length);
    document.getElementById("box2").innerHTML = `<h1>comp</h1><img style="width:350px; height:200px; display: flex;align-items:center;justify-content: center;" src="${arr[randomIndex]}" alt="${arr1[randomIndex]}">`;
}

var score1 = 0;
var score2 = 0;
function checkScore() {
        const box1Imagealt = document.getElementById("box1").querySelector("img").alt;
        const box2Imagealt = document.getElementById("box2").querySelector("img").alt;
    
        if(box1Imagealt==box2Imagealt){
        }
        else if(box1Imagealt == "Rock" && box2Imagealt == "Scissors"){
            score1 +=1
            winners()
        }
        else if(box1Imagealt == "Rock" && box2Imagealt == "Paper"){
            score2 +=1
            winners()
        }
        else if(box1Imagealt == "Scissors" && box2Imagealt == "Paper"){
            score1 +=1
            winners()
        }
        else if(box1Imagealt == "Scissors" && box2Imagealt == "Rock"){
            score2 +=1
            winners()
        }
        else if(box1Imagealt == "Paper" && box2Imagealt == "Rock"){
            score1 +=1
            winners()
        }
        else if(box1Imagealt == "Paper" && box2Imagealt == "Scissors"){
            score2 +=1
            winners()
        }
    
        console.log("Box1 :", box1Imagealt);
        console.log("Box2 :", box2Imagealt);
        document.getElementById("you").innerHTML = `${score1}`
        document.getElementById("comp").innerHTML = `${score2}`
        console.log(score1)
        console.log(score2)
    }
   function winners(){

        if(score1==1){
            document.getElementById("winner").innerHTML = ' <div id="winner"><h5 style="font-size: 30px;">You won the game</h5> <button style="color: white; background-color: rgb(231, 183, 11);font-size: 20px;text-align: center;">play Again</button></div>'
            
        }
        else if (score2==1){
            document.getElementById("winner").innerHTML = ' <div id="winner"><h5 style="font-size: 30px;">Comp won the game</h5> <button style="color: white; background-color: rgb(231, 183, 11);font-size: 20px;text-align: center;">play Again</button></div>'
           
        }
    }

