

const bank = () => {
    balance = 0
    // return intoDeposit  => {
    //     balance = balance += intoDeposit
    //     return balance
    // }
  return {
    deposit: amount => {
        balance += amount
        return balance 
   },
    withdraw: amount => {
        balance -= amount
        return balance 
   }
  }  
 
}
// console.log(myBank(100)) old
const myBank = bank('hamed')
console.log(myBank.deposit(100))
console.log(myBank.deposit(100))
console.log(myBank.deposit(100))
console.log(myBank.deposit(100))
console.log(myBank.deposit(100))

console.log(myBank.withdraw(200))
console.log(myBank.withdraw(200))


const personMoney = 5000;
function test(age,earning){
    console.log(canMerry(1))
    console.log(trueAge);
    var trueAge = age + 7
    return trueAge

    function canMerry (expense){
        const remaining = personMoney + earning - expense
        console.log(showing);
        if(remaining > 1000){
            var showing = 500
            return true
        }
        return false
    }
}

test(21,2222222)