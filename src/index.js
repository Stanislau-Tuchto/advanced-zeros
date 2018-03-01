module.exports = function getZerosCount(number, base) {
  // your implementation
    let zeros = 0, i = 1,j=2, five_pow ,primal,flag = true;
    while(j<=Math.sqrt(base)){
        if(base%j === 0){
            base = base/j;
           
          }else{
              j++;
            }
       
      }
 
    while(flag) {
        five_pow = Math.pow(base,i)
        if(five_pow<number){
            zeros += (number - number %five_pow)/five_pow;
            i++;
        }else flag=false;
    }
    return zeros
}
