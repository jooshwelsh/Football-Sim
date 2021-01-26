// wft vs tb
//prekickoff
var wftscore=0
var tbscore=0
var time=0.0 //float
var poss
var homefield
var wftseed=6
var tbseed=9
var down=1
var ytf
var ytg
const readlineSync = require("readline-sync");


//What quater?
//Input(s):  1 input: Float. "x"--> Time lapsed starting from 00:00
//Ouput(s): 1 input: Integer--> Quater #1,2,3,4


// Touchdown
//Input(s): 1 input: String. "team"--> Sores 6 points!
//Output(s): 1 output: Integer--> +6

function td() {
console.log("inside of td");
console.log("poss is " + poss)
  if(poss == "wft") {
    wftscore+=6


  }
  if(poss == "tb")  {
    tbscore+=6

  }
  console.log("The score of the game is Wft: " + wftscore + " Tampa " + tbscore)
}


//Extra Point
//Input(s): 1 input: String. "team"--> Scores 1 points
//Output(s): 1 output: Integer--> +1

function pat()  {
  if("wft"==poss) {
    wftscore+=1

  }
  if("tb"==poss)  {
    tbscore+=1

  }
  console.log("The score of the game is: Wft: " + wftscore + "Tampa " + tbscore)
  pun()
}


// Field Goals
//Input(s): 1 input: String. "team"--> Scores 3 points!
//Output(s): 1 input: Integer--> +3

function fg(team)  {
  if("wft"==team) {
    wftscore+=3
    return(wftscore)
  }
  if("tb"==team)  {
    tbscore+=3
    return(tbscore)
  }
}


//Punts
//Input(s): 1 input: String. "recteam"--> gets the rock
//Output(s): 1 ouput: String. "poss"--> wft or tb
function pun()  {
  if("wft"==poss) {
    poss="tb"
  }
  if("tb"==poss)  {
    poss="wft"
  }
  down =0
  ytf=10
  ytg=75

}


//Turnover
//Input(s): 0 input
//Output(s): 0 output: bc we are changing a global variable up top^^^^. "poss"--> wft or tb
function to(){

if("wft"==poss){

  poss="tb"

}

else {

  poss="wft"

}

}

//Math.random
// get Random Integer--> ("max"= # of integers needed)
//Inside: "Math.random" generates random decimal 'weight'
// "Math.floor" returns largtest integer value LESS than or EQUAL to a ~number~
//Ex. getrandomInt(2.13)--> Math.floor(0.67*2)--> = Math.floor(1.34)-->
//Final Result= 1
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


// Coin Flip
//
function cf(){
  var winner //local variables...
  var decision
  var choice
  var flip
  var deferchoice
  var select

// Ask question  1: heads or tails, store user input in variable "decision"
 decision = readlineSync.question('Heads or Tails? ');
   choice = decision;
   // generate random Int between 0 and 1, store in "flip"
   flip=(getRandomInt(2))
   //change 0 or 1 to a string "heads or tails"
  if(flip==0){
    flip= "Heads"
  }
  else {
    flip= "Tails"
  }

  console.log("You guessed "+ choice)
    console.log("The result of the flip is " + flip)

//localvariable.toLowerCase--> User input isn't case sensitive anymore
//comparing the user's "choice" & the actual outcome of the "flip"
if(choice.toLowerCase()==flip.toLowerCase()){

winner="wft"
}
else{
  winner="tb"
}

if(winner=="wft"){
  //Ask question  2 to user's team if they win: kick or receive, store user input in variable "deferchoice"
  deferchoice = readlineSync.question("You won the toss. Kick or Receive? ") ;
console.log("wft picked "+ deferchoice)
//localvariable.toLowerCase--> User input isn't case sensitive anymore
//comparing user's "deferchoice" & String of "K/kick"
if(deferchoice.toLowerCase()=="kick"){
console.log('wft kicks to tb')
  poss="tb"
  ytf=10
  ytg=75
  //set "poss" based on result
}
else{
  console.log('tb kicks to wft')
  poss="wft"
  ytf=10
  ytg=75
  //set "poss" based on result
}

}
//IF "wft"!= winner, "tb" has a choice to Kick or Receive
else{
// generate random Int between 0 and 1, store in "select"
  select=(getRandomInt(2))
  //change 0 or 1 to a string "K/kick or R/receive"
  if(select==0){
    select= "Kick"
    poss= "wft"
    ytf=10
    ytg=75
    console.log("TB chooses to " + select)
    console.log('tb kicks the ball to wft')
    //set "poss" based on result
  }
  else {
    select= "Receive"
    poss= "tb"
    ytf=10
    ytg=75
    console.log("TB chooses to " + select)
    console.log('wft kicks the ball to tampa bay')
    //set "poss" based on result
  }


}


}



