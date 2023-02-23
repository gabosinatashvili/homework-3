let Gabo = 0
let Mari = 0
while(Gabo != 3 || Mari !=3){
    Gabo = rollTheDice()
    Mari = rollTheDice()
    console.log(`მოთამაშე 1- ${Gabo} მოთამაშე 2- ${Mari}`);
    
    if(Gabo == 3){
        console.log("პირველმა მოთამაშემ მოიგო")
        break
    }else if(Mari == 3){
        console.log("მეორე მოთამაშემ მოიგო")
        break
    } 
}
function rollTheDice(){
    return parseInt(Math.random()*6)+1
} 