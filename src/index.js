module.exports = function getZerosCount(number, base) {
  // your implementation
    let count="";
    let zeros = 0, i = 1, five_pow ,flag = true;
    while(flag) {
        five_pow = Math.pow(5,i)
        if(five_pow<number){
            zeros += (number - number %five_pow)/five_pow;
            i++;
        }else flag=false;
    }
    console.log(zeros+" zeros");
    // base =8;
    // zeros = 615;
    if(10 !== base){
        while(zeros>=base){
            count+=zeros%base+";";

            zeros=(zeros - zeros%base)/base;
            console.log(zeros+" z");

        }
        count+=zeros;
        console.log(count.split(';').reverse().join('')+" zb");

    }else return zeros;
    return count;
}