// Lower 'number' from global variables up top= Homefield
// Comparing "wftseed" to "tbseed" with <
function hf(wftseed,tbseed){
  if(wftseed<tbseed){
//set "homefield" to lowerseed string
     homefield="wft"

  }
  else {
    homefield="tb"

  }
return homefield
}




function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
return array
}



// Object or Array. Which every you prefer.
var tbplay = {

run:36, // Weighted Probability
pass:64, // Weighted Probability

};

//Choose a play with a weighted probability based on stats
//We want to creat an array that is size 100 (100%) and fill it with the appropriate number of...
//of each possibility/option in the OG array.
function createweights(input, newarray) {
for(var item in input) {

        for( var i=0; i<input[item]; i++ ) {

            newarray.push(item);

        }

}
// Probability Fun
//return array[Math.floor(Math.random() * array.length)];
newarray=shuffle(newarray)
return newarray
}


//(.78*100)= 78
//-->78--> "adjustedtbplay"[78]--> grabbing the 78th "tbplay"
function rando(array){
  return array[Math.floor(Math.random() * array.length)]
}

var adjustedtbplay = [];
//(creatweights(input, newarray))
createweights(tbplay, adjustedtbplay)


var gaussian = require('gaussian');



function guass(avg,variance){
  var distribution = gaussian(avg,variance);
  // Take a random sample using inverse transform sampling method.
  var sample = distribution.ppf(Math.random());

return sample

}



tbrushatt=[26,22,25,27,20,35,25,24,5,37,18,13,26,18,26,22]
tbrushyds=[86,122,68,115,106,158,85,81,8,210,42,75,107,51,111,94]
tbpssatt=[23,23,25,30,25,17,33,28,22,28,26,27,15,31,31,26]
tbpsscom=[36,35,38,46,41,28,45,40,38,39,48,41,23,45,42,41]
tbpssyds=[239,217,297,369,253,166,369,279,209,341,216,345,196,390,491,399]


wrushatt=[36,23,22,22,14,26,39,9,26,34,36,21,28,20,19,27]
wrushyds=[80,117,103,69,38,132,208,37,89,164,182,45,98,84,108,103]
wpssatt=[17,19,21,32,18,31,15,29,38,17,20,31,15,38,26,22]
wpsscom=[31,33,37,45,30,42,25,39,55,25,27,46,32,55,47,32]
wpssyds=[178,223,224,314,111,280,194,387,390,166,177,296,108,295,291,162]


//ROBUST AVERAGE FUNCTION FOR ANY SIZE ARRAY
function avg(array){
var sum=0
//Lines :
//Executes array "length" amount of times number of times.
for(i=0; i<array.length; i++){

      sum=array[i]+sum

}
//lines 469-475:
//Executes 1 time.
var mean

mean=sum/array.length

//return avg
return mean


}


function calc(array,array1){
var fin=[]

for(i=0; i<array.length; i++){

fin.push(array1[i]/array[i])

}

return fin

}

function vari(array,avg1){
var variance
var sigarray=[]
var sigsq=[]
for(i=0; i<array.length; i++){
//sample-mean for each sample in array
sigarray.push(array[i]-avg1)
}
for(i=0; i<array.length; i++){

sigsq[i]=(sigarray[i]*sigarray[i])//--->>> OR sigsq.push(sigarray[i]*sigarray[i])

}

variance=avg(sigsq)

return variance

}


