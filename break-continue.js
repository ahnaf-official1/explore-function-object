// var i = 0;
// while(i < 10){
//     console.log(i);
//     if(i==5){
//         break;
//     }
//     i++;
// }

// for(i=0; i <= 20; i++){
//     console.log(i);
//     if(i==10){
//         break;
//     }
// }

var numbers = [45, 78, 93, 38, 383, 83];
// for(var i = 0; i < numbers.length; i++){
//     var number = numbers[i];
//     console.log(number);
//     if(number < 100){
//         break;
//     }
// }
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    console.log(number);
    if(number < 100){
        continue;
    }
}