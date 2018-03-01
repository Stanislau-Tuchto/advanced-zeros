module.exports = function getZerosCount(number, base) {
  // your implementation
    let zeros = 0, i = 1,j=2, five_pow ,primal,flag = false;
    while(j<=Math.sqrt(base)){
        if(base%j === 0){
            base = base/j;
            flag = true;
          }else{
              j++;
            }
         if(!flag) j= base;
      }
    flag = true;
    while(flag) {
        five_pow = Math.pow(j,i)
        if(five_pow<number){
            zeros += (number - number %five_pow)/five_pow;
            i++;
        }else flag=false;
    }
    return zeros
}
