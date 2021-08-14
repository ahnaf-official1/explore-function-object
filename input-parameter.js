// Parameter of function.
// Some persons call this argument also

function bringSingara(taka){
    console.log('Money for Singara', taka);
    console.log('Mama Singara Den');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice ;
    return singaraQuantity;
}

var money  = 250;
var singara = bringSingara(money);
console.log('here is your SIngara', singara);