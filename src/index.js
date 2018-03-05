module.exports = function getZerosCount(number, base) {
    let zeros = 0, j = 2, i = 0, five_pow,primal=[];buf=0;
    while (base!==1) {
        if (base % j == 0) {
            base = base / j;
            i++;
            primal.push([j,i]);
        }
        else {
            i = 0;
            j = j + 1;
        }
    }
    for(let k = 0; k<primal.length-1; k++){
        if (primal[k][0]===primal[k+1][0]){
            primal.splice(k, 1);
            k--;
        }
    }

    buf = calcZero(primal[0][0]);
    zeros = (buf - buf%primal[0][1])/primal[0][1];

    for(let k = 1; k<primal.length; k++){
        buf = calcZero(primal[k][0]);
        buf = (buf - buf%primal[k][1])/primal[k][1];
        zeros = (buf<zeros)?buf:zeros;
    }

    function calcZero(base) {
        let k=1,zeroBuf=0, flag = true;
        do {
            five_pow = Math.pow(base, k);
            if (five_pow < number) {
                zeroBuf += (number - number % five_pow) / five_pow;
                k++;
            } else flag = false;
        } while (flag);
        return zeroBuf;
    }
    return zeros;
}

