module.exports = function getZerosCount(number, base) {
    let zeros = 0,j=2, n=base,five_pow ,primal,flag = true;
    while(j<=Math.sqrt(base)){
        if(base%j==0){
            base=base/j;
        }
        else {
            j = j + 1;
        }
    }
    console.log("base=" + base);
    j=1;
    do {
        five_pow = Math.pow(base,j);
        if(five_pow<number){
            zeros += (number - number %five_pow)/five_pow;
            j++;
        }else flag=false;
    }while(flag);

    j=1;
    console.log(n%Math.pow(base,j));
    while (n%Math.pow(base,j+1) === 0){
        j++;
        console.log("j="+j+" %= "+n%Math.pow(base,j));

    }
    console.log("final j = "+j);
    return (zeros-zeros%j)/j;
}

