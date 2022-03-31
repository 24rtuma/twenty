cpTotal = 0;
huTotal = 0;

function human() {
    var m = prompt(`Hello, what's your name?`)
    return m 
}

var q = human()

function randomNum() {
    var ran = Math.floor(Math.random()* 10 ) + 1;
    return ran
}
function com () {
    do{
        var a = randomNum()
        cpTotal= cpTotal + a
    }
        while (cpTotal < 16);
        return cpTotal
}

function user(){
    do{
        var ran = randomNum()
        alert(`Your turn.`);
        huTotal = huTotal + ran;
        alert(`Your number is ${Huran}.\n\n\n You now have a total of ${huTotal}`)
        var q1 = prompt(`Would you like to draw another card? Yes or No?`)
        if(huTotal > 20) {
            break;
        }
    } while ( (huTotal < 20) && (q1 == `yes`) );
    return huTotal
}

    function results (cpTotal, huTotal){
        if ( ( cpTotal < huTotal) && cpTotal <=20) && (huTotal<= 20)
    }