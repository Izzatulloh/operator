let name = prompt('Ismingizni kriting');
alert(name);

let age = +prompt('Yoshingizni kriting');
if (age > 0 && age <= 18) {
    alert(" Yoshsiz. O'qishingiz kerak ");
} else if (age > 18 && age <= 50) {
    alert(' Ishlashingiz kerak ');

}else if( age > 50 && age <=59){
    alert('Yaqinda pensiyaga chiqasiz')
}else if(age > 59 && age <= 150){
    alert("Pensionerga o'xshaysiz. Agar tirik bo'lsangiz :)");
} else{
    alert("Nimadir noto'g'ri ketb qoldi")    
}

let time = +prompt('Vaqtni kiriting')
switch ( time ){
    case 1: alert('tungi soat 1 ');
    break;
    case 2: alert('tungi soat 2 ');
    break;
    case 3: alert('tungi soat 3 ');
    break;
    case 4: alert('tong soat 4 ');
    break;
    case 5: alert('tong soat 5 ');
    break;
    case 6: alert('tong soat 6 ');
    break;
    case 7: alert('kunduzgi soat 7 ');
    break;
    case 8: alert('kunduzgi soat 8 ');
    break;
    case 9: alert('kundizgi soat 9 ');
    break;
    case 10: alert('kundizgi soat 10 ');
    break;
    case 11: alert('kundizgi soat 11 ');
    break;
    case 12: alert('kundizgi soat 12 ');
    break;
    case 13: alert('kundizgi soat 1 ');
    break;
    case 14: alert('kundizgi soat 2 ');
    break;
    case 15: alert('kundizgi soat 3');
    break;
    case 16: alert('kundizgi soat 4');
    break;
    case 17: alert('kundizgi soat 5');
    break;
    case 18: alert('kundizgi soat 6');
    break;
    case 19: alert('kechki soat 7');
    break;
    case 20: alert('kechki soat 8');
    break;
    case 21: alert('kechki soat 9');
    break;
    case 22: alert('kechki soat 10');
    break;
    case 23: alert('kechki soat 11');
    break;
    case 24: alert('tungi soat 00');
    break;
    default:alert('notori kiritingiz'); 
    break;    
}
let number_1 = +prompt('1 chi son kriting');
let number_2 = +prompt('2 chi son kriting');
let number_3 = +prompt('3 chi son kriting');
if(number_1 < number_2 && number_2< number_3 || number_1 > number_2 && number_2> number_3){
    alert(number_2)
}
else if(number_2 < number_1 && number_1 < number_3 || number_2 > number_1 && number_1 > number_3){
    alert(number_1)
}
else if(number_1 < number_1 && number_3){
    alert(number_3)
}