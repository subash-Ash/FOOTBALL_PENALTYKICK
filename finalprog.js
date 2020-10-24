
let score = [0,1];
var turn;
var team1={
    name:"MANCHESTER UNITED",
    goals:[],
    score:0
};
var team2={
    name:"MANCHESTER CITY",
    goals:[],
    score:0
};
var team3={
    name:"REAL MADRID",
    goals:[],
    score:0
};
var team4={
    name:"BARCELONA",
    goals:[],
    score:0
};
var team5={
    goals:[],
    score:0
};
var team6={
    goals:[],
    score:0
};

window.onload = ()=>{
    selectTurn();
    updateScore();
    updateName();
    updateButtontext();
    updateButtontext1();
    updateButtontext2();
}

function selectTurn(){
    console.log("select turn");
    turn=Math.round(Math.random())+1;
}

function updateButtontext(){
    var button = document.getElementById("shootbutton");
    var result = document.getElementById("result");
    result.style.visibility="";
    button.textContent = `${turn===1?team1.name: team2.name}`;
if(team1.goals.length==5 && team2.goals.length==5){
    button.remove();
    
    result.textContent = team1.score===team2.score?`Match Draw`:`${team1.score>team2.score?team1.name:team2.name} WINS`;

}
else{
    turn=team1.goals.length===5?2:team2.goals.length===5?1:turn;
}
}
function updateScore(){
    document.getElementById("team1-score").textContent = team1.score;
    document.getElementById("team2-score").textContent = team2.score;
    updateRuns();
    document.getElementById("team3-score").textContent = team3.score;
    document.getElementById("team4-score").textContent = team4.score;
    updateRuns1();
    document.getElementById("team5-score").textContent = team5.score;
    document.getElementById("team6-score").textContent = team6.score;
    updateRuns2();
}
function updateName(){
    document.getElementById("team1-name").textContent = team1.name;
    document.getElementById("team2-name").textContent = team2.name;
    document.getElementById("team3-name").textContent = team3.name;
    document.getElementById("team4-name").textContent = team4.name;

}



function shootButton(){
    console.log("Button click");
    var goals= score[Math.floor(Math.random()*score.length)];
    console.log(goals);
    if(turn==1){
        team1.goals.push(goals);
        team1.score = calculateScore(team1.goals);
        console.log(team1.score);
    }
    else{
        team2.goals.push(goals);
        team2.score = calculateScore(team2.goals);
        console.log(team1.score);
    }
    
    updateScore();
    updateButtontext();

}

var calculateScore = (goals) => {
    return goals.map(goals =>{
        return goals=='w'?0:goals;
    }).reduce((total,goals)=>total+goals)

}

function updateRuns(){
    var team1goals = document.getElementById("team1-goals").children;
    var team2goals = document.getElementById("team2-goals").children;
    team1.goals.forEach((goals,index) => {
        team1goals[index].textContent = goals;
        
    })
    team2.goals.forEach((goals,index) => {
        team2goals[index].textContent = goals;
        
    });
} 

function updateButtontext1(){
    var button = document.getElementById("m2shootbutton");
    var result = document.getElementById("result1");
    result.style.visibility="";
    button.textContent = `${turn===1?team3.name: team4.name}`;
if(team3.goals.length==5 && team4.goals.length==5){
    button.remove();
    result.textContent = team3.score===team4.score?`Match Draw`:`${team3.score>team4.score?team3.name:team4.name} WINS`;

}
else{
    turn=team3.goals.length===5?2:team4.goals.length===5?1:turn;
}
}

function updateRuns1(){
    var team3goals = document.getElementById("team3-goals").children;
    var team4goals = document.getElementById("team4-goals").children;
    team3.goals.forEach((goals,index) => {
        team3goals[index].textContent = goals;
        
    })
    team4.goals.forEach((goals,index) => {
        team4goals[index].textContent = goals;
        
    });
} 
function m2shootButton(){
    console.log("Button click");
    var goals= score[Math.floor(Math.random()*score.length)];
    console.log(goals);
    if(turn==1){
        team3.goals.push(goals);
        team3.score = calculateScore(team3.goals);
        console.log(team3.score);
    }
    else{
        team4.goals.push(goals);
        team4.score = calculateScore(team4.goals);
        console.log(team4.score);
    }
    
    updateScore();
    updateButtontext1();

}
var name1;
var name2;
function final(){

    if(team1.score>team2.score){
        document.getElementById("finalteam1img").src="580b57fcd9996e24bc43c4e7.png";
        document.getElementById("team5-name").textContent=team1.name;
        name1=team1.name;
    }
    else{
        document.getElementById("finalteam1img").src="unnamed.png";
        document.getElementById("team5-name").textContent=team2.name;
        name1=team2.name;
    }
    if(team3.score>team4.score){
        document.getElementById("finalteam2img").src="real-madrid-logo-vector.png";
        document.getElementById("team6-name").textContent=team3.name;
        name2=team3.name;
    }
    else{
        document.getElementById("finalteam2img").src="barcelona-logo-vector-300x300.png";
        document.getElementById("team6-name").textContent=team4.name;
        name2=team4.name;
    } 
}

function updateButtontext2(){
    var button = document.getElementById("m3shootbutton");
    var b = document.getElementById("final");
    var result = document.getElementById("result2");
    result.style.visibility="";
    button.textContent = `${turn===1?"SHOOT": "SHOOT"}`;
if(team5.goals.length==5 && team6.goals.length==5){
    button.remove();
    b.remove();
    
    result.textContent = team5.score===team6.score?name1` WINS THE FINALS`:`${team5.score>team6.score?name1:name2} WINS THE FINALS`;

}
else{
    turn=team5.goals.length===5?2:team6.goals.length===5?1:turn;
}
}

function m3shootButton(){
    console.log("Button click");
    var goals= score[Math.floor(Math.random()*score.length)];
    console.log(goals);
    if(turn==1){
        team5.goals.push(goals);
        team5.score = calculateScore(team5.goals);
        console.log(team5.score);
    }
    else{
        team6.goals.push(goals);
        team6.score = calculateScore(team6.goals);
        console.log(team6.score);
    }
    
    updateScore();
    updateButtontext2();

}

function updateRuns2(){
    var team5goals = document.getElementById("team5-goals").children;
    var team6goals = document.getElementById("team6-goals").children;
    team5.goals.forEach((goals,index) => {
        team5goals[index].textContent = goals;
        
    })
    team6.goals.forEach((goals,index) => {
        team6goals[index].textContent = goals;
        
    });
} 