//samples
//team yards per carry per game
tbypc=calc(tbrushatt,tbrushyds)
wypc=calc(wrushatt,wrushyds)

tbcomp=calc(tbpsscom,tbpssatt)
tbcomp=tbcomp.map(x=>x*100)
//team completion % per game
wcomp=calc(wpsscom,wpssatt)
wcomp=wcomp.map(x=>x*100)
//team yards per pass per game
tbypp=calc(tbpsscom,tbpssyds)
wypp=calc(wpsscom,wpssyds)

//variance
tbypcv=vari(tbypc,avg(tbypc))
wypcv=vari(wypc,avg(wypc))
tbcompv=vari(tbcomp,avg(tbcomp))
wcompv=vari(wcomp,avg(wcomp))
tbyppv=vari(tbypp,avg(tbypp))
wyppv=vari(wypp,avg(wypp))



function movetc(gyards){

ytf=ytf-gyards
  ytg=ytg-gyards
  if(ytf<=0){
    down=0
    ytf=10
  }
  if(ytg<=0){
    console.log("ytg<0 inside movetc ");
    console.log("calling td and pat ");
    td();
    pat();
    down=0
    ytf=10
}
}





function play(){
  if(poss=='wft'){

var playcall=readlineSync.question("What play would you like to run? (run/pass)")




if(playcall=='run'){

  yards=run()

}
else{

  yards=passc()

}

}
else{

  yards=tbp()


}

movetc(yards)

}




//randombly pick a play based on stats at top

function tbp(){

playt=rando(adjustedtbplay)

if(playt=='run'){


yards=run()

}
  else{


yards=passc()

}
return yards
}







function run(){
//call either "gain or loss" based on our calculation of probability of one or the other

  if(poss=="wft"){
    yards=guass(avg(wypc),wypcv)
  }

else{
  yards=guass(avg(tbypc),tbypcv)
}
return Math.floor(yards)
}


function passc(){
//call either "gain or loss" based on our calculation of probability of one or the other
//Only going to one function call "gain or loss"

    if(poss=="wft"){
      if(guass(avg(wcomp),wcompv)<60){
        console.log('incomplete pass ')
yards=0
      }
      else{

yards=guass(avg(wypp),wyppv)

      }

    }

    else{
if(guass(avg(tbcomp),tbcompv)<60){
  console.log('incomplete pass ')
  yards=0
}
  else{
      yards=guass(avg(tbypp), tbyppv)

    }
  }
return Math.floor(yards)

}




//looping downs
//play() function will choose run or pass
//ask user if they want to go for it
function playgame(){
var goforit

for(down=1;down<=4;down++){
  console.log(poss)
  console.log("The down is " + down + " the yards to first " + ytf + " the yards to goal " + ytg)

checkfour(down)


time1 = time
time +=.25;
time2 = time
check_time(time1,time2)

if(time == 13 || time == 28 || time == 43 || time == 58){
  console.log("there are 2 minutes left in the quarter")
}

}


}

function checkfour(down){

  if(down==4&&poss=='wft'){

  goforit=readlineSync.question("Would you like to go for it? (yes/no) ")
    if(goforit=='no'){
      pun()
    }
    else{

     play()
	}

    }

  else if (down==4&&poss=='tb'){
    pun()
    playgame()
    }
    else {
      play()
    }

}




//check when we cross the quarter "threshold"
function check_time(t1,t2){
  if(t1 <=15 && t2 > 15){
    console.log("it is now the 2nd quarter")
  }
  else if(t1<=30 && t2 >30){
    console.log("it is now the 3rd quarter")
  }
  else if(t1 <= 45 && t2 >45){
    console.log("it is now the 4th quarter")
  }

}



//Intialize game
//Calling "homefield" function, "coin flip", and starts the game
function initgame(){

  hf(wftseed,tbseed)
  cf()
  playgame()

}

initgame